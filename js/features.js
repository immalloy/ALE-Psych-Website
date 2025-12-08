// /js/features.js
(function () {
  const t = window.i18n?.t || ((key) => key);

  const FEATURES = [
    {
      titleKey: "features.scripted.title",
      descriptionKey: "features.scripted.desc",
      image: "assets/images/features/feature1.png",
      altKey: "features.scripted.alt"
    },
    {
      titleKey: "features.moddability.title",
      descriptionKey: "features.moddability.desc",
      image: "assets/images/features/feature2.png",
      altKey: "features.moddability.alt"
    },
    {
      titleKey: "features.unique.title",
      descriptionKey: "features.unique.desc",
      image: "assets/images/features/feature3.png",
      altKey: "features.unique.alt"
    },
    {
      titleKey: "features.console.title",
      descriptionKey: "features.console.desc",
      image: "assets/images/features/feature4.png",
      altKey: "features.console.alt"
    },
    {
      titleKey: "features.rulescript.title",
      descriptionKey: "features.rulescript.desc",
      image: "assets/images/features/feature5.png",
      altKey: "features.rulescript.alt"
    },
    {
      titleKey: "features.community.title",
      descriptionKey: "features.community.desc",
      image: "assets/images/features/feature6.png",
      altKey: "features.community.alt"
    }
  ];

  const content = document.getElementById("featureContent");
  const img = document.getElementById("featureImage");
  const title = document.getElementById("featureTitle");
  const desc = document.getElementById("featureDescription");
  const left = document.getElementById("arrowLeft");
  const right = document.getElementById("arrowRight");
  const carousel = document.getElementById("featureCarousel");
  if (!content || !img || !title || !desc || !left || !right || !carousel) return;

  let index = 0;
  let hover = false;
  let autoplayId = null;
  const REDUCED = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const OUT_MS = 220;
  const IN_MS = 220;
  const AUTO_MS = 5000;

  function render(i) {
    const f = FEATURES[i];
    img.src = f.image;
    img.alt = t(f.altKey, f.titleKey);
    title.textContent = t(f.titleKey, f.titleKey);
    desc.textContent = t(f.descriptionKey, f.descriptionKey);
  }

  function animateOut(dir) {
    if (REDUCED) return Promise.resolve();
    return new Promise((resolve) => {
      content.classList.add(dir === "right" ? "transition-out-right" : "transition-out-left");
      setTimeout(() => {
        content.classList.remove("transition-out-right", "transition-out-left");
        resolve();
      }, OUT_MS);
    });
  }

  function animateIn(dir) {
    if (REDUCED) return;
    const cls = dir === "right" ? "transition-in-right" : "transition-in-left";
    content.classList.add(cls);
    setTimeout(() => content.classList.remove(cls), IN_MS);
  }

  async function go(delta) {
    const next = (index + delta + FEATURES.length) % FEATURES.length;
    await animateOut(delta > 0 ? "right" : "left");
    index = next;
    render(index);
    animateIn(delta > 0 ? "right" : "left");
  }

  function init() {
    content.classList.add("loading");
    render(index);
    requestAnimationFrame(() => content.classList.remove("loading"));
  }

  left.addEventListener("click", () => go(-1));
  right.addEventListener("click", () => go(1));

  carousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(-1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(1);
    }
  });

  ["mouseenter", "focusin"].forEach((ev) => carousel.addEventListener(ev, () => { hover = true; }));
  ["mouseleave", "focusout"].forEach((ev) => carousel.addEventListener(ev, () => { hover = false; }));

  let startX = null;
  content.addEventListener("touchstart", (e) => { startX = e.changedTouches[0].clientX; }, { passive: true });
  content.addEventListener("touchend", (e) => {
    if (startX == null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(dx > 0 ? -1 : 1);
    startX = null;
  }, { passive: true });

  function autoStart() {
    if (REDUCED || autoplayId) return;
    autoplayId = setInterval(() => { if (!hover) go(1); }, AUTO_MS);
  }
  function autoStop() { if (autoplayId) { clearInterval(autoplayId); autoplayId = null; } }
  document.addEventListener("visibilitychange", () => { if (document.hidden) autoStop(); else autoStart(); });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => { init(); autoStart(); });
  } else {
    init();
    autoStart();
  }

  if (window.i18n?.onChange) {
    window.i18n.onChange(() => render(index));
  }
})();
