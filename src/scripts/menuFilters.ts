// ============================================================
// MENIU FILTRŲ LOGIKA (paieška, kategorijos, veg/spicy)
// ============================================================
export function initMenuFilters() {
  let activeCat = "Todas";
  let vegOnly = false;
  let spicyOnly = false;
  let query = "";
  const emptyState = document.getElementById("emptyState");
  const menuCats = document.querySelectorAll<HTMLElement>(".menu-cat");

  function applyFilters() {
    let visibleCount = 0;
    menuCats.forEach((catBlock) => {
      const cat = catBlock.dataset.cat!;
      const showCategory = activeCat === "Todas" || activeCat === cat;
      let catHasVisible = false;
      const rows = catBlock.querySelectorAll<HTMLElement>(".menu-row");
      rows.forEach((row) => {
        const name = row.dataset.name || "";
        const es = row.dataset.es || "";
        const en = row.dataset.en || "";
        const isVeg = row.dataset.veg === "1";
        const isSpicy = row.dataset.spicy === "1";
        let visible = showCategory;
        if (vegOnly) visible = visible && isVeg;
        if (spicyOnly) visible = visible && isSpicy;
        if (query) {
          const haystack = `${name} ${es} ${en}`.toLowerCase();
          visible = visible && haystack.includes(query.toLowerCase());
        }
        row.style.display = visible ? "" : "none";
        if (visible) {
          catHasVisible = true;
          visibleCount++;
        }
      });
      catBlock.style.display = catHasVisible ? "" : "none";
    });
    if (emptyState) {
      emptyState.style.display = visibleCount === 0 ? "block" : "none";
    }
  }

  document.getElementById("menuSearch")?.addEventListener("input", (e) => {
    query = (e.target as HTMLInputElement).value;
    applyFilters();
  });

  document.getElementById("tabRow")?.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLElement>(".tab-btn");
    if (!btn) return;
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    activeCat = btn.dataset.cat!;
    applyFilters();
  });

  document.getElementById("dietVeg")?.addEventListener("click", (e) => {
    vegOnly = !vegOnly;
    (e.target as HTMLElement).classList.toggle("active");
    applyFilters();
  });

  document.getElementById("dietSpicy")?.addEventListener("click", (e) => {
    spicyOnly = !spicyOnly;
    (e.target as HTMLElement).classList.toggle("active");
    applyFilters();
  });

  applyFilters();
}
