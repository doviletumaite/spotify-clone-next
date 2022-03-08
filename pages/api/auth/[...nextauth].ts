import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify"
import { LOGIN_URL } from "../../../lib/spotify"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
    OAuthUserId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecretSpotify: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    authorization: LOGIN_URL
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
      signIn: "/login"
  }, 
  callbacks: {
    async jwt ( { token, account, user }) {
      if ( account & user ) {
        return {
          ...token,
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000
        }
      }
      if (Date.now() < token.accessTokenExipres){
        return token
      }
    }
  }
})