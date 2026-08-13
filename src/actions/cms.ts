import { createServerFn } from "@tanstack/react-start";
import { query } from "../lib/db";
import { requireAuth } from "./auth";

// --- ARTICLES (Blogs, News, Events, CSR) ---

export const getArticlesFn = createServerFn({ method: "GET" })
  .validator((type?: string) => type)
  .handler(async ({ data: type }) => {
  try {
    await requireAuth(['EDITOR']);
    let sql = "SELECT * FROM content_posts";
    const params: any[] = [];
    if (type) {
      sql += " WHERE type = ?";
      params.push(type.toUpperCase());
    }
    sql += " ORDER BY created_at DESC";
    const articles = await query<any[]>(sql, params);
    return { articles };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch articles" };
  }
});

export const createArticleFn = createServerFn({ method: "POST" })
  .validator((data: {
    title: string;
    slug: string;
    type: 'BLOG' | 'NEWS' | 'EVENT' | 'CSR';
    content: string;
    cover_image_url?: string;
    is_published: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      const id = crypto.randomUUID();
      const publishedDate = data.is_published ? new Date() : null;
      await query(
        "INSERT INTO content_posts (id, title, slug, type, content, cover_image_url, published_date, is_published) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
        [id, data.title, data.slug, data.type, data.content, data.cover_image_url || null, publishedDate, data.is_published]
      );
      return { success: true, id };
    } catch (err: any) {
      return { error: err.message || "Failed to create article" };
    }
  });

export const updateArticleFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    title: string;
    slug: string;
    type: 'BLOG' | 'NEWS' | 'EVENT' | 'CSR';
    content: string;
    cover_image_url?: string;
    is_published: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      // Ideally check if transitioning from draft to published to update date, but keep it simple for now
      await query(
        "UPDATE content_posts SET title = ?, slug = ?, type = ?, content = ?, cover_image_url = ?, is_published = ? WHERE id = ?",
        [data.title, data.slug, data.type, data.content, data.cover_image_url || null, data.is_published, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update article" };
    }
  });

export const deleteArticleFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query("DELETE FROM content_posts WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete article" };
    }
  });


// --- SERVICES ---

export const getServicesFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['EDITOR']);
    const services = await query<any[]>("SELECT * FROM services ORDER BY created_at DESC");
    return { services };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch services" };
  }
});

export const createServiceFn = createServerFn({ method: "POST" })
  .validator((data: {
    title: string;
    slug?: string;
    category?: string;
    overview?: string;
    description?: string;
    icon_url?: string;
    image_url?: string;
    is_active: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      const id = crypto.randomUUID();
      await query(
        "INSERT INTO services (id, title, slug, category, overview, description, icon_url, image_url, is_active) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [id, data.title, data.slug || null, data.category || null, data.overview || null, data.description || null, data.icon_url || null, data.image_url || null, data.is_active]
      );
      return { success: true, id };
    } catch (err: any) {
      return { error: err.message || "Failed to create service" };
    }
  });

export const updateServiceFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    title: string;
    slug?: string;
    category?: string;
    overview?: string;
    description?: string;
    icon_url?: string;
    image_url?: string;
    is_active: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query(
        "UPDATE services SET title = ?, slug = ?, category = ?, overview = ?, description = ?, icon_url = ?, image_url = ?, is_active = ? WHERE id = ?",
        [data.title, data.slug || null, data.category || null, data.overview || null, data.description || null, data.icon_url || null, data.image_url || null, data.is_active, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update service" };
    }
  });

export const deleteServiceFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query("DELETE FROM services WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete service" };
    }
  });


// --- PRODUCTS ---

export const getProductsFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['EDITOR']);
    const products = await query<any[]>("SELECT * FROM products ORDER BY created_at DESC");
    return { products };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch products" };
  }
});

export const createProductFn = createServerFn({ method: "POST" })
  .validator((data: {
    name: string;
    category?: string;
    description?: string;
    image_url?: string;
    is_active: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      const id = crypto.randomUUID();
      await query(
        "INSERT INTO products (id, name, category, description, image_url, is_active) VALUES (?, ?, ?, ?, ?, ?)",
        [id, data.name, data.category || null, data.description || null, data.image_url || null, data.is_active]
      );
      return { success: true, id };
    } catch (err: any) {
      return { error: err.message || "Failed to create product" };
    }
  });

export const updateProductFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    name: string;
    category?: string;
    description?: string;
    image_url?: string;
    is_active: boolean;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query(
        "UPDATE products SET name = ?, category = ?, description = ?, image_url = ?, is_active = ? WHERE id = ?",
        [data.name, data.category || null, data.description || null, data.image_url || null, data.is_active, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update product" };
    }
  });

export const deleteProductFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query("DELETE FROM products WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete product" };
    }
  });


// --- VIDEOS ---

export const getVideosFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['EDITOR']);
    const videos = await query<any[]>("SELECT * FROM videos ORDER BY created_at DESC");
    return { videos };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch videos" };
  }
});


// --- GALLERY ---

export const getGalleryFn = createServerFn({ method: "GET" })
  .handler(async () => {
  try {
    await requireAuth(['EDITOR']);
    const items = await query<any[]>("SELECT * FROM gallery ORDER BY created_at DESC");
    return { items };
  } catch (err: any) {
    return { error: err.message || "Failed to fetch gallery items" };
  }
});

export const createGalleryFn = createServerFn({ method: "POST" })
  .validator((data: {
    src: string;
    alt?: string;
    category?: string;
    title?: string;
    caption?: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      const id = crypto.randomUUID();
      await query(
        "INSERT INTO gallery (id, src, alt, category, title, caption) VALUES (?, ?, ?, ?, ?, ?)",
        [id, data.src, data.alt || null, data.category || null, data.title || null, data.caption || null]
      );
      return { success: true, id };
    } catch (err: any) {
      return { error: err.message || "Failed to create gallery item" };
    }
  });

export const updateGalleryFn = createServerFn({ method: "POST" })
  .validator((data: {
    id: string;
    src: string;
    alt?: string;
    category?: string;
    title?: string;
    caption?: string;
  }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query(
        "UPDATE gallery SET src = ?, alt = ?, category = ?, title = ?, caption = ? WHERE id = ?",
        [data.src, data.alt || null, data.category || null, data.title || null, data.caption || null, data.id]
      );
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to update gallery item" };
    }
  });

export const deleteGalleryFn = createServerFn({ method: "POST" })
  .validator((data: { id: string }) => data)
  .handler(async ({ data }) => {
    try {
      await requireAuth(['EDITOR']);
      await query("DELETE FROM gallery WHERE id = ?", [data.id]);
      return { success: true };
    } catch (err: any) {
      return { error: err.message || "Failed to delete gallery item" };
    }
  });
