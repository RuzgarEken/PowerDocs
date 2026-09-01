// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Power',
  tagline: 'A universal stat and effect system for Unity.',
  favicon: 'img/PowerIconFlat.png',

  future: {
    v4: true,
  },

  url: 'https://powerengine.dev',
  baseUrl: '/',

  organizationName: 'RuzgarEken',
  projectName: 'PowerDocs',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  // 👇 ADD THIS — enables ```mermaid code fences in .md/.mdx files
  markdown: {
    mermaid: true,
  },

  // 👇 ADD THIS — registers the theme that actually renders the diagrams
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        respectPrefersColorScheme: true,
        disableSwitch: true
      },
      navbar: {
        title: 'Power',
        logo: {
          alt: 'My Site Logo',
          src: 'img/PowerIconFlat.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Power.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;