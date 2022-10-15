// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Bondrs',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'Coming soon...' },
        { name: 'msapplication-TileColor', content: '#9f00a7' },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:image', content: '/bondrs-og.jpg' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#5bbad5' },
      ],
    }
  },

  css: [
    '@/assets/scss/styles.scss'
  ],
})
