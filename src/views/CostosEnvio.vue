<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Costos de Envío</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Días de entrega y tarifas por zona</p>
    </section>

    <section class="py-20 px-4">
      <div class="max-w-4xl mx-auto space-y-12">

        <!-- Info callout -->
        <div class="card border-l-4 border-primary flex gap-4">
          <i class="pi pi-info-circle text-2xl text-primary flex-shrink-0 mt-0.5"></i>
          <div>
            <h3 class="font-semibold text-dark mb-1">Fecha límite de pedidos</h3>
            <p class="text-dark/70 text-sm leading-relaxed">
              Los pedidos deben realizarse con <strong>48 horas de anticipación</strong> antes del día de entrega de su zona.
              Pedidos recibidos fuera de este plazo quedarán programados para el siguiente ciclo de entrega.
            </p>
          </div>
        </div>

        <!-- Delivery table -->
        <div class="card overflow-x-auto p-0">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-primary text-white">
                <th class="text-left px-6 py-4 font-semibold rounded-tl-2xl">Zona / Cantón</th>
                <th class="text-left px-6 py-4 font-semibold">Día de Entrega</th>
                <th class="text-left px-6 py-4 font-semibold">Días Hábiles</th>
                <th class="text-left px-6 py-4 font-semibold rounded-tr-2xl">Costo de Envío</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(zone, i) in zones"
                :key="zone.name"
                :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/20'"
                class="border-b border-primary/10 last:border-0"
              >
                <td class="px-6 py-4 font-medium text-dark">{{ zone.name }}</td>
                <td class="px-6 py-4 text-dark/70">{{ zone.day }}</td>
                <td class="px-6 py-4 text-dark/70">{{ zone.days }}</td>
                <td class="px-6 py-4">
                  <span :class="zone.free ? 'text-primary font-bold' : 'text-accent font-semibold'">
                    {{ zone.cost }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Additional notes -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="card">
            <h4 class="font-heading font-bold text-primary mb-3 flex items-center gap-2">
              <i class="pi pi-truck"></i> Envío Gratis
            </h4>
            <p class="text-dark/70 text-sm leading-relaxed">
              Pedidos superiores a <strong>₡15,000</strong> tienen envío gratis en todas las zonas de la Gran Área Metropolitana.
            </p>
          </div>
          <div class="card">
            <h4 class="font-heading font-bold text-accent mb-3 flex items-center gap-2">
              <i class="pi pi-map-marker"></i> Otras Zonas
            </h4>
            <p class="text-dark/70 text-sm leading-relaxed">
              Si su zona no aparece en la lista, escríbanos por WhatsApp. Evaluamos rutas especiales con tarifa personalizada.
            </p>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
const zones = [
  { name: 'San José Centro',    day: 'Martes y Viernes',  days: '1–2 días hábiles', cost: 'GRATIS',   free: true  },
  { name: 'Escazú / Santa Ana', day: 'Miércoles',         days: '2 días hábiles',   cost: '₡500',     free: false },
  { name: 'Heredia Centro',     day: 'Martes',            days: '1–2 días hábiles', cost: 'GRATIS',   free: true  },
  { name: 'San Pablo / Barva',  day: 'Jueves',            days: '2 días hábiles',   cost: '₡500',     free: false },
  { name: 'Alajuela Centro',    day: 'Miércoles',         days: '2 días hábiles',   cost: 'GRATIS',   free: true  },
  { name: 'Grecia / Naranjo',   day: 'Viernes',           days: '3 días hábiles',   cost: '₡1,000',   free: false },
  { name: 'Cartago Centro',     day: 'Jueves',            days: '2 días hábiles',   cost: '₡500',     free: false },
  { name: 'Tres Ríos / La Unión',day: 'Martes',           days: '1–2 días hábiles', cost: 'GRATIS',   free: true  },
  { name: 'Desamparados',       day: 'Miércoles',         days: '2 días hábiles',   cost: '₡500',     free: false },
  { name: 'Curridabat',         day: 'Martes y Jueves',   days: '1 día hábil',      cost: 'GRATIS',   free: true  },
]
</script>
