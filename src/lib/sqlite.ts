import { createClient, type Client } from "@libsql/client";
import fs from "fs";
import path from "path";

export interface WebinarRegistrationRecord {
  id: string;
  name: string;
  contact: string;
  email: string;
  company: string;
  designation?: string | null;
  goal: string;
  created_at: string;
  ip?: string | null;
}

/**
 * Determine SQLite database URL:
 * 1. TURSO_DATABASE_URL / TURSO_AUTH_TOKEN: Hosted SQLite over HTTP (works seamlessly across all Vercel Lambdas)
 * 2. SQLITE_URL: Custom connection string
 * 3. On Vercel / serverless: file:/tmp/webinar.db (/tmp is the only writable directory on AWS Lambda / Vercel)
 * 4. Local dev: file:webinar.db
 */
function getDbUrl(): { url: string; authToken?: string; isCloud: boolean } {
  if (process.env.TURSO_DATABASE_URL) {
    return {
      url: process.env.TURSO_DATABASE_URL,
      authToken: process.env.TURSO_AUTH_TOKEN || undefined,
      isCloud: true,
    };
  }
  if (process.env.SQLITE_URL) {
    return {
      url: process.env.SQLITE_URL,
      authToken: process.env.SQLITE_AUTH_TOKEN || undefined,
      isCloud: !process.env.SQLITE_URL.startsWith("file:"),
    };
  }
  // Vercel serverless functions have a read-only root, only /tmp is writable
  if (process.env.VERCEL || process.env.AWS_LAMBDA_FUNCTION_NAME) {
    return {
      url: "file:/tmp/webinar.db",
      isCloud: false,
    };
  }
  return {
    url: "file:webinar.db",
    isCloud: false,
  };
}

let clientInstance: Client | null = null;
let initialized = false;

// In-memory fallback cache for serverless environments
let memoryCache: WebinarRegistrationRecord[] = [];

export function getSqliteClient(): Client {
  if (!clientInstance) {
    const { url, authToken } = getDbUrl();
    console.log(`[SQLite] Initializing client with URL: ${url}`);
    clientInstance = createClient({
      url,
      authToken,
    });
  }
  return clientInstance;
}

export function getSqliteInfo() {
  const { url, isCloud } = getDbUrl();
  return {
    url,
    isCloud,
    mode: isCloud ? "Cloud SQLite (Turso)" : process.env.VERCEL ? "Vercel /tmp SQLite" : "Local SQLite",
  };
}

/**
 * Ensure the webinar_registrations table exists in SQLite
 */
export async function initWebinarTable(): Promise<void> {
  if (initialized) return;
  try {
    const client = getSqliteClient();
    await client.execute(`
      CREATE TABLE IF NOT EXISTS webinar_registrations (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        contact TEXT NOT NULL,
        email TEXT NOT NULL,
        company TEXT NOT NULL,
        designation TEXT,
        goal TEXT NOT NULL,
        created_at TEXT DEFAULT (datetime('now', 'localtime')),
        ip TEXT
      )
    `);
    initialized = true;
    console.log("[SQLite] webinar_registrations table verified.");
  } catch (err: any) {
    console.error("[SQLite] Error creating webinar table:", err);
    throw err;
  }
}

/**
 * Add a new registration to SQLite
 */
export async function addWebinarRegistration(data: {
  name: string;
  contact: string;
  email: string;
  company: string;
  designation?: string;
  goal: string;
  ip?: string;
}): Promise<{ success: boolean; id: string }> {
  await initWebinarTable();
  const client = getSqliteClient();
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const record: WebinarRegistrationRecord = {
    id,
    name: data.name.trim(),
    contact: data.contact.trim(),
    email: data.email.trim(),
    company: data.company.trim(),
    designation: data.designation?.trim() || null,
    goal: data.goal,
    created_at: now,
    ip: data.ip || null,
  };

  // 1. Write to SQLite
  await client.execute({
    sql: `INSERT INTO webinar_registrations (id, name, contact, email, company, designation, goal, created_at, ip)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    args: [
      record.id,
      record.name,
      record.contact,
      record.email,
      record.company,
      record.designation,
      record.goal,
      record.created_at,
      record.ip,
    ],
  });

  // 2. Keep in-memory cache updated
  memoryCache.unshift(record);

  // 3. Mirror to emergency JSON backup in /tmp or local
  try {
    const backupPath = process.env.VERCEL ? "/tmp/webinar_backup.json" : path.resolve("./webinar_backup.json");
    let currentBackup: WebinarRegistrationRecord[] = [];
    if (fs.existsSync(backupPath)) {
      try {
        currentBackup = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
      } catch {
        currentBackup = [];
      }
    }
    // Prevent duplicates
    if (!currentBackup.some(r => r.id === id)) {
      currentBackup.unshift(record);
      fs.writeFileSync(backupPath, JSON.stringify(currentBackup, null, 2), "utf-8");
    }
  } catch (backupErr) {
    console.warn("[SQLite] Backup write warning:", backupErr);
  }

  return { success: true, id };
}

/**
 * Retrieve all registrations from SQLite
 */
export async function fetchAllWebinarRegistrations(): Promise<WebinarRegistrationRecord[]> {
  await initWebinarTable();
  const client = getSqliteClient();

  try {
    const result = await client.execute(`
      SELECT id, name, contact, email, company, designation, goal, created_at, ip
      FROM webinar_registrations
      ORDER BY created_at DESC
    `);

    const records: WebinarRegistrationRecord[] = result.rows.map((row: any) => ({
      id: String(row.id || ""),
      name: String(row.name || ""),
      contact: String(row.contact || ""),
      email: String(row.email || ""),
      company: String(row.company || ""),
      designation: row.designation ? String(row.designation) : null,
      goal: String(row.goal || ""),
      created_at: String(row.created_at || ""),
      ip: row.ip ? String(row.ip) : null,
    }));

    // If SQLite returns rows, update memory cache
    if (records.length > 0) {
      memoryCache = records;
      return records;
    }
  } catch (err) {
    console.warn("[SQLite] Query failed, falling back to backup file / cache:", err);
  }

  // Fallback: check backup file if SQLite table was created fresh in new serverless container
  try {
    const backupPath = process.env.VERCEL ? "/tmp/webinar_backup.json" : path.resolve("./webinar_backup.json");
    if (fs.existsSync(backupPath)) {
      const backupData = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
      if (Array.isArray(backupData) && backupData.length > 0) {
        // Hydrate SQLite with backup data
        try {
          for (const item of backupData) {
            await client.execute({
              sql: `INSERT OR IGNORE INTO webinar_registrations (id, name, contact, email, company, designation, goal, created_at, ip)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
              args: [
                item.id,
                item.name,
                item.contact,
                item.email,
                item.company,
                item.designation || null,
                item.goal,
                item.created_at,
                item.ip || null,
              ],
            });
          }
        } catch { /* ignore hydration errors */ }
        memoryCache = backupData;
        return backupData;
      }
    }
  } catch (e) {
    console.warn("[SQLite] Backup read failed:", e);
  }

  return memoryCache;
}

/**
 * Delete a registration from SQLite
 */
export async function removeWebinarRegistration(id: string): Promise<boolean> {
  await initWebinarTable();
  const client = getSqliteClient();
  await client.execute({
    sql: `DELETE FROM webinar_registrations WHERE id = ?`,
    args: [id],
  });

  memoryCache = memoryCache.filter(r => r.id !== id);

  try {
    const backupPath = process.env.VERCEL ? "/tmp/webinar_backup.json" : path.resolve("./webinar_backup.json");
    if (fs.existsSync(backupPath)) {
      const backupData = JSON.parse(fs.readFileSync(backupPath, "utf-8"));
      if (Array.isArray(backupData)) {
        const filtered = backupData.filter((r: any) => r.id !== id);
        fs.writeFileSync(backupPath, JSON.stringify(filtered, null, 2), "utf-8");
      }
    }
  } catch { /* ignore */ }

  return true;
}
