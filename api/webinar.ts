import type { VercelRequest, VercelResponse } from "@vercel/node";
import {
  addWebinarRegistration,
  fetchAllWebinarRegistrations,
  removeWebinarRegistration,
  getSqliteInfo,
} from "../src/lib/sqlite";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    if (req.method === "GET") {
      const registrations = await fetchAllWebinarRegistrations();
      const dbInfo = getSqliteInfo();
      return res.status(200).json({ registrations, dbInfo });
    }

    if (req.method === "POST") {
      const data = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
      if (!data || !data.name || !data.contact || !data.email || !data.company) {
        return res.status(400).json({ error: "Missing required fields" });
      }
      const clientIp = (req.headers["x-forwarded-for"] as string)?.split(",")[0] || req.socket?.remoteAddress || null;
      const result = await addWebinarRegistration({
        ...data,
        ip: clientIp,
      });
      return res.status(200).json(result);
    }

    if (req.method === "DELETE") {
      const { id } = req.query as { id: string };
      if (!id) {
        return res.status(400).json({ error: "Missing id parameter" });
      }
      await removeWebinarRegistration(id);
      return res.status(200).json({ success: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (err: any) {
    console.error("[Vercel API /api/webinar] Error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
