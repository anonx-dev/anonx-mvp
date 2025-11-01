import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";

export const authOptions: NextAuthOptions = {
  providers: [
    // Google provider
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    // Anonymous/Guest provider
    CredentialsProvider({
      id: "anonymous",
      name: "Anonymous",
      credentials: {},
      async authorize() {
        // Create anonymous user session
        const anonymousId = nanoid(16);
        return {
          id: anonymousId,
          name: "Anonymous",
          email: null,
          isAnonymous: true,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.isAnonymous = account?.provider === "anonymous";
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.isAnonymous = token.isAnonymous as boolean;
      }
      return session;
    },
  },
  pages: {
    signIn: "/", // Redirect to home
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Type augmentation for NextAuth
declare module "next-auth" {
  interface User {
    isAnonymous?: boolean;
  }
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      isAnonymous?: boolean;
      image?: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    isAnonymous?: boolean;
  }
}
