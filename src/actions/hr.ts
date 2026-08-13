import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { requireAuth } from "./auth";

// --- JOB POSTINGS ---

export const getJobsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    const jobs = await query<any[]>("SELECT * FROM job_postings ORDER BY created_at DESC");
    return { jobs };
  } catch (err) {
    return { error: "Failed to fetch jobs" };
  }
});

export const createJobFn = createServerFn({ method: "POST" })
  .validator((data: {
  title: string;
  department: string;
  sub_department?: string;
  location: string;
  years_of_experience?: string;
  description: string;
  apply_url: string;
}) => data)
  .handler(async ({ data }) => {
  try {
    await requireAuth(['HR']);
    const id = crypto.randomUUID();
    await query(
      "INSERT INTO job_postings (id, title, department, sub_department, location, years_of_experience, description, apply_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [id, data.title, data.department, data.sub_department || null, data.location, data.years_of_experience || null, data.description, data.apply_url]
    );
    return { success: true, jobId: id };
  } catch (err: any) {
    return { error: err.message || "Failed to create job posting" };
  }
});

export const toggleJobStatusFn = createServerFn({ method: "POST" })
  .validator((data: { id: string; isActive: boolean }) => data)
  .handler(async ({ data }) => {
  try {
    await requireAuth(['HR']);
    await query("UPDATE job_postings SET is_active = ? WHERE id = ?", [data.isActive, data.id]);
    return { success: true };
  } catch (err: any) {
    return { error: err.message || "Failed to update job status" };
  }
});

export const updateJobFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    title: string;
    department: string;
    sub_department?: string;
    location: string;
    years_of_experience?: string;
    description: string;
    apply_url: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['HR']);
      await query(
        "UPDATE job_postings SET title = ?, department = ?, sub_department = ?, location = ?, years_of_experience = ?, description = ?, apply_url = ? WHERE id = ?",
        [data.title, data.department, data.sub_department || null, data.location, data.years_of_experience || null, data.description, data.apply_url, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update job posting" };
    }
  });

export const deleteJobFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['HR']);
      await query("DELETE FROM job_postings WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete job posting" };
    }
  });

// --- DOMAINS & ROLES ---

export const getDomainsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    const domains = await query<any[]>("SELECT * FROM domains WHERE is_active = TRUE ORDER BY name ASC");
    return { domains };
  } catch (err) {
    return { error: "Failed to fetch domains" };
  }
});

export const getRolesFn = createServerFn({ method: "GET" })
  .validator((data?: string) => data)
  .handler(async ({ data }) => {
    const domainId = data;
  try {
    let sql = "SELECT * FROM roles WHERE is_active = TRUE";
    const params = [];
    if (domainId) {
      sql += " AND domain_id = ?";
      params.push(domainId);
    }
    sql += " ORDER BY name ASC";
    const roles = await query<any[]>(sql, params);
    return { roles };
  } catch (err) {
    return { error: "Failed to fetch roles" };
  }
});

// --- CV SUBMISSIONS ---

export const submitCVFn = createServerFn({ method: "POST" })
  .validator((data: {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  domain_id: string;
  role_id: string;
  resume_url: string;
}) => data)
  .handler(async ({ data }) => {
  try {
    const id = crypto.randomUUID();
    await query(
      "INSERT INTO cv_submissions (id, first_name, last_name, email, phone, domain_id, role_id, resume_url) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [id, data.first_name, data.last_name, data.email, data.phone || null, data.domain_id, data.role_id, data.resume_url]
    );
    return { success: true, submissionId: id };
  } catch (err) {
    console.error("Error submitting CV:", err);
    return { error: "Failed to submit CV" };
  }
});

export const getCVSubmissionsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['HR']);
    const submissions = await query<any[]>(`
      SELECT cv.*, d.name as domain_name, r.name as role_name 
      FROM cv_submissions cv
      JOIN domains d ON cv.domain_id = d.id
      JOIN roles r ON cv.role_id = r.id
      ORDER BY cv.created_at DESC
    `);
    return { submissions };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch CV submissions" };
  }
});
