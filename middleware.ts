import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "./utils/cookies";

// const isAPIRoute = (pathname: string) => {
//     return pathname.startsWith('/api');
// }

export async function middleware(req: NextRequest) {
    console.log("middleware")
    // const { pathname } = req.nextUrl;
    // if (isAPIRoute(pathname)) {
    //     return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
    // }

    const accessToken = req.cookies.get("access")?.value
    if (!accessToken) {

        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
    else {
        try {
            const verifiedToken = await verifyAccessToken(accessToken)
            // if expired or invalid token redirect to login
            if (!verifiedToken) {
                return NextResponse.redirect(new URL('/auth/login', req.url))
            }
        } catch (error) {
            console.log(error)
            return NextResponse.redirect(new URL('/auth/login', req.url))
        }

        return NextResponse.next()
    }
}

// This function is called for every request that matches the `config.matcher` pattern
export const config = {
    matcher: [
        "/overview",
        "/transactions",
        "/analytics",
        "/wallet",
        "/invoice",
        "/accounts",
        "/settings",
        "/profile",
        // "/api/:path*"
    ],
}