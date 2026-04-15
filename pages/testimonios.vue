<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Testimonios</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Lo que dicen nuestros clientes</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(t, i) in testimonios"
            :key="i"
            class="card flex flex-col gap-4"
          >
            <blockquote class="font-heading text-lg italic text-dark/80 leading-relaxed flex-1">
              "{{ t.quote }}"
            </blockquote>
            <div class="border-t border-primary/10 pt-3">
              <p class="font-semibold text-dark">{{ t.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-primary/5 py-12 px-4 text-center">
      <h3 class="font-heading text-2xl font-bold text-primary mb-3">¿Ya es cliente?</h3>
      <p class="text-dark/60 mb-6">Comparta su experiencia con nosotros por WhatsApp.</p>
      <a href="https://wa.me/50686394271" target="_blank" rel="noopener" class="btn-primary">
        <div class="inline-flex items-center gap-2">
          <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />
          <span>Enviar mi testimonio</span>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup>
const testimonios = [
  {
    quote: 'Desde que empecé a pedir con Terra Orgánico, noto la diferencia en el sabor y la frescura. ¡Los tomates parecen recién cosechados!',
    name: 'María González',
    location: 'San José',
  },
  {
    quote: 'Me encanta que puedo pedir por WhatsApp y me llegan los productos directamente a casa. Súper práctico y siempre frescos.',
    name: 'Carlos Méndez',
    location: 'Heredia',
  },
  {
    quote: 'La calidad es incomparable. Mis hijos ahora comen más vegetales porque se notan más sabrosos que los del supermercado.',
    name: 'Sofía Ramírez',
    location: 'Alajuela',
  },
  {
    quote: 'Excelente servicio y puntualidad. Siempre llegan el día prometido y en perfectas condiciones. Muy recomendado.',
    name: 'Andrés Solano',
    location: 'Cartago',
  },
  {
    quote: 'El queso Turrialba y la miel son mis favoritos. Productos artesanales de verdad, se nota la diferencia con lo industrial.',
    name: 'Laura Vargas',
    location: 'Curridabat',
  },
  {
    quote: 'Me siento bien sabiendo que lo que como es orgánico y de producción local. Terra Orgánico hace ese proceso muy fácil.',
    name: 'Diego Morales',
    location: 'Santa Ana',
  },
]
</script>
