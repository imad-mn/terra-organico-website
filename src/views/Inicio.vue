<template>
  <div>
    <!-- Hero -->
    <section
      class="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden"
      style="background: linear-gradient(135deg, #1a4a1a 0%, #2D6A2D 50%, #4A7C3F 100%)"
    >
      <!-- Decorative circles -->
      <div class="absolute top-10 left-10 w-40 h-40 rounded-full bg-white/5 blur-xl"></div>
      <div class="absolute bottom-20 right-10 w-64 h-64 rounded-full bg-white/5 blur-2xl"></div>

      <div class="relative z-10 px-4 max-w-3xl mx-auto">
        <img src="/logo.png" alt="Terra Orgánico" class="h-28 w-28 mx-auto rounded-full object-cover shadow-2xl mb-8 border-4 border-white/20" />
        <h1 class="text-5xl md:text-7xl font-heading font-bold text-white mb-4 leading-tight">
          Terra Orgánico
        </h1>
        <p class="text-xl md:text-2xl text-white/80 mb-4 italic font-light">
          De la tierra a su hogar
        </p>
        <p class="text-white/60 mb-10 max-w-xl mx-auto text-lg">
          Productos orgánicos frescos, cultivados con amor y entregados directamente a su puerta.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/productos" class="btn-primary text-base">Ver Productos</RouterLink>
          <RouterLink to="/lista-precios" class="border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200 text-base">
            Lista de Precios
          </RouterLink>
        </div>
      </div>

      <!-- Wave bottom -->
      <div class="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 40C480 80 240 0 0 40L0 80Z" fill="#E8E0C8"/>
        </svg>
      </div>
    </section>

    <!-- Por qué elegirnos -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto text-center">
        <h2 class="section-title">¿Por qué elegirnos?</h2>
        <p class="section-subtitle">Comprometidos con su salud y la del planeta</p>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="feat in features" :key="feat.title" class="card text-center hover:shadow-md transition-shadow">
            <div class="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <i :class="feat.icon" class="text-3xl text-primary"></i>
            </div>
            <h3 class="font-heading text-xl font-bold text-primary mb-2">{{ feat.title }}</h3>
            <p class="text-dark/70 text-sm leading-relaxed">{{ feat.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Productos destacados -->
    <section class="py-16 px-4 bg-primary/5">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="section-title">Productos Destacados</h2>
          <p class="section-subtitle">Selección de lo mejor de nuestra cosecha</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="prod in featured" :key="prod.name" class="card hover:shadow-lg transition-shadow group cursor-default">
            <div class="h-36 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
              <i :class="prod.icon" class="text-5xl text-primary/60"></i>
            </div>
            <h4 class="font-semibold text-dark mb-1">{{ prod.name }}</h4>
            <p class="text-sm text-dark/60 mb-3">{{ prod.desc }}</p>
            <span class="text-accent font-bold">{{ prod.price }}</span>
          </div>
        </div>
        <div class="text-center mt-10">
          <RouterLink to="/productos" class="btn-primary">Ver todos los productos</RouterLink>
        </div>
      </div>
    </section>

    <!-- Testimonio teaser -->
    <section class="py-16 px-4">
      <div class="max-w-2xl mx-auto text-center">
        <i class="pi pi-comment text-4xl text-primary/30 mb-4"></i>
        <blockquote class="font-heading text-2xl text-dark/80 italic leading-relaxed mb-6">
          "Desde que empecé a pedir con Terra Orgánico, noto la diferencia en el sabor y la frescura. ¡Los tomates parecen recién cosechados!"
        </blockquote>
        <p class="text-dark/50 font-medium">— María González, San José</p>
        <RouterLink to="/testimonios" class="mt-6 inline-block text-primary font-semibold hover:underline">
          Leer más testimonios →
        </RouterLink>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="bg-accent py-16 px-4 text-center text-white">
      <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">¿Listo para pedir?</h2>
      <p class="text-white/80 mb-8 max-w-md mx-auto">Revise nuestra lista de precios y haga su pedido por WhatsApp.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <RouterLink to="/lista-precios" class="bg-white text-accent font-bold px-8 py-3 rounded-full hover:bg-white/90 transition-colors">
          Ver Lista de Precios
        </RouterLink>
        <a href="https://wa.me/50688532344" target="_blank" rel="noopener" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
          <i class="pi pi-whatsapp mr-2"></i>Pedir por WhatsApp
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const features = [
  {
    icon: 'pi pi-verified',
    title: '100% Orgánico',
    desc: 'Todos nuestros productos son cultivados sin pesticidas ni químicos artificiales, respetando la naturaleza.',
  },
  {
    icon: 'pi pi-sun',
    title: 'Siempre Fresco',
    desc: 'Cosechamos y entregamos en el mismo ciclo para que usted reciba los productos en su punto óptimo.',
  },
  {
    icon: 'pi pi-home',
    title: 'Entrega a Domicilio',
    desc: 'Llevamos sus productos directamente a su puerta en los días de entrega establecidos en su zona.',
  },
]

const featured = [
  { name: 'Tomates Cherry',    icon: 'pi pi-circle-fill', desc: 'Variedad orgánica dulce', price: '₡1,200/libra' },
  { name: 'Lechuga Romana',    icon: 'pi pi-align-left',  desc: 'Fresca y crujiente',      price: '₡800/unidad'  },
  { name: 'Zanahorias',        icon: 'pi pi-bolt',        desc: 'Ricas en betacaroteno',   price: '₡900/libra'   },
  { name: 'Manzanas Fuji',     icon: 'pi pi-circle',      desc: 'Importadas y orgánicas',  price: '₡1,500/libra' },
]
</script>
