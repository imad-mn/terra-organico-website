export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: ['@nuxt/ui', '@nuxtjs/seo', '@nuxt/fonts'],
  nitro: {
    prerender: {
      autoSubfolderIndex: false,
      routes: [
        '/',
        '/quienes-somos',
        '/productos',
        '/testimonios',
        '/preguntas-frecuentes',
        '/costos-envio',
        '/lista-precios',
      ],
    },
  },
  schemaOrg: {
    enabled: false
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
      title: 'Terra Orgánico',
      meta: [
        {
          name: 'description',
          content: 'Terra Orgánico — Productos libres de pesticidas y frescos, de la tierra a su hogar.',
        },
        {
          name: 'keywords',
          content: 'productos libres de pesticidas, verduras frescas, frutas orgánicas, compra online Costa Rica, delivery frutas verduras, alimentos ecológicos',
        },
        {
          name: 'author',
          content: 'Terra Orgánico',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:site_name',
          content: 'Terra Orgánico',
        },
        {
          property: 'og:locale',
          content: 'es_CR',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@terraorganico',
        },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' },
        { rel: 'apple-touch-icon', href: '/logo.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Nunito+Sans:wght@300;400;600;700&display=swap',
        },
      ],
    },
  },
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: '', // El valor se tomará de NUXT_PUBLIC_API_BASE
      imagesBase: '' // El valor se tomará de NUXT_PUBLIC_IMAGES_BASE
    }
  },
  site: {
    url: 'https://www.terraorganico.com',
    name: 'Terra Orgánico',
    description: 'Productos libres de pesticidas y frescos, de la tierra a su hogar. Deliveries en Costa Rica con variedad de frutas y verduras ecológicas.',
    defaultLocale: 'es',
  },
  ogImage: {
    enabled: false,
  },
  robots: {
    allow: '/',
    disallow: ['/admin'],
  },
  sitemap: {
    urls: async () => {
      return [
        { loc: '/', changefreq: 'monthly', priority: 1 },
        { loc: '/quienes-somos', changefreq: 'monthly', priority: 0.8 },
        { loc: '/productos', changefreq: 'weekly', priority: 0.9 },
        { loc: '/testimonios', changefreq: 'monthly', priority: 0.7 },
        { loc: '/preguntas-frecuentes', changefreq: 'monthly', priority: 0.8 },
        { loc: '/costos-envio', changefreq: 'monthly', priority: 0.7 },
        { loc: '/lista-precios', changefreq: 'weekly', priority: 0.8 },
      ];
    },
    sitemaps: {
      pages: {
        sources: ['/sitemap.xml'],
      },
    },
  },
})
