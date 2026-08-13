import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { requireAuth } from "./auth";

export const getLeadsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['SUPER_ADMIN']);
    const leads = await query<any[]>("SELECT * FROM leads ORDER BY created_at DESC");
    return { leads };
  } catch (err: any) {
    console.error("Error fetching leads:", err);
    return { error: err.message || "Failed to fetch leads" };
  }
});

export const createLeadFn = createServerFn({ method: "POST" })
  .validator((data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source?: string;
}) => data)
  .handler(async ({ data }) => {
  try {
    const id = crypto.randomUUID();
    await query(
      "INSERT INTO leads (id, name, email, phone, company, source) VALUES (?, ?, ?, ?, ?, ?)",
      [id, data.name, data.email, data.phone || null, data.company || null, data.source || null]
    );
    return { success: true, leadId: id };
  } catch (err) {
    console.error("Error creating lead:", err);
    return { error: "Failed to create lead" };
  }
});

export const updateLeadStatusFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; status: string }) => data)
  .handler(async ({ data }) => {
  try {
    await requireAuth(['SUPER_ADMIN']);
    await query("UPDATE leads SET status = ? WHERE id = ?", [data.status, data.id]);
    return { success: true };
  } catch (err: any) {
    console.error("Error updating lead status:", err);
    return { error: err.message || "Failed to update lead status" };
  }
});

export const deleteLeadFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['SUPER_ADMIN']);
      await query("DELETE FROM leads WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      console.error("Error deleting lead:", err);
      return { error: err.message || "Failed to delete lead" };
    }
  });
