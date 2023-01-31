/* eslint-disable @typescript-eslint/no-non-null-assertion */
export const config = {
  isProduction: process.env.NODE_ENV! === "production",
  baseDomain: process.env.BASE_DOMAIN!,
  accessTokenSecret: process.env.ACCESS_TOKEN_SECRET!,
  refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET!,
  port: process.env.PORT!,
  databaseUrl: process.env.DATABASE_URL!,
  googleClientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
  googleClientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
};
