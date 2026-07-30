// Prefixes root-relative internal links/assets with Astro's configured base path,
// so hardcoded hrefs like "/flower/" still work when deployed under /blume-and-co/.
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}${path}`;
}
