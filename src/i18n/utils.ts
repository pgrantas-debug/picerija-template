import { languages, defaultLang, type Lang } from "./translations";

function getBasePathSegments(): string[] {
  return import.meta.env.BASE_URL.split("/").filter(Boolean);
}

function stripBasePath(pathname: string): string[] {
  const parts = pathname.split("/").filter(Boolean);
  const baseParts = getBasePathSegments();

  const hasBasePrefix =
    baseParts.length > 0 && baseParts.every((part, index) => parts[index] === part);

  return hasBasePrefix ? parts.slice(baseParts.length) : parts;
}

export function getLangFromUrl(url: URL): Lang {
  const [lang] = stripBasePath(url.pathname);
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getAlternateLangPath(url: URL, targetLang: Lang): string {
  const parts = stripBasePath(url.pathname);
  if (parts[0] in languages) parts.shift();

  const rest = parts.join("/");
  const basePrefix = `/${getBasePathSegments().join("/")}`;
  const base = basePrefix === "/" ? "" : basePrefix;

  return `${base}/${targetLang}${rest ? `/${rest}` : ""}/`;
}
