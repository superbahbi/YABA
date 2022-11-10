import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "./utils/cookies";
// https://github.com/vercel/next.js/discussions/38227
// This function can be marked `async` if using `await` inside
export function middleware(req: NextRequest) {
    console.log("middleware")
    const accessToken = req.cookies.get("access")?.value
    if (!accessToken) {
        return NextResponse.redirect(new URL('/auth/login', req.url))
    }
    else {
        const verifiedToken = verifyAccessToken(accessToken)
        if (!verifiedToken) {
            return NextResponse.redirect(new URL('/auth/login', req.url))
        }
        return NextResponse.next()
    }
}

// This function is called for every request that matches the `config.matcher` pattern
export const config = {
    matcher: ["/overview", "/transactions", "/analytics", "/wallet", "/invoice", "/accounts", "/settings", "/profile"],
}