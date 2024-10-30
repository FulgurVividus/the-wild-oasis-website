import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

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
    async signIn({ user, account, profile }) {
      try {
        const existingUser = await getGuest(user.email);

        if (!existingUser) {
          await createGuest({ email: user.email, fullName: user.name });
        }

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email);
      // we can mutate the session object. Onto the "user" we add the "guestId"
      session.user.guestId = guest.id;
      return session;
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

// signIn / signOut from NextAuth - will be called when signIn/signOut buttons are clicked.

// signIn from callbacks - this actually runs before the signup process happens, that means that we can perform all kinds of operations that are associated with singing in process.

// session from callbacks - this runs after the signIn callback and each time when the session is checked out.
