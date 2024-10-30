import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// config object
const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

// auth - will be called in server components (example: to retrieve current session)
// handlers - we use for logging in and signing out
// signIn / signOut - will be called when signIn/signOut buttons are clicked.
