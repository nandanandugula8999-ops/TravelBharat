import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT, ADMIN_COOKIE } from "@/lib/auth";

const PROTECTED_PATHS = ["/admin"];
const PROTECTED_API_METHODS = ["POST", "PUT", "DELETE", "PATCH"];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const reqMethod = request.method;

  // ── Protect /admin UI routes ─────────────────────────────────────────────
  const isAdminPage =
    PROTECTED_PATHS.some((p) => pathname.startsWith(p)) &&
    !pathname.startsWith("/admin/login");

  // ── Protect write API routes ─────────────────────────────────────────────
  const isAdminApi =
    pathname.startsWith("/api/admin") &&
    !pathname.startsWith("/api/admin/login") &&
    PROTECTED_API_METHODS.includes(reqMethod);

  if (isAdminPage || isAdminApi) {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;

    if (!token) {
      if (isAdminApi) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("from", pathname);
      return NextResponse.redirect(loginUrl);
    }

    const payload = await verifyJWT(token);
    if (!payload || payload.role !== "admin") {
      if (isAdminApi) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
      }
      const loginUrl = new URL("/admin/login", request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // ── Redirect authenticated admin away from login page ────────────────────
  if (pathname === "/admin/login") {
    const token = request.cookies.get(ADMIN_COOKIE)?.value;
    if (token) {
      const payload = await verifyJWT(token);
      if (payload?.role === "admin") {
        return NextResponse.redirect(new URL("/admin", request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/admin/:path*",
  ],
};
