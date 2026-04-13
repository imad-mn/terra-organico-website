export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  modules: ['@nuxt/ui'],
  nitro: {
    prerender: {
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
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      htmlAttrs: { lang: 'es' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Terra Orgánico',
      meta: [
        {
          name: 'description',
          content: 'Terra Orgánico — Productos orgánicos frescos, de la tierra a su hogar.',
        },
      ],
      link: [
        { rel: 'icon', href: '/logo.png', type: 'image/png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Lato:wght@300;400;700&display=swap',
        },
      ],
    },
  },
})
