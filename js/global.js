(() => {
  const MOBILE_BREAKPOINT = 720;
  const SUPPORTED_LOCALES = ['en', 'es'];
  const header = document.getElementById('mainHeader');
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('headerToggle');
  const languageSelect = document.getElementById('languageSelect');

  if (!header || !nav || !toggle) return;

  const setExpanded = expanded => {
    if (expanded) {
      header.classList.add('nav-open');
      header.classList.remove('nav-collapsed');
    } else {
      header.classList.remove('nav-open');
      header.classList.add('nav-collapsed');
    }
    toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  const syncForViewport = () => {
    const isMobile = window.innerWidth <= MOBILE_BREAKPOINT;
    header.classList.toggle('nav-collapsible', isMobile);
    if (!isMobile) {
      header.classList.remove('nav-collapsed');
      header.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'true');
      nav.style.removeProperty('max-height');
      return;
    }
    if (!header.classList.contains('nav-open')) {
      setExpanded(false);
    }
  };

  toggle.addEventListener('click', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) return;
    const isOpen = header.classList.toggle('nav-open');
    header.classList.toggle('nav-collapsed', !isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  window.addEventListener('resize', syncForViewport);
  syncForViewport();

  // Language switcher
  const pathParts = () => window.location.pathname.split('/').filter(Boolean);
  const findLocaleIndex = (parts) => parts.findIndex(part => SUPPORTED_LOCALES.includes(part));

  const detectPreferredLocale = () => {
    const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    return navLang.startsWith('es') ? 'es' : 'en';
  };

  const ensureLocale = () => {
    const parts = pathParts();
    const localeIndex = findLocaleIndex(parts);
    if (localeIndex >= 0) {
      return { locale: parts[localeIndex], parts, localeIndex };
    }

    const anchorSections = ['dist', 'downloads', 'mods', 'scripts', 'wiki', '404.html', 'index.html'];
    const insertBefore = parts.findIndex(p => anchorSections.includes(p));
    const insertIndex = insertBefore === -1 ? parts.length : insertBefore;
    const locale = detectPreferredLocale();
    parts.splice(insertIndex, 0, locale);
    const newPath = `/${parts.join('/')}${window.location.pathname.endsWith('/') ? '/' : ''}${window.location.search}${window.location.hash}`;
    window.location.replace(newPath);
    return { locale, parts, localeIndex: insertIndex };
  };

  const { locale: currentLocale, parts: currentParts, localeIndex } = ensureLocale();

  if (languageSelect) {
    languageSelect.value = currentLocale;
    languageSelect.addEventListener('change', (event) => {
      const targetLocale = event.target.value;
      if (!SUPPORTED_LOCALES.includes(targetLocale)) return;

      const parts = currentParts.slice();
      const idx = localeIndex >= 0 ? localeIndex : findLocaleIndex(parts);
      if (idx >= 0) {
        parts[idx] = targetLocale;
      } else {
        const anchorSections = ['dist', 'downloads', 'mods', 'scripts', 'wiki', '404.html', 'index.html'];
        const insertBefore = parts.findIndex(p => anchorSections.includes(p));
        const insertIndex = insertBefore === -1 ? parts.length : insertBefore;
        parts.splice(insertIndex, 0, targetLocale);
      }

      const keepSlash = window.location.pathname.endsWith('/') && !window.location.pathname.endsWith('.html');
      const newPath = `/${parts.join('/')}${keepSlash ? '/' : ''}${window.location.search}${window.location.hash}`;
      window.location.assign(newPath);
    });
  }

  document.documentElement.lang = currentLocale;
})();
