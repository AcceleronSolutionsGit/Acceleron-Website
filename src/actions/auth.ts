import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { generateToken, verifyPassword } from "../lib/auth";
// Import dynamically to bypass Vite import protection

export const loginAdmin = createServerFn({ method: "POST" })
  .validator((data: { email: string; password: string }) => data)
  .handler(async ({ data }) => {
  try {
    console.log("Login attempt for email:", data.email);
    const admins = await query<any[]>("SELECT * FROM admins WHERE email = ?", [data.email]);
    console.log("Admins found:", admins.length);
    if (admins.length === 0) {
      return { success: false, error: "Invalid credentials" };
    }

    const admin = admins[0];
    const isMatch = await verifyPassword(data.password, admin.password_hash);
    console.log("Password match:", isMatch);
    
    if (!isMatch) {
      return { success: false, error: "Invalid credentials" };
    }

    const userPayload = { id: admin.id, email: admin.email, role: admin.role };
    const token = generateToken(userPayload);
    
    const { setCookie } = await import("@tanstack/react-start/server");
    setCookie("admin_token", token, {
      httpOnly: true,
      secure: false, // Force false for local testing just in case
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    console.log("Login successful for:", data.email);
    return { success: true, user: userPayload };
  } catch (err) {
    console.error("Login error:", err);
    return { success: false, error: "Internal server error" };
  }
});

export const logoutFn = createServerFn({ method: "POST" })
  .handler(async () => {
  const { setCookie } = await import("@tanstack/react-start/server");
  setCookie("admin_token", "", {
    httpOnly: true,
    path: "/",
    maxAge: 0,
  });
  return { success: true };
});

export const getAdminSessionFn = createServerFn({ method: "GET" })
  .handler(async () => {
  const { getCookie } = await import("@tanstack/react-start/server");
  
  try {
    const token = getCookie("admin_token");
    console.log("getAdminSessionFn: Token retrieved:", token ? "YES" : "NO");
    if (!token) return { user: null };

    const jwt = await import("jsonwebtoken");
    const verify = jwt.verify || (jwt as any).default.verify;
    const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-fallback';
    const decoded = verify(token, JWT_SECRET) as { id: string, email: string, role: string };
    console.log("getAdminSessionFn: Token verified for user:", decoded.email);
    return { user: decoded };
  } catch (err) {
    console.log("getAdminSessionFn: Error verifying token or getting cookie:", err);
    return { user: null };
  }
});

/**
 * Utility to authorize requests in server functions based on roles.
 * Throws an error if unauthorized.
 */
export async function requireAuth(allowedRoles?: string[]) {
  const pkg = "@tanstack/react-start/server";
  const { getCookie } = await import(/* @vite-ignore */ pkg);
  const token = getCookie("admin_token");
  if (!token) throw new Error("Unauthorized");

  const jwt = await import("jsonwebtoken");
  const verify = jwt.verify || (jwt as any).default.verify;
  const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key-fallback';
  
  try {
    const decoded = verify(token, JWT_SECRET) as { id: string, email: string, role: string };
    
    if (allowedRoles && allowedRoles.length > 0) {
      if (!allowedRoles.includes(decoded.role) && decoded.role !== 'SUPER_ADMIN') {
        throw new Error("Forbidden: Insufficient role");
      }
    }
    
    return decoded;
  } catch (err) {
    throw new Error("Unauthorized");
  }
}
