<template>
  <div>
    <!-- Page hero -->
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Quiénes Somos</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Conoce la historia y los valores detrás de Terra Orgánico</p>
    </section>

    <!-- Story -->
    <section class="py-20 px-4">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="section-title">Nuestra Historia</h2>
          <p class="text-dark/70 leading-relaxed mb-4">
            Terra Orgánico nació de una convicción simple: <strong>la alimentación sana es un derecho, no un lujo.</strong>
            Comenzamos como un pequeño proyecto familiar con un huerto en el patio, y hoy entregamos productos frescos y
            orgánicos a decenas de familias en toda el área metropolitana.
          </p>
          <p class="text-dark/70 leading-relaxed mb-4">
            Trabajamos directamente con agricultores locales que comparten nuestra filosofía: cultivar sin químicos,
            respetar los ciclos naturales y cuidar la tierra para las próximas generaciones.
          </p>
          <p class="text-dark/70 leading-relaxed">
            Nuestra promesa es simple: <em>de la tierra a su hogar</em>, con frescura, confianza y amor.
          </p>
        </div>
        <div class="rounded-2xl bg-primary/10 h-72 flex items-center justify-center">
          <div class="text-center text-primary/40">
            <UIcon name="heroicons:photo" class="w-16 h-16 mx-auto mb-3" />
            <p class="text-sm">Foto del equipo / huerto</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 px-4 bg-primary/5">
      <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="card border-l-4 border-primary">
          <h3 class="font-heading text-2xl font-bold text-primary mb-3">Misión</h3>
          <p class="text-dark/70 leading-relaxed">
            Brindar a las familias costarricenses acceso fácil a productos orgánicos frescos y de calidad,
            fortaleciendo el vínculo entre el productor local y el consumidor consciente.
          </p>
        </div>
        <div class="card border-l-4 border-accent">
          <h3 class="font-heading text-2xl font-bold text-accent mb-3">Visión</h3>
          <p class="text-dark/70 leading-relaxed">
            Ser la red de distribución de alimentos orgánicos más confiable del país, promoviendo un estilo de vida
            saludable y un modelo agrícola sostenible para Costa Rica.
          </p>
        </div>
      </div>
    </section>

    <!-- Values -->
    <section class="py-20 px-4">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="section-title">Nuestros Valores</h2>
        <p class="section-subtitle">Los principios que guían cada decisión que tomamos</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="val in values" :key="val.title" class="card text-center">
            <div class="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" :class="val.bg">
              <UIcon :name="val.icon" class="w-6 h-6" :style="{ color: val.color }" />
            </div>
            <h4 class="font-heading font-bold text-lg text-dark mb-2">{{ val.title }}</h4>
            <p class="text-sm text-dark/60 leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const values = [
  {
    icon: 'heroicons:globe-alt',
    title: 'Naturaleza',
    desc: 'Cultivamos respetando los ciclos naturales y cuidando el suelo para generaciones futuras.',
    bg: 'bg-green-100',
    color: '#2D6A2D',
  },
  {
    icon: 'heroicons:heart',
    title: 'Salud',
    desc: 'Alimentos libres de químicos para el bienestar de su familia y la nuestra.',
    bg: 'bg-red-100',
    color: '#e55050',
  },
  {
    icon: 'heroicons:users',
    title: 'Comunidad',
    desc: 'Apoyamos al productor local y construimos relaciones de largo plazo con nuestros clientes.',
    bg: 'bg-amber-100',
    color: '#8B5E3C',
  },
  {
    icon: 'heroicons:shield-check',
    title: 'Confianza',
    desc: 'Transparencia en cada proceso, desde la siembra hasta la entrega en su puerta.',
    bg: 'bg-blue-100',
    color: '#3b5f9b',
  },
]
</script>
