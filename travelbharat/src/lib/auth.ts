import { SignJWT, jwtVerify, type JWTPayload } from "jose";

const JWT_SECRET = process.env.JWT_SECRET;

function getSecret(): Uint8Array {
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET env var is not set");
  }
  return new TextEncoder().encode(JWT_SECRET);
}

export interface AdminPayload extends JWTPayload {
  email: string;
  role: "admin";
}

/**
 * Sign a JWT for the admin session (expires in 24 hours).
 */
export async function signJWT(payload: AdminPayload): Promise<string> {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(getSecret());
}

/**
 * Verify and decode an admin JWT. Returns null if invalid/expired.
 */
export async function verifyJWT(
  token: string
): Promise<AdminPayload | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    return payload as AdminPayload;
  } catch {
    return null;
  }
}

export const ADMIN_COOKIE = "tb_admin_token";
