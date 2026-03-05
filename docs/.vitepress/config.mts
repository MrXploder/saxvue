import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SaxVue',
  description: 'Vue 3 UI Framework Components',
  base: '/saxvue/',

  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
    ['link', { href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css', rel: 'stylesheet' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1, shrink-to-fit=no' }],
    ['meta', { property: 'og:title', content: 'SaxVue - Vue 3 UI Framework' }],
    ['meta', { property: 'og:description', content: 'Framework Components for Vue 3' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'SaxVue',

    nav: [
      {
        text: 'Guide',
        link: '/docs/guide/',
        activeMatch: '/docs/guide/',
      },
      {
        text: 'Documentation',
        activeMatch: '/docs/',
        items: [
          {
            text: 'Theme',
            items: [
              { text: 'Color', link: '/docs/theme/' },
            ],
          },
          {
            text: 'Layout',
            items: [
              { text: 'Grid', link: '/docs/layout/' },
            ],
          },
          {
            text: 'Components',
            items: [
              { text: 'Button', link: '/docs/components/' },
              { text: 'Alert', link: '/docs/components/Alert' },
              { text: 'Loading', link: '/docs/components/Loading' },
              { text: 'Input', link: '/docs/components/Input' },
              { text: 'Checkbox', link: '/docs/components/Checkbox' },
              { text: 'Switch', link: '/docs/components/Switch' },
              { text: 'Select', link: '/docs/components/Select' },
              { text: 'Avatar', link: '/docs/components/Avatar' },
              { text: 'Notification', link: '/docs/components/Notification' },
              { text: 'Radio', link: '/docs/components/Radio' },
              { text: 'Tooltip', link: '/docs/components/Tooltip' },
              { text: 'Dialog', link: '/docs/components/Dialog' },
              { text: 'Pagination', link: '/docs/components/Pagination' },
              { text: 'Table', link: '/docs/components/Table' },
              { text: 'Navbar', link: '/docs/components/Navbar' },
              { text: 'Sidebar', link: '/docs/components/Sidebar' },
              { text: 'Card', link: '/docs/components/Card' },
            ],
          },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          {
            text: 'Social',
            items: [
              { text: 'GitHub', link: 'https://github.com/MrXploder/saxvue' },
            ],
          },
          {
            text: 'Help',
            items: [
              { text: 'Issues', link: 'https://github.com/MrXploder/saxvue/issues' },
              { text: 'Latest Releases', link: 'https://github.com/MrXploder/saxvue/releases' },
            ],
          },
        ],
      },
    ],

    sidebar: {
      '/docs/': [
        {
          text: 'Guide',
          collapsed: false,
          items: [
            { text: 'Introduction', link: '/docs/guide/' },
            { text: 'Getting Started', link: '/docs/guide/gettingStarted' },
            { text: 'Configuration', link: '/docs/guide/configuration' },
            { text: 'Nuxt', link: '/docs/guide/nuxt' },
          ],
        },
        {
          text: 'Theme',
          collapsed: false,
          items: [
            { text: 'Color', link: '/docs/theme/' },
          ],
        },
        {
          text: 'Components',
          collapsed: false,
          items: [
            { text: 'Button', link: '/docs/components/' },
            { text: 'Alert', link: '/docs/components/Alert' },
            { text: 'Loading', link: '/docs/components/Loading' },
            { text: 'Input', link: '/docs/components/Input' },
            { text: 'Checkbox', link: '/docs/components/Checkbox' },
            { text: 'Switch', link: '/docs/components/Switch' },
            { text: 'Select', link: '/docs/components/Select' },
            { text: 'Avatar', link: '/docs/components/Avatar' },
            { text: 'Notification', link: '/docs/components/Notification' },
            { text: 'Radio', link: '/docs/components/Radio' },
            { text: 'Tooltip', link: '/docs/components/Tooltip' },
            { text: 'Dialog', link: '/docs/components/Dialog' },
            { text: 'Pagination', link: '/docs/components/Pagination' },
            { text: 'Table', link: '/docs/components/Table' },
            { text: 'Navbar', link: '/docs/components/Navbar' },
            { text: 'Sidebar', link: '/docs/components/Sidebar' },
            { text: 'Card', link: '/docs/components/Card' },
          ],
        },
        {
          text: 'Layout',
          collapsed: false,
          items: [
            { text: 'Grid', link: '/docs/layout/' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/MrXploder/saxvue' },
    ],

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/MrXploder/saxvue/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },

  vite: {
    ssr: {
      noExternal: ['@mrxploder/saxvue'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
        },
        sass: {
          api: 'modern',
        },
      },
    },
  },
})
