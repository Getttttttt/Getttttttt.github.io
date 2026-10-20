document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu-button");
  const nav = document.querySelector(".primary-nav");
  const closeMenu = () => {
    nav?.classList.remove("is-open");
    menu?.setAttribute("aria-expanded", "false");
  };
  menu?.addEventListener("click", () => {
    const open = menu.getAttribute("aria-expanded") !== "true";
    menu.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu?.getAttribute("aria-expanded") === "true") {
      closeMenu();
      menu.focus();
    }
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.matchMedia("(min-width: 541px)").addEventListener("change", closeMenu);
  const themeButton = document.querySelector("#light-toggle");
  const describeTheme = () => {
    if (!themeButton) return;
    const setting = document.documentElement.dataset.themeSetting || "system";
    const description = `Color theme: ${setting}. Activate to change.`;
    themeButton.setAttribute("aria-label", description);
    themeButton.title = description;
  };
  new MutationObserver(describeTheme).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme-setting"] });
  describeTheme();
  document.querySelectorAll("[data-filter-collection]").forEach((collection) => {
    const itemSelector = collection.dataset.filterCollection === "publications" ? "[data-publication]" : "[data-research-category]";
    const items = [...collection.querySelectorAll(itemSelector)];
    const buttons = [...collection.querySelectorAll("[data-category-filter]")];
    const input = collection.querySelector("input[type=search]");
    const count = collection.querySelector("[data-result-count]");
    const empty = collection.querySelector("[data-empty-state]");
    let category = "all";
    const filter = () => {
      const words = (input?.value || "").trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      let visible = 0;
      items.forEach((item) => {
        const itemCategory = item.dataset.category || item.dataset.researchCategory;
        const text = item.textContent.toLocaleLowerCase();
        const match = (category === "all" || category === itemCategory) && words.every((word) => text.includes(word));
        const container = item.closest("li") || item;
        container.hidden = !match;
        if (match) visible += 1;
      });
      if (count)
        count.textContent = `${visible} of ${items.length} ${collection.dataset.filterCollection === "publications" ? "publications" : "projects"}`;
      if (empty) empty.hidden = visible !== 0;
    };
    buttons.forEach((button) =>
      button.addEventListener("click", () => {
        category = button.dataset.categoryFilter;
        buttons.forEach((other) => other.setAttribute("aria-pressed", String(button === other)));
        filter();
      })
    );
    input?.addEventListener("input", filter);
    filter();
  });
  document.querySelectorAll(".copy-citation").forEach((button) => {
    button.addEventListener("click", async () => {
      const code = button.closest(".citation-body").querySelector("code");
      try {
        await navigator.clipboard.writeText(code.textContent);
        button.textContent = "Copied";
        window.setTimeout(() => {
          button.textContent = "Copy citation";
        }, 2000);
      } catch {
        const range = document.createRange();
        range.selectNodeContents(code);
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
        button.textContent = "Citation selected — press Ctrl/Cmd+C";
      }
    });
  });
});
