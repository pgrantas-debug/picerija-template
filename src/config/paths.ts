const normalizedBase = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path: string): string {
  if (!path) return normalizedBase;
  return `${normalizedBase}${path.replace(/^\//, "")}`;
}