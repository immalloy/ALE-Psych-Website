(() => {
  const DEFAULT_LANG = 'en';
  const translationCache = {};
  const pendingLoads = {};
  const missingKeys = new Set();
  const listeners = new Set();

  function normalize(lang) {
    if (!lang) return DEFAULT_LANG;
    const base = lang.toLowerCase();
    if (translationCache[base]) return base;
    const short = base.split('-')[0];
    if (translationCache[short]) return short;
    return base.includes('-') ? short : base;
  }

  function getSavedLang() {
    try {
      return localStorage.getItem('ale-lang');
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem('ale-lang', lang);
    } catch (e) {
      /* ignore */
    }
  }

  let currentLang = normalize(getSavedLang() || navigator.language || DEFAULT_LANG);

  function warnMissing(key, lang) {
    const label = lang || currentLang;
    if (!missingKeys.has(`${label}:${key}`)) {
      console.warn(`[i18n] Missing translation for key '${key}' in '${label}'.`);
      missingKeys.add(`${label}:${key}`);
    }
  }

  function t(key, fallback = '') {
    const primary = translationCache[currentLang]?.[key];
    if (primary !== undefined) return primary;

    const defaultVal = translationCache[DEFAULT_LANG]?.[key];
    if (defaultVal !== undefined) return defaultVal;

    // If translations are still loading, avoid logging missing key warnings until the fetch completes.
    if (pendingLoads[currentLang] || pendingLoads[DEFAULT_LANG]) {
      return fallback ?? key;
    }

    warnMissing(key, currentLang);
    return fallback ?? key;
  }

  function applyElement(el) {
    const key = el.dataset.i18n;
    if (key) {
      const text = t(key);
      if (text !== undefined) {
        el.textContent = text;
      }
    }

    const attrList = (el.dataset.i18nAttrs || '').split(',').map((a) => a.trim()).filter(Boolean);
    attrList.forEach((attr) => {
      const dataKeyName = `i18n${attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`;
      const attrKey = el.dataset[dataKeyName] || key;
      const value = t(attrKey);
      if (value !== undefined) {
        el.setAttribute(attr, value);
      }
    });
  }

  function translatePage(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(applyElement);
  }

  function loadTranslations(lang) {
    const normalized = normalize(lang);
    if (translationCache[normalized]) return Promise.resolve(translationCache[normalized]);
    if (pendingLoads[normalized]) return pendingLoads[normalized];

    const path = getAssetPath(`assets/i18n/${normalized}.json`);
    const promise = fetch(path)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error(`Failed to load ${path}: ${resp.status}`);
        }
        return resp.json();
      })
      .then((data) => {
        translationCache[normalized] = data;
        return data;
      })
      .catch((err) => {
        console.warn(`[i18n] Could not load language '${normalized}'.`, err);
        throw err;
      })
      .finally(() => {
        delete pendingLoads[normalized];
      });

    pendingLoads[normalized] = promise;
    return promise;
  }

  async function loadAndApply(lang) {
    const normalized = normalize(lang);
    if (normalized === currentLang && translationCache[normalized]) {
      translatePage();
      return currentLang;
    }

    let targetLang = normalized;
    try {
      await loadTranslations(normalized);
    } catch (err) {
      if (normalized !== DEFAULT_LANG) {
        console.warn(`[i18n] Falling back to '${DEFAULT_LANG}' because '${normalized}' failed to load.`);
        targetLang = DEFAULT_LANG;
        try {
          await loadTranslations(DEFAULT_LANG);
        } catch (fallbackErr) {
          console.error(`[i18n] Failed to load fallback language '${DEFAULT_LANG}'.`, fallbackErr);
          return currentLang;
        }
      } else {
        console.error(`[i18n] Failed to load default language '${DEFAULT_LANG}'.`, err);
        return currentLang;
      }
    }

    currentLang = targetLang;
    document.documentElement.lang = targetLang;
    saveLang(targetLang);
    const selector = document.getElementById('languageSelect');
    if (selector) selector.value = targetLang;
    translatePage();
    listeners.forEach((fn) => fn(targetLang));
    return targetLang;
  }

  function initSelector() {
    const selector = document.getElementById('languageSelect');
    if (!selector) return;
    selector.value = currentLang;
    selector.addEventListener('change', (e) => {
      loadAndApply(e.target.value);
    });
  }

  function getAssetPath(relativePath) {
    // Try to infer the repository base from this script tag to support GH Pages subpaths.
    const script = document.currentScript || document.querySelector('script[src*="i18n.js"]');
    if (script?.src) {
      try {
        const url = new URL(script.src, window.location.href);
        const basePath = url.pathname.replace(/js\/i18n\.js(?:\?.*)?$/, '');
        return `${basePath}${relativePath}`;
      } catch (e) {
        // fall through to pathname fallback
      }
    }

    // Fallback: use the first path segment as the repo base (e.g., /ALE-Psych-Website/).
    const [, firstSegment = ''] = window.location.pathname.split('/');
    const prefix = firstSegment ? `/${firstSegment}/` : '/';
    return `${prefix}${relativePath}`;
  }

  function init() {
    document.documentElement.lang = currentLang;
    initSelector();
    loadAndApply(currentLang);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = {
    t,
    getLang: () => currentLang,
    setLang: loadAndApply,
    translatePage,
    onChange: (fn) => { if (typeof fn === 'function') listeners.add(fn); },
    offChange: (fn) => listeners.delete(fn)
  };
})();
