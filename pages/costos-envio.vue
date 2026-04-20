<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Costos de Envío</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Tarifas según ruta y monto del pedido</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-3xl mx-auto space-y-8">

        <!-- Aviso toma de pedidos -->
        <h2 class="font-heading text-3xl font-bold text-dark text-center">
          La toma de pedidos son los Jueves y Viernes
        </h2>

        <!-- Ruta San José -->
        <div>
          <h2 class="font-heading text-2xl font-bold text-primary mb-2 flex items-center gap-2">
            <UIcon name="heroicons:truck" class="w-8 h-8 flex-shrink-0" /> Ruta San José (Entrega todos los martes)
          </h2>
          <p class="text-dark/60 mb-4">Tres Ríos, Curridabat, San Pedro, Tibás, San José Centro, Escazú, Santa Ana.</p>
          <div class="card overflow-x-auto w-md mx-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="text-left px-3 py-4 font-semibold rounded-tl-2xl">Monto del pedido</th>
                  <th class="text-left px-3 py-4 font-semibold rounded-tr-2xl">Envío</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(tier, i) in cartajoSanJose"
                  :key="i"
                  :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'"
                  class="border-b border-primary/10 last:border-0"
                >
                  <td class="px-3 py-4 text-dark/70">{{ tier.label }}</td>
                  <td class="px-3 py-4">
                    <span :class="tier.free ? 'text-primary font-bold' : 'text-accent font-semibold'">
                      {{ tier.cost }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Ruta Cartago o Desamparados -->
        <div>
          <h2 class="text-2xl font-bold text-primary mb-2 flex items-center gap-2">
            <UIcon name="heroicons:truck" class="w-8 h-8 flex-shrink-0" />
            <span>Ruta Cartago o Desamparados (Entrega martes por medio)</span>
          </h2>
          <p class="text-dark/60 mb-4">Una semana para Cartago, Paraíso y la otra para Desamparados.</p>
          <div class="card overflow-x-auto w-md mx-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="text-left px-3 py-4 font-semibold rounded-tl-2xl">Monto del pedido</th>
                  <th class="text-left px-3 py-4 font-semibold rounded-tr-2xl">Envío</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(tier, i) in cartajoSanJose"
                  :key="i"
                  :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'"
                  class="border-b border-primary/10 last:border-0"
                >
                  <td class="px-3 py-4 text-dark/70">{{ tier.label }}</td>
                  <td class="px-3 py-4">
                    <span :class="tier.free ? 'text-primary font-bold' : 'text-accent font-semibold'">
                      {{ tier.cost }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- Ruta Heredia -->
        <div>
          <h2 class="font-heading text-2xl font-bold text-primary mb-2 flex items-center gap-2">
            <UIcon name="heroicons:truck" class="w-8 h-8 flex-shrink-0" /> Ruta Heredia (Entrega todos los miércoles)
          </h2>
          <p class="text-dark/60 mb-4">Coronado, Moravia y Heredia.</p>
          <div class="card overflow-x-auto w-md mx-auto">
            <table class="w-full text-sm">
              <thead>
                <tr class="bg-primary text-white">
                  <th class="text-left px-3 py-4 font-semibold rounded-tl-2xl">Monto del pedido</th>
                  <th class="text-left px-3 py-4 font-semibold rounded-tr-2xl">Envío</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(tier, i) in heredia"
                  :key="i"
                  :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'"
                  class="border-b border-primary/10 last:border-0"
                >
                  <td class="px-3 py-4 text-dark/70">{{ tier.label }}</td>
                  <td class="px-3 py-4">
                    <span :class="tier.free ? 'text-primary font-bold' : 'text-accent font-semibold'">
                      {{ tier.cost }}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Costos de Envío - Terra Orgánico',
  ogTitle: 'Tarifas de envío por ruta y monto',
  description: 'Consulta los costos de envío de Terra Orgánico según tu ubicación en Costa Rica: San José, Cartago, Desamparados y Heredia. Entregas programadas con tarifas fijas.',
  ogDescription: 'Conoce las tarifas de envío de Terra Orgánico según tu zona y monto de pedido en Costa Rica.',
  ogImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
})

const cartajoSanJose = [
  { label: 'Pedido menor a ₡7,000',                  cost: '₡2,000', free: false },
  { label: 'Pedido mayor a ₡7,000',                  cost: '₡1,000', free: false },
  { label: 'Pedido mayor a ₡14,000',                 cost: '₡500',   free: false },
  { label: 'Pedido mayor a ₡25,000',                 cost: 'GRATIS', free: true  },
]

const heredia = [
  { label: 'Pedido menor a ₡10,000',                 cost: '₡2,000', free: false },
  { label: 'Pedido mayor a ₡10,000',                 cost: '₡1,000', free: false },
  { label: 'Pedido mayor a ₡20,000',                 cost: '₡500',   free: false },
  { label: 'Pedido mayor a ₡30,000',                 cost: 'GRATIS', free: true  },
]
</script>
