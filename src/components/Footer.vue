<template>
  <footer class="bg-dark text-white/80 mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Brand -->
      <div class="flex flex-col items-start gap-3">
        <img src="/logo.png" alt="Terra Orgánico" class="h-16 w-16 rounded-full object-cover" />
        <p class="font-heading text-lg text-white font-semibold">Terra Orgánico</p>
        <p class="text-sm italic text-white/60">De la tierra a su hogar</p>
      </div>

      <!-- Links -->
      <div>
        <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Páginas</h4>
        <ul class="space-y-2 text-sm">
          <li v-for="link in links" :key="link.to">
            <RouterLink :to="link.to" class="hover:text-white transition-colors">
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2">
            <i class="pi pi-whatsapp text-green-400"></i>
            <span>+506 0000-0000</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-envelope text-green-400"></i>
            <span>info@terraorganico.com</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-instagram text-green-400"></i>
            <span>@terraorganico</span>
          </li>
          <li class="flex items-center gap-2">
            <i class="pi pi-facebook text-green-400"></i>
            <span>Terra Orgánico</span>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 text-center text-xs text-white/40 py-4">
      © {{ new Date().getFullYear() }} Terra Orgánico. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>
const links = [
  { to: '/',                     label: 'Inicio' },
  { to: '/quienes-somos',        label: 'Quiénes Somos' },
  { to: '/productos',            label: 'Productos' },
  { to: '/testimonios',          label: 'Testimonios' },
  { to: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { to: '/costos-envio',         label: 'Costos de Envío' },
  { to: '/lista-precios',        label: 'Lista de Precios' },
]
</script>
