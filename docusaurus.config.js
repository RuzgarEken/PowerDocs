// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

// Outline icons (24 x 24, currentColor) for the store and social links: one style, no downloads
const icon = (paths) =>
  `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths}</svg>`;

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/channel/UCRyMTxjhk7aZMLNFx7RFOPg',
    svg: icon('<rect x="2.5" y="5" width="19" height="14" rx="4"/><path d="M10 9.2l5 2.8-5 2.8z" fill="currentColor"/>'),
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/PowerTheAsset',
    svg: icon('<path d="M4 4l11.6 16H20L8.4 4z"/><path d="M20 4l-6.6 7.3M4 20l6.6-7.3"/>'),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/powertheasset/',
    svg: icon('<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.4" cy="6.6" r="0.9" fill="currentColor"/>'),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@powertheasset',
    svg: icon('<path d="M14 3v11.5a4 4 0 1 1-4-4"/><path d="M14 3c0.4 2.6 2.3 4.4 5 4.6"/>'),
  },
];

const assetStoreUrl = 'https://tinyurl.com/PowerUnity';
const assetStoreIcon = icon('<path d="M5 8h14l-1.2 12H6.2z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>');

const socialRow = (className) =>
  `<div class="${className}">` +
  socialLinks
    .map((link) => `<a href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${link.label}" title="${link.label}">${link.svg}</a>`)
    .join('') +
  `</div>`;

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
      // Link previews (Open Graph / Twitter cards): forums, Discord and chat show this image under a docs link
      image: 'img/power-social-card.png',
      metadata: [
        {name: 'description', content: 'Power is a data-driven stat and effect system for Unity: build gameplay mechanics by connecting assets, and let an AI agent build them with you.'},
        {name: 'twitter:card', content: 'summary_large_image'},
      ],
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
          {
            type: 'html',
            position: 'right',
            value: `<a class="navbar-asset-store" href="${assetStoreUrl}" target="_blank" rel="noopener noreferrer">${assetStoreIcon}<span>Asset Store</span></a>`,
          },
          {
            type: 'html',
            position: 'right',
            value: socialRow('navbar-social'),
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Power',
            items: [
              {
                html: `<a class="footer__link-item footer-icon-link" href="${assetStoreUrl}" target="_blank" rel="noopener noreferrer">${assetStoreIcon}<span>Unity Asset Store</span></a>`,
              },
            ],
          },
          {
            title: 'Follow',
            items: socialLinks.map((link) => ({
              html: `<a class="footer__link-item footer-icon-link" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.svg}<span>${link.label}</span></a>`,
            })),
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Power.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;