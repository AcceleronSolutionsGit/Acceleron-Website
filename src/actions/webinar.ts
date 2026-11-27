import { createServerFn } from "@tanstack/react-start";
import {
  addWebinarRegistration,
  fetchAllWebinarRegistrations,
  removeWebinarRegistration,
  getSqliteInfo,
  type WebinarRegistrationRecord
} from "../lib/sqlite";

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
      const result = await addWebinarRegistration(data);
      return result;
    } catch (err: any) {
      console.error("[Webinar Action] Error creating registration in SQLite:", err);
      return { error: err.message || "Failed to submit registration" };
    }
  });

export const getWebinarRegistrationsFn = createServerFn({ method: "GET" })
  .handler(async () => {
    try {
      const registrations = await fetchAllWebinarRegistrations();
      const dbInfo = getSqliteInfo();
      return { registrations, dbInfo };
    } catch (err: any) {
      console.error("[Webinar Action] Error fetching registrations from SQLite:", err);
      return { error: err.message || "Failed to fetch registrations", registrations: [], dbInfo: null };
    }
  });

export const deleteWebinarRegistrationFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await removeWebinarRegistration(data.id);
      return { success: true };
    } catch (err: any) {
      console.error("[Webinar Action] Error deleting registration from SQLite:", err);
      return { error: err.message || "Failed to delete registration" };
    }
  });
