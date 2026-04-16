<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Global Schema.org configuration for structured data
useHead({
  meta: [
    { name: 'theme-color', content: '#2D6A2D' },
    { name: 'apple-mobile-web-app-capable', content: 'yes' },
    { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
  ],
  link: [
    { rel: 'canonical', href: 'https://terraorganico.com' },
    { rel: 'alternate', hrefLang: 'es', href: 'https://terraorganico.com' },
  ]
})
</script>
