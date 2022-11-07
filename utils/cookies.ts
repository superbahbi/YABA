import { serialize, CookieSerializeOptions } from 'cookie'
import { NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import { config } from '../config'

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

interface AccessToken extends AccessTokenPayload {
    exp: number
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

function signAccessToken(payload: AccessTokenPayload) {
    return jwt.sign(payload, config.accessTokenSecret, { expiresIn: TokenExpiration.Access })
}

function signRefreshToken(payload: RefreshTokenPayload) {
    return jwt.sign(payload, config.refreshTokenSecret, { expiresIn: TokenExpiration.Refresh })
}

export function verifyRefreshToken(token: string) {
    return jwt.verify(token, config.refreshTokenSecret) as RefreshToken
}

export function verifyAccessToken(token: string) {
    return jwt.verify(token, config.accessTokenSecret) as AccessToken
}

export function buildTokens(user: UserDocument) {
    const accessPayload: AccessTokenPayload = { userId: user.id }
    const refreshPayload: RefreshTokenPayload = { userId: user.id, version: user.tokenVersion }

    const accessToken = signAccessToken(accessPayload)
    const refreshToken = refreshPayload && signRefreshToken(refreshPayload)

    return { accessToken, refreshToken }
}

export function setTokens(res: NextApiResponse, access: string, refresh: string) {
    res.setHeader('Set-Cookie', [serialize(Cookies.AccessToken, access, accessTokenCookieOptions), serialize(Cookies.RefreshToken, refresh, refreshTokenCookieOptions)])
    // if (refresh) {
    //     res.setHeader('Set-Cookie', serialize(Cookies.RefreshToken, refresh, refreshTokenCookieOptions))
    // }
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
    res.setHeader('Set-Cookie', serialize(Cookies.AccessToken, "", { ...defaultCookieOptions, maxAge: 0 }))
    res.setHeader('Set-Cookie', serialize(Cookies.RefreshToken, "", { ...defaultCookieOptions, maxAge: 0 }))
}