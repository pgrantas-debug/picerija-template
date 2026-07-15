// ============================================================
// ATIDARYTA/UŽDARYTA STATUSAS — realaus laiko tikrinimas
// ============================================================
import { siteConfig } from "../config/site.config";
import type { Lang } from "../i18n/translations";
import { useTranslations } from "../i18n/translations";

export function initStatus(lang: Lang) {
  const t = useTranslations(lang);

  function update() {
    const now = new Date();
    const day = now.getDay();
    const hour = now.getHours() + now.getMinutes() / 60;
    const isClosedDay = (siteConfig.hours.closedDays as readonly number[]).includes(day);
    const isOpen = !isClosedDay && hour >= siteConfig.hours.openHour && hour < siteConfig.hours.closeHour;

    const targets = [
      { pill: document.getElementById("statusPillNav"), text: document.getElementById("statusTextNav") },
      { pill: document.getElementById("statusPillHero"), text: document.getElementById("statusTextHero") },
    ];

    targets.forEach(({ pill, text }) => {
      if (!pill || !text) return;
      if (isOpen) {
        pill.classList.remove("closed");
        text.innerText = `${t.hero.openNow} ${siteConfig.hours.closeHour}:00`;
      } else {
        pill.classList.add("closed");
        text.innerText = isClosedDay ? t.hero.closedToday : `${t.hero.closedUntil} ${siteConfig.hours.openHour}:00`;
      }
    });
  }

  update();
  setInterval(update, 60000);
}
