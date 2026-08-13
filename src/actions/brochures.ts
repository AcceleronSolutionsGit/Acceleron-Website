import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { requireAuth } from "./auth";

export const getBrochuresFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    const brochures = await query<any[]>("SELECT * FROM brochures WHERE is_active = TRUE ORDER BY created_at DESC");
    return { brochures };
  } catch (err) {
    console.error("Error fetching brochures:", err);
    return { error: "Failed to fetch brochures" };
  }
});

export const getAllBrochuresFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['EDITOR']);
    const brochures = await query<any[]>(`
      SELECT b.*, s.title as service_title, p.name as product_name
      FROM brochures b
      LEFT JOIN services s ON b.service_id = s.id
      LEFT JOIN products p ON b.product_id = p.id
      ORDER BY b.created_at DESC
    `);
    return { brochures };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch brochures" };
  }
});

export const createBrochureFn = createServerFn({ method: "POST" })
  .validator((data: { title: string; description?: string; file_url: string; service_id?: string; product_id?: string }) => data)
  .handler(async ({ data }) => {
  try {
    await requireAuth(['EDITOR']);
    const id = crypto.randomUUID();
    await query(
      "INSERT INTO brochures (id, title, description, file_url, service_id, product_id) VALUES (?, ?, ?, ?, ?, ?)",
      [id, data.title, data.description || null, data.file_url, data.service_id || null, data.product_id || null]
    );
    return { success: true, brochureId: id };
  } catch (err: any) {
    console.error("Error creating brochure:", err);
    return { error: err.message || "Failed to create brochure" };
  }
});

export const toggleBrochureStatusFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; isActive: boolean }) => data)
  .handler(async ({ data }) => {
  try {
    await requireAuth(['EDITOR']);
    await query("UPDATE brochures SET is_active = ? WHERE id = ?", [data.isActive, data.id]);
    return { success: true };
  } catch (err: any) {
    return { error: err.message || "Failed to update brochure" };
  }
});

export const updateBrochureFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    title: string;
    description?: string;
    file_url: string;
    service_id?: string;
    product_id?: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query(
        "UPDATE brochures SET title = ?, description = ?, file_url = ?, service_id = ?, product_id = ? WHERE id = ?",
        [data.title, data.description || null, data.file_url, data.service_id || null, data.product_id || null, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update brochure" };
    }
  });

export const deleteBrochureFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query("DELETE FROM brochures WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete brochure" };
    }
  });

export const logBrochureDownloadFn = createServerFn({ method: "POST" })
  .validator((data: { leadId: string; brochureId: string }) => data)
  .handler(async ({ data }) => {
  try {
    const id = crypto.randomUUID();
    await query(
      "INSERT INTO brochure_downloads (id, lead_id, brochure_id) VALUES (?, ?, ?)",
      [id, data.leadId, data.brochureId]
    );
    return { success: true };
  } catch (err) {
    console.error("Error logging brochure download:", err);
    return { error: "Failed to log download" };
  }
});

export const getBrochureDownloadsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['SUPER_ADMIN']);
    const downloads = await query<any[]>(`
      SELECT bd.id, bd.downloaded_at, l.name as lead_name, l.email as lead_email, l.company, b.title as brochure_title 
      FROM brochure_downloads bd
      JOIN leads l ON bd.lead_id = l.id
      JOIN brochures b ON bd.brochure_id = b.id
      ORDER BY bd.downloaded_at DESC
    `);
    return { downloads };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch downloads" };
  }
});
