// ============================================================
// KREPŠELIO LOGIKA — su galimybe pašalinti prekę
// ============================================================
import { siteConfig } from "../config/site.config";

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

interface CartI18n {
  emptyText: string;
  removeLabel: string;
  emptyAlert: string;
  whatsappHeader: string;
  whatsappType: string;
  whatsappTotal: string;
  whatsappNote: string;
  whatsappAddress: string;
  pickupLabel: string;
  deliveryLabel: string;
}

declare global {
  interface Window {
    __cartI18n: CartI18n;
  }
}

let cart: CartItem[] = [];
let orderType = "Recogida";

function getI18n(): CartI18n {
  return window.__cartI18n;
}

function renderCart() {
  const i18n = getI18n();
  const count = cart.reduce((s, i) => s + i.qty, 0);
  const navCount = document.getElementById("cartCountNav");
  if (navCount) navCount.innerText = String(count);
  const tabBadge = document.getElementById("tabCartBadge");
  if (tabBadge) {
    tabBadge.innerText = String(count);
    tabBadge.style.display = count > 0 ? "flex" : "none";
  }
  const body = document.getElementById("sheetItems");
  const totalEl = document.getElementById("sheetTotal");
  if (!body || !totalEl) return;
  if (cart.length === 0) {
    body.innerHTML = `<p class="sheet-empty">${i18n.emptyText}</p>`;
    totalEl.innerText = "0,00€";
    return;
  }
  let total = 0;
  body.innerHTML = cart
    .map((item, index) => {
      total += item.price * item.qty;
      return `
        <div class="sheet-item" data-index="${index}">
          <div class="si-info">
            <span class="si-name">${item.name}<span class="si-qty">×${item.qty}</span></span>
          </div>
          <div class="si-right">
            <span class="si-price">${(item.price * item.qty).toFixed(2)}€</span>
            <button class="si-remove" data-index="${index}" aria-label="${i18n.removeLabel}" title="${i18n.removeLabel}">✕</button>
          </div>
        </div>`;
    })
    .join("");
  totalEl.innerText = total.toFixed(2) + "€";
}

function removeItem(index: number) {
  cart.splice(index, 1);
  renderCart();
}

function addItem(name: string, price: number) {
  const existing = cart.find((i) => i.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price, qty: 1 });
  }
  renderCart();
}

function openSheet() {
  document.getElementById("overlay")?.classList.add("open");
  document.getElementById("sheet")?.classList.add("open");
}

function closeSheet() {
  document.getElementById("overlay")?.classList.remove("open");
  document.getElementById("sheet")?.classList.remove("open");
}

function sendOrder() {
  const i18n = getI18n();
  if (cart.length === 0) {
    alert(i18n.emptyAlert);
    return;
  }
  const noteField = document.getElementById("orderNote") as HTMLTextAreaElement | null;
  const note = noteField?.value.trim() ?? "";
  const typeLabel = orderType === "Recogida" ? i18n.pickupLabel : i18n.deliveryLabel;
  let text = `${i18n.whatsappHeader}%0A%0A${i18n.whatsappType}: ${typeLabel}%0A%0A`;
  let total = 0;
  cart.forEach((i) => {
    text += `- ${i.name} (x${i.qty}) - ${(i.price * i.qty).toFixed(2)}€%0A`;
    total += i.price * i.qty;
  });
  text += `%0A${i18n.whatsappTotal}: ${total.toFixed(2)}€`;
  if (note) text += `%0A%0A${i18n.whatsappNote}: ${note}`;
  if (orderType === "Domicilio") text += `%0A%0A${i18n.whatsappAddress}`;
  window.open(`https://wa.me/${siteConfig.business.whatsapp}?text=${text}`, "_blank");
}

export function initCart() {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    const addBtn = target.closest(".mini-add") as HTMLElement | null;
    if (addBtn) {
      const name = addBtn.dataset.name!;
      const price = parseFloat(addBtn.dataset.price!);
      addItem(name, price);
      openSheet();
      return;
    }
    const removeBtn = target.closest(".si-remove") as HTMLElement | null;
    if (removeBtn) {
      const index = parseInt(removeBtn.dataset.index!, 10);
      removeItem(index);
      return;
    }
  });
  ["openSheetNav", "openSheetHero", "openSheetTab"].forEach((id) => {
    document.getElementById(id)?.addEventListener("click", openSheet);
  });
  document.getElementById("sheetClose")?.addEventListener("click", closeSheet);
  document.getElementById("overlay")?.addEventListener("click", closeSheet);
  document.querySelectorAll(".ot-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ot-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      orderType = (btn as HTMLElement).dataset.type!;
    });
  });
  document.getElementById("sendOrder")?.addEventListener("click", sendOrder);
  renderCart();
}
