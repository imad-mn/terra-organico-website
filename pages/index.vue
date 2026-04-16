<template>
  <div>
    <!-- Hero con foto de fondo -->
    <section class="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden">
      <!-- Foto de fondo -->
      <img
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80"
        alt="Verduras frescas orgánicas"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <!-- Overlay verde -->
      <div class="absolute inset-0" style="background: linear-gradient(135deg, rgba(26,74,26,0.82) 0%, rgba(45,106,45,0.75) 50%, rgba(74,124,63,0.70) 100%)"></div>

      <div class="relative z-10 px-4 max-w-3xl mx-auto">
        <img src="/logo.png" alt="Terra Orgánico" class="h-24 w-24 mx-auto rounded-full object-cover shadow-2xl mb-6 border-4 border-white/30" />
        <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight drop-shadow-lg">
          Terra Orgánico
        </h1>
        <p class="text-2xl md:text-3xl text-white/90 mb-3 font-light" style="font-family: 'Nunito', sans-serif;">
          De la tierra a su hogar 🌱
        </p>
        <p class="text-white mb-10 max-w-3xl mx-auto text-lg leading-relaxed" style="text-shadow: 0 1px 6px rgba(0,0,0,0.55)">
          Verduras, frutas y más, entregados fresquecitos directo a tu puerta.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <NuxtLink to="/productos" class="btn-primary text-base shadow-lg">Ver Productos</NuxtLink>
          <NuxtLink to="/lista-precios" class="border-2 border-white/50 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/15 transition-colors duration-200 text-base backdrop-blur-sm">
            Lista de Precios
          </NuxtLink>
        </div>
      </div>

      <!-- Wave bottom -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#E8E0C8"/>
        </svg>
      </div>
    </section>

    <!-- Por qué somos diferentes -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="section-title">¿Por qué somos diferentes?</h2>
        <p class="section-subtitle">Porque la comida buena empieza desde la raíz</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="feat in features" :key="feat.title" class="card text-center hover:shadow-md transition-shadow">
            <div class="text-4xl mb-4">{{ feat.emoji }}</div>
            <h3 class="font-heading text-xl font-bold text-primary mb-2">{{ feat.title }}</h3>
            <p class="text-dark/70 text-sm leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Foto intermedia tipo lifestyle -->
    <section class="relative h-64 md:h-80 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1600&q=80"
        alt="Mercado de frutas y verduras"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-primary/40 flex items-center justify-center">
        <p class="text-white text-2xl md:text-4xl font-heading font-bold text-center drop-shadow-lg px-4">
          "Fresco de verdad, no de nevera" 🥬
        </p>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="relative py-30 px-4 text-center text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1600&q=80"
        alt="Frutas y verduras frescas"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-accent/80"></div>
      <div class="relative z-10">
        <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">¿Listo para pedir?</h2>
        <p class="text-white/85 mb-8 max-w-xl mx-auto text-lg">Mirá los precios, y escríbenos para guiarte en el proceso de pedido!</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/lista-precios" class="bg-white text-accent font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors shadow-lg">
            Ver Lista de Precios
          </NuxtLink>
          <a href="https://wa.me/50686394271" target="_blank" rel="noopener" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/15 transition-colors flex items-center justify-center gap-2 backdrop-blur-sm">
            <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />Realizar el proceso de Pedido
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    emoji: '🌿',
    title: '100% Orgánico',
    desc: 'Sin pesticidas, sin químicos raros. Solo tierra, agua y mucho amor por lo natural.',
  },
  {
    emoji: '☀️',
    title: 'Recién cosechado',
    desc: 'Cosechamos y entregamos en el mismo ciclo para que llegue a tu mesa en su punto perfecto.',
  },
  {
    emoji: '🏠',
    title: 'Te lo llevamos',
    desc: 'Directo a tu puerta, sin que tengas que salir. Solo pedís por nuestra App y listo.',
  },
]
</script>
