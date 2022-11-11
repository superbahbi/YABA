import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'
import { SignJWT, jwtVerify, type JWTPayload } from 'jose';
import { config } from '../config'

// Issue at time in seconds since epoch 
const iat = Math.floor(Date.now() / 1000);

enum TokenExpiration {
    Access = 5 * 60,
    Refresh = 7 * 24 * 60 * 60,
    RefreshIfLessThan = 4 * 24 * 60 * 60,
}

enum Cookies {
    AccessToken = 'access',
    RefreshToken = 'refresh',
}
interface UserDocument {
    id: string
    firstName: string
    lastName: string
    tokenVersion: number
}

interface AccessTokenPayload {
    userId: string
}

interface RefreshTokenPayload {
    userId: string
    version: number
}

interface RefreshToken extends RefreshTokenPayload {
    exp: number
}
const defaultCookieOptions: CookieSerializeOptions = {
    httpOnly: true,
    secure: config.isProduction,
    sameSite: config.isProduction ? 'strict' : 'lax',
    domain: config.baseDomain,
    path: '/',
}

const refreshTokenCookieOptions: CookieSerializeOptions = {
    ...defaultCookieOptions,
    maxAge: TokenExpiration.Refresh * 1000,
}

const accessTokenCookieOptions: CookieSerializeOptions = {
    ...defaultCookieOptions,
    maxAge: TokenExpiration.Access * 1000,
}

function signAccessToken(payload: AccessTokenPayload): Promise<string> {
    return new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(iat + TokenExpiration.Access)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(config.accessTokenSecret));
}

function signRefreshToken(payload: RefreshTokenPayload): Promise<string> {
    return new SignJWT({ payload })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setExpirationTime(iat + TokenExpiration.Refresh)
        .setIssuedAt(iat)
        .setNotBefore(iat)
        .sign(new TextEncoder().encode(config.refreshTokenSecret));
}

export async function verifyAccessToken(token: string): Promise<JWTPayload> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(config.accessTokenSecret));
    return payload
}

export async function verifyRefreshToken(token: string): Promise<JWTPayload> {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(config.refreshTokenSecret));
    return payload
}

export async function buildTokens(user: UserDocument) {
    const accessPayload: AccessTokenPayload = { userId: user.id }
    const refreshPayload: RefreshTokenPayload = { userId: user.id, version: user.tokenVersion }

    const accessToken = await signAccessToken(accessPayload)
    const refreshToken = refreshPayload && await signRefreshToken(refreshPayload)

    return { accessToken, refreshToken }
}

export function setTokens(res: NextApiResponse, access: string, refresh: string) {
    res.setHeader('Set-Cookie', [serialize(Cookies.AccessToken, access, accessTokenCookieOptions), serialize(Cookies.RefreshToken, refresh, refreshTokenCookieOptions)])
}
export function refreshTokens(current: RefreshToken, tokenVersion: number) {
    if (tokenVersion !== current.version) throw 'Token revoked'

    const accessPayload: AccessTokenPayload = { userId: current.userId }
    let refreshPayload: RefreshTokenPayload | undefined

    const expiration = new Date(current.exp * 1000)
    const now = new Date()
    const secondsUntilExpiration = (expiration.getTime() - now.getTime()) / 1000

    if (secondsUntilExpiration < TokenExpiration.RefreshIfLessThan) {
        refreshPayload = { userId: current.userId, version: tokenVersion }
    }

    const accessToken = signAccessToken(accessPayload)
    const refreshToken = refreshPayload && signRefreshToken(refreshPayload)

    return { accessToken, refreshToken }
}
export function clearTokens(res: NextApiResponse) {
    res.setHeader('Set-Cookie', [serialize(Cookies.AccessToken, "", { ...defaultCookieOptions, maxAge: 0 }), serialize(Cookies.RefreshToken, "", { ...defaultCookieOptions, maxAge: 0 })])
}