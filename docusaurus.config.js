// @ts-check
// Configuration du site docs.flowanalyticspro.com (guide utilisateur de FAP).

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Flow Analytics Pro',
  tagline: 'Guide utilisateur',
  favicon: 'img/favicon.svg',

  url: 'https://docs.flowanalyticspro.com',
  baseUrl: '/',
  // Adresses sans « / » final : docs.flowanalyticspro.com/presentation-fap
  trailingSlash: false,

  organizationName: 'FlowAnalyticsPro',
  projectName: 'fap-docs',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'throw',
  markdown: {
    hooks: { onBrokenMarkdownLinks: 'throw' },
  },

  // Français par défaut (à la racine), anglais sous /en/
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
    localeConfigs: {
      fr: { label: 'FR', htmlLang: 'fr-FR' },
      en: { label: 'EN', htmlLang: 'en-US' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Les fiches sont à la racine du site : /<identifiant-de-la-fiche>
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          breadcrumbs: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  clientModules: [require.resolve('./src/fonts.js')],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        // Pas de page d'accueil pour l'instant : la racine ouvre la première fiche.
        redirects: [{from: '/', to: '/presentation-fap'}],
      },
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      /** @type {import('@easyops-cn/docusaurus-search-local').PluginOptions} */
      ({
        // Recherche locale : l'index est construit avec le site, sans service externe.
        hashed: true,
        language: ['fr', 'en'],
        docsRouteBasePath: '/',
        indexBlog: false,
        indexPages: false,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: { hideable: false, autoCollapseCategories: false },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 2,
      },
      navbar: {
        title: 'Flow Analytics Pro',
        logo: {
          alt: 'Flow Analytics Pro',
          src: 'img/logo.svg',
          href: '/presentation-fap',
        },
        items: [
          { type: 'custom-guideLabel', position: 'left' },
          { type: 'search', position: 'right', className: 'navbar-search-center' },
          { type: 'custom-localeToggle', position: 'right' },
          {
            href: 'https://flowanalyticspro.com',
            label: 'Ouvrir FAP',
            position: 'right',
            className: 'navbar-open-fap',
          },
        ],
      },
    }),
};

module.exports = config;
