import NextAuth, { Session } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { config } from "@/config"

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: config.googleClientId,
            clientSecret: config.googleClientSecret,
        }),
        // ...add more providers here
    ],
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        // 
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        }
    }
}
export default NextAuth(authOptions)