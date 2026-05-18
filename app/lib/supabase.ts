const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://oeachqcjqnlftdlrcaia.supabase.co";

export const BUCKET = "assets";

/**
 * Build a public URL for an object in the `assets` bucket.
 * The bucket is public, so these URLs work without auth.
 */
export function publicUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path}`;
}
