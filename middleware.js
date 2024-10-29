/* import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  // redirect user
  return NextResponse.redirect(new URL("about", request.url));
} */

import { auth } from "@/app/_lib/auth";

export const middleware = auth;

// matcher
export const config = {
  matcher: ["/account"],
};
