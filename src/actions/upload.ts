import { createServerFn } from "@tanstack/react-start";
import { requireAuth } from "./auth";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export const uploadFileFn = createServerFn({ method: "POST" })
  .validator((data: { filename: string; base64Data: string; mimeType: string }) => data)
  .handler(async ({ data }) => {
    try {
      // Require at least EDITOR role to upload files
      await requireAuth(['EDITOR']);
      
      const { filename, base64Data, mimeType } = data;
      
      // Clean up filename and ensure unique
      const ext = path.extname(filename);
      const name = path.basename(filename, ext).replace(/[^a-zA-Z0-9]/g, '-');
      const uniqueFilename = `${name}-${crypto.randomBytes(4).toString('hex')}${ext}`;
      
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');
      const filePath = path.join(uploadDir, uniqueFilename);
      
      // Strip off the data:image/png;base64, part if present
      const base64Content = base64Data.replace(/^data:([A-Za-z-+/]+);base64,/, '');
      const buffer = Buffer.from(base64Content, 'base64');
      
      await fs.writeFile(filePath, buffer);
      
      const fileUrl = `/uploads/${uniqueFilename}`;
      return { success: true, url: fileUrl };
    } catch (err: any) {
      console.error("Upload error:", err);
      return { error: err.message || "Failed to upload file" };
    }
  });
