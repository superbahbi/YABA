/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const config = {
    isProduction: process.env.NODE_ENV! === 'production',
    clientUrl: process.env.CLIENT_URL!,
    baseDomain: process.env.BASE_DOMAIN!,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
}