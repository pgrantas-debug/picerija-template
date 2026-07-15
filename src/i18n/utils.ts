import { languages, defaultLang, type Lang } from "./translations";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getAlternateLangPath(url: URL, targetLang: Lang): string {
  const parts = url.pathname.split("/").filter(Boolean);
  if (parts[0] in languages) parts.shift();
  return `/${targetLang}/${parts.join("/")}`.replace(/\/$/, "") || `/${targetLang}`;
}
