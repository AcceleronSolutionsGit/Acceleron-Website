/**
 * Utility to resolve asset URLs with the application's base path.
 * Ensures static public assets are correctly loaded regardless of deployment path or sub-routes.
 */
export function getAssetUrl(path?: string | null): string {
  if (!path) return "";

  // If path is already a full URL (http, https, data URI, blob, protocol-relative)
  if (/^(https?:|data:|blob:|\/\/)/i.test(path)) {
    return path;
  }

  // Get base URL from Vite environment, default to '/'
  const baseUrl = import.meta.env.BASE_URL || "/";

  // Format base URL to remove trailing slash for clean concatenation
  const cleanBase = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  // Ensure path starts with a single leading slash
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const fullPath = `${cleanBase}${cleanPath}`;

  // Safely encode URI to handle spaces and special characters in public image paths
  try {
    return encodeURI(decodeURI(fullPath));
  } catch {
    return fullPath;
  }
}
