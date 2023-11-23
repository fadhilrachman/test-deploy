import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(req) {
  const cookieStore = cookies();
  let token = cookieStore.get(process.env.COOKIE_NAME);

  console.log(req.nextUrl.pathname, "opo");
  const protectedRoute = ["/dashboard", "/product"];
  const currentPathname = req.nextUrl.pathname;
  const isProtected = protectedRoute.some((r) => r.startsWith(currentPathname));

  // if (!token) {
  //   console.log("no token");
  //   if (isProtected) {
  //     return NextResponse.redirect(new URL("/auth", req.url));
  //   }
  // }
  // // if token exist, auth (reg/login) are protected
  // if (token) {
  //   console.log("ada token");
  //   if (req.nextUrl.pathname.startsWith("/auth")) {
  //     return NextResponse.redirect(new URL("/", req.url));
  //   }
  // }
}
