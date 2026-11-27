import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { requireAuth } from "./auth";

// Ensure the webinar_registrations table exists
async function ensureTable() {
  await query(`
    CREATE TABLE IF NOT EXISTS webinar_registrations (
      id VARCHAR(36) NOT NULL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      contact VARCHAR(50) NOT NULL,
      email VARCHAR(255) NOT NULL,
      company VARCHAR(255) NOT NULL,
      designation VARCHAR(255),
      goal VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      ip VARCHAR(100)
    )
  `);
}

export const createWebinarRegistrationFn = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    contact: string;
    email: string;
    company: string;
    designation?: string;
    goal: string;
    ip?: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await ensureTable();
      const id = crypto.randomUUID();
      await query(
        `INSERT INTO webinar_registrations (id, name, contact, email, company, designation, goal, ip)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [id, data.name, data.contact, data.email, data.company, data.designation || null, data.goal, data.ip || null]
      );
      return { success: true, id };
    } catch (err: any) {
      console.error("Error creating webinar registration:", err);
      return { error: err.message || "Failed to submit registration" };
    }
  });

export const getWebinarRegistrationsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      await requireAuth(['SUPER_ADMIN']);
      await ensureTable();
      const registrations = await query<any[]>(
        "SELECT * FROM webinar_registrations ORDER BY created_at DESC"
      );
      return { registrations };
    } catch (err: any) {
      console.error("Error fetching webinar registrations:", err);
      return { error: err.message || "Failed to fetch registrations" };
    }
  });

export const deleteWebinarRegistrationFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['SUPER_ADMIN']);
      await query("DELETE FROM webinar_registrations WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      console.error("Error deleting webinar registration:", err);
      return { error: err.message || "Failed to delete registration" };
    }
  });
