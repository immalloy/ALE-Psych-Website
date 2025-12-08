(() => {
  const DEFAULT_LANG = 'en';
  const translations = {
    en: {
      'nav.home': 'Home',
      'nav.downloads': 'Downloads',
      'nav.mods': 'Mods',
      'nav.scripts': 'Scripts',
      'nav.wiki': 'Wiki',
      'nav.api': 'API (Lua)',
      'nav.toggle': 'Toggle navigation',
      'nav.language': 'Language',
      'downloads.title': 'Downloads',
      'downloads.card.windows.title': 'Windows 64-bit',
      'downloads.card.windows.sub': 'ZIP · Win x64',
      'downloads.card.windows.aria': 'Download Windows 64-bit build',
      'downloads.card.macos.title': 'macOS',
      'downloads.card.macos.sub': 'ZIP · Universal/ARM',
      'downloads.card.macos.aria': 'Download macOS (Universal/ARM) build',
      'downloads.card.linux.title': 'Linux',
      'downloads.card.linux.sub': 'ZIP',
      'downloads.card.linux.aria': 'Download Linux build',
      'downloads.card.other.title': 'Other downloads',
      'downloads.card.other.sub': 'Android, iOS, Win 32-bit…',
      'downloads.card.other.aria': 'View other downloads',
      'downloads.cta': 'Download',
      'downloads.open': 'Open',
      'downloads.note': 'Stable builds and changelogs live on our releases page.',
      'releases.button': 'View GitHub Releases',
      'features.heading': 'Main Features',
      'community.heading': 'Community',
      'community.topic': 'Git Topic (ALE Psych)',
      'community.discord': 'Discord Server',
      'community.mods': 'Mods Page',
      'footer.contribute': 'Contribute to Website',
      'footer.builds': 'Latest Builds',
      'footer.wiki': 'Engine Wiki',
      'footer.api': 'Engine API (Lua)',
      'footer.topic': 'Git Topic (ALE Psych)',
      'footer.credits': 'ALE Psych [Rewritten] · Created by Alejo GD Official and THE VOID · Website by ImMalloy',
      'mods.heading': 'Community Mods',
      'mods.lead': 'Featured projects, ports, upcoming releases, and everything created with ALE Psych.',
      'mods.filter.all': 'All',
      'mods.filter.featured': 'Featured',
      'mods.filter.original': 'Original',
      'mods.filter.port': 'Ports',
      'mods.filter.tools': 'Tools',
      'mods.filter.upcoming': 'Upcoming',
      'mods.empty.title': 'No mods match this filter',
      'mods.empty.copy': 'Try switching categories or check back later.',
      'scripts.heading': 'Community Scripts & Tools',
      'scripts.lead': 'Find and share scripts built for ALE Psych - from helpers and utilities to full gameplay systems.',
      'scripts.topic.title': 'GitHub Topics',
      'scripts.topic.sub': 'Scripts & tools for ALE Psych',
      'scripts.discord.title': 'Discord Server',
      'scripts.discord.sub': 'Join the community & support',
      'scripts.channel.title': 'Scripts Channel',
      'scripts.channel.sub': 'Requires joining the server',
      'scripts.already': "Already joined?",
      'scripts.channel.open': 'Open the Scripts Channel',
      'scripts.info.title': "What you'll find",
      'scripts.info.item1': 'Reusable Lua/HScript snippets for common engine tasks.',
      'scripts.info.item2': 'Tools and helpers for mod pipelines (packaging, assets, automation).',
      'scripts.info.item3': 'Examples demonstrating inputs, menus, RuleScript, and more.',
      'scripts.info.tip': 'Tip: tag your GitHub repo with',
      'scripts.info.code': 'ale-psych',
      'scripts.info.afterTip': 'so it shows up under Topics.',
      'downloads.lead': 'Nightly builds for Windows, Android, and Linux. Cards open in a new tab.',
      'downloads.card.win32.title': 'Windows 32-bit',
      'downloads.card.win32.sub': 'ZIP · Win x86',
      'downloads.card.win32.aria': 'Download Windows 32-bit build',
      'downloads.card.android.title': 'Android',
      'downloads.card.android.sub': 'APK',
      'downloads.card.android.aria': 'Download Android build',
      'downloads.card.html5.title': 'HTML5',
      'downloads.card.html5.sub': 'ZIP',
      'downloads.card.html5.aria': 'Download HTML5 build',
      'downloads.card.ios.title': 'iOS',
      'downloads.card.ios.sub': 'IPA',
      'downloads.card.ios.aria': 'Download iOS build',
      'downloads.card.src.title': 'Source',
      'downloads.card.src.sub': 'GitHub · Source code',
      'downloads.card.src.aria': 'View source code',
      'downloads.card.macosx64.title': 'macOS x64',
      'downloads.card.macosx64.sub': 'ZIP · Intel x64',
      'downloads.card.macosx64.aria': 'Download macOS x64 (Intel)',
      'downloads.release.cta': 'Browse GitHub Releases',
      'downloads.release.note': 'Find stable builds and full changelog details.',
      'downloads.notes.title': 'Notes',
      'downloads.notes.item1': 'Nightly builds may change often; for stability check the repository releases.',
      'downloads.notes.item2': 'On Windows, if SmartScreen warns you, choose “More info” → “Run anyway”.',
      'downloads.notes.item3': 'On Linux, make the binary executable:',
      'downloads.notes.item4': 'On Android, enable installing APKs from unknown sources.',
      'features.scripted.title': 'Scripted Menus & Submenus',
      'features.scripted.desc': 'Create full custom menus using Lua or HScript, including submenus, transitions, and dynamic UI elements.',
      'features.scripted.alt': 'Custom scripted menu with submenu transitions',
      'features.moddability.title': 'Easy Moddability',
      'features.moddability.desc': 'A clean folder structure and engine tools designed to make modding simple, readable, and fast.',
      'features.moddability.alt': 'Folders and tools for quick modding',
      'features.unique.title': 'Unique Mod Support',
      'features.unique.desc': 'ALE Psych [Rewritten] lets each mod define its own logic, resources, and systems without conflicts.',
      'features.unique.alt': 'Multiple mods listed without conflicts',
      'features.console.title': 'In-Game Console (F2)',
      'features.console.desc': 'Debug your mod with a powerful in-game console supporting commands, log output, and error reports.',
      'features.console.alt': 'In-game console showing logs and commands',
      'features.rulescript.title': 'RuleScript Integration',
      'features.rulescript.desc': 'Supercharge your HScript mods with RuleScript, unlocking big scripting capabilities and advanced behaviors.',
      'features.rulescript.alt': 'RuleScript code sample',
      'features.community.title': 'Community Driven',
      'features.community.desc': 'ALE Psych evolves with its user base. Suggestions, mods, and feedback directly shape the engine.',
      'features.community.alt': 'Community discussion and feedback'
    },
    es: {
      'nav.home': 'Inicio',
      'nav.downloads': 'Descargas',
      'nav.mods': 'Mods',
      'nav.scripts': 'Scripts',
      'nav.wiki': 'Wiki',
      'nav.api': 'API (Lua)',
      'nav.toggle': 'Alternar navegación',
      'nav.language': 'Idioma',
      'downloads.title': 'Descargas',
      'downloads.card.windows.title': 'Windows 64-bit',
      'downloads.card.windows.sub': 'ZIP · Win x64',
      'downloads.card.windows.aria': 'Descargar compilación de Windows 64-bit',
      'downloads.card.macos.title': 'macOS',
      'downloads.card.macos.sub': 'ZIP · Universal/ARM',
      'downloads.card.macos.aria': 'Descargar compilación de macOS (Universal/ARM)',
      'downloads.card.linux.title': 'Linux',
      'downloads.card.linux.sub': 'ZIP',
      'downloads.card.linux.aria': 'Descargar compilación de Linux',
      'downloads.card.other.title': 'Otras descargas',
      'downloads.card.other.sub': 'Android, iOS, Win 32-bit…',
      'downloads.card.other.aria': 'Ver otras descargas',
      'downloads.cta': 'Descargar',
      'downloads.open': 'Abrir',
      'downloads.note': 'Las compilaciones estables y los cambios están en nuestra página de lanzamientos.',
      'releases.button': 'Ver lanzamientos en GitHub',
      'features.heading': 'Funciones principales',
      'community.heading': 'Comunidad',
      'community.topic': 'Git Topic (ALE Psych)',
      'community.discord': 'Servidor de Discord',
      'community.mods': 'Página de Mods',
      'footer.contribute': 'Contribuir al sitio web',
      'footer.builds': 'Compilaciones recientes',
      'footer.wiki': 'Wiki del motor',
      'footer.api': 'API del motor (Lua)',
      'footer.topic': 'Tema de Git (ALE Psych)',
      'footer.credits': 'ALE Psych [Rewritten] · Creado por Alejo GD Official y THE VOID · Sitio web por ImMalloy',
      'mods.heading': 'Mods de la comunidad',
      'mods.lead': 'Proyectos destacados, ports, lanzamientos próximos y todo lo creado con ALE Psych.',
      'mods.filter.all': 'Todos',
      'mods.filter.featured': 'Destacados',
      'mods.filter.original': 'Original',
      'mods.filter.port': 'Ports',
      'mods.filter.tools': 'Herramientas',
      'mods.filter.upcoming': 'Próximamente',
      'mods.empty.title': 'Ningún mod coincide con este filtro',
      'mods.empty.copy': 'Prueba cambiando de categoría o vuelve más tarde.',
      'scripts.heading': 'Scripts y herramientas de la comunidad',
      'scripts.lead': 'Encuentra y comparte scripts creados para ALE Psych: desde utilidades hasta sistemas completos.',
      'scripts.topic.title': 'Temas de GitHub',
      'scripts.topic.sub': 'Scripts y herramientas para ALE Psych',
      'scripts.discord.title': 'Servidor de Discord',
      'scripts.discord.sub': 'Únete a la comunidad y al soporte',
      'scripts.channel.title': 'Canal de Scripts',
      'scripts.channel.sub': 'Requiere unirse al servidor',
      'scripts.already': '¿Ya te uniste?',
      'scripts.channel.open': 'Abrir el canal de Scripts',
      'scripts.info.title': 'Qué encontrarás',
      'scripts.info.item1': 'Fragmentos reutilizables de Lua/HScript para tareas comunes del motor.',
      'scripts.info.item2': 'Herramientas y ayudas para el pipeline de mods (paquetes, assets, automatización).',
      'scripts.info.item3': 'Ejemplos que muestran entradas, menús, RuleScript y más.',
      'scripts.info.tip': 'Consejo: etiqueta tu repositorio de GitHub con',
      'scripts.info.code': 'ale-psych',
      'scripts.info.afterTip': 'para que aparezca en Temas.',
      'downloads.lead': 'Compilaciones nocturnas para Windows, Android y Linux. Las tarjetas se abren en una nueva pestaña.',
      'downloads.card.win32.title': 'Windows 32-bit',
      'downloads.card.win32.sub': 'ZIP · Win x86',
      'downloads.card.win32.aria': 'Descargar compilación de Windows 32-bit',
      'downloads.card.android.title': 'Android',
      'downloads.card.android.sub': 'APK',
      'downloads.card.android.aria': 'Descargar compilación de Android',
      'downloads.card.html5.title': 'HTML5',
      'downloads.card.html5.sub': 'ZIP',
      'downloads.card.html5.aria': 'Descargar compilación de HTML5',
      'downloads.card.ios.title': 'iOS',
      'downloads.card.ios.sub': 'IPA',
      'downloads.card.ios.aria': 'Descargar compilación de iOS',
      'downloads.card.src.title': 'Código fuente',
      'downloads.card.src.sub': 'GitHub · Código fuente',
      'downloads.card.src.aria': 'Ver código fuente',
      'downloads.card.macosx64.title': 'macOS x64',
      'downloads.card.macosx64.sub': 'ZIP · Intel x64',
      'downloads.card.macosx64.aria': 'Descargar compilación de macOS x64 (Intel)',
      'downloads.release.cta': 'Explorar lanzamientos en GitHub',
      'downloads.release.note': 'Encuentra compilaciones estables y detalles completos del changelog.',
      'downloads.notes.title': 'Notas',
      'downloads.notes.item1': 'Las compilaciones nocturnas cambian seguido; para estabilidad revisa los lanzamientos del repositorio.',
      'downloads.notes.item2': 'En Windows, si SmartScreen muestra una alerta, elige “Más información” → “Ejecutar de todas formas”.',
      'downloads.notes.item3': 'En Linux, haz ejecutable el binario:',
      'downloads.notes.item4': 'En Android, habilita la instalación de APKs de orígenes desconocidos.',
      'features.scripted.title': 'Menús y submenús con scripts',
      'features.scripted.desc': 'Crea menús completos con Lua o HScript, con submenús, transiciones y elementos de UI dinámicos.',
      'features.scripted.alt': 'Menú personalizado con transiciones de submenús',
      'features.moddability.title': 'Moddability fácil',
      'features.moddability.desc': 'Estructura de carpetas limpia y herramientas del motor para que el modding sea simple y rápido.',
      'features.moddability.alt': 'Carpetas y herramientas para un modding rápido',
      'features.unique.title': 'Soporte único para mods',
      'features.unique.desc': 'ALE Psych [Rewritten] permite que cada mod defina su propia lógica y recursos sin conflictos.',
      'features.unique.alt': 'Múltiples mods listados sin conflictos',
      'features.console.title': 'Consola en el juego (F2)',
      'features.console.desc': 'Depura tu mod con una consola integrada que admite comandos, registros y reportes de errores.',
      'features.console.alt': 'Consola en el juego mostrando registros y comandos',
      'features.rulescript.title': 'Integración con RuleScript',
      'features.rulescript.desc': 'Potencia tus mods en HScript con RuleScript para más capacidades y comportamientos avanzados.',
      'features.rulescript.alt': 'Ejemplo de código RuleScript',
      'features.community.title': 'Impulsado por la comunidad',
      'features.community.desc': 'ALE Psych evoluciona con sus usuarios. Las sugerencias, mods y comentarios moldean el motor.',
      'features.community.alt': 'Discusión y comentarios de la comunidad'
    }
  };

  const listeners = new Set();
  const supported = Object.keys(translations);

  function normalize(lang) {
    if (!lang) return DEFAULT_LANG;
    const base = lang.toLowerCase();
    if (supported.includes(base)) return base;
    const short = base.split('-')[0];
    if (supported.includes(short)) return short;
    return DEFAULT_LANG;
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

  function t(key, fallback = '') {
    return translations[currentLang]?.[key] ?? translations[DEFAULT_LANG]?.[key] ?? fallback ?? key;
  }

  function applyElement(el) {
    const key = el.dataset.i18n;
    if (key) {
      const text = t(key);
      if (text) {
        el.textContent = text;
      }
    }

    const attrList = (el.dataset.i18nAttrs || '').split(',').map((a) => a.trim()).filter(Boolean);
    attrList.forEach((attr) => {
      const dataKeyName = `i18n${attr.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}`;
      const attrKey = el.dataset[dataKeyName] || key;
      const value = t(attrKey);
      if (value) {
        el.setAttribute(attr, value);
      }
    });
  }

  function translatePage(root = document) {
    root.querySelectorAll('[data-i18n]').forEach(applyElement);
  }

  function setLang(lang) {
    const normalized = normalize(lang);
    if (normalized === currentLang) return;
    currentLang = normalized;
    document.documentElement.lang = normalized;
    saveLang(normalized);
    translatePage();
    listeners.forEach((fn) => fn(normalized));
  }

  function initSelector() {
    const selector = document.getElementById('languageSelect');
    if (!selector) return;
    selector.value = currentLang;
    selector.addEventListener('change', (e) => setLang(e.target.value));
  }

  function init() {
    document.documentElement.lang = currentLang;
    translatePage();
    initSelector();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = {
    t,
    getLang: () => currentLang,
    setLang,
    translatePage,
    onChange: (fn) => { if (typeof fn === 'function') listeners.add(fn); },
    offChange: (fn) => listeners.delete(fn)
  };
})();
