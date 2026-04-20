<template>
  <header class="sticky top-0 z-50 bg-primary/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3">
        <img src="/logo.webp" alt="Terra Orgánico" class="h-10 w-10 object-cover" />
        <span class="text-white font-heading font-bold text-xl leading-tight sm:block">
          Terra Orgánico
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden lg:flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150"
          active-class="text-white bg-white/20"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
        @click="menuOpen = !menuOpen"
        aria-label="Menú"
      >
        <UIcon :name="menuOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="menuOpen" class="lg:hidden bg-primary border-t border-white/10 px-4 pb-4">
        <nav class="flex flex-col gap-1 pt-2">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors"
            active-class="text-white bg-white/20"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const links = [
  { to: '/',                     label: 'Inicio' },
  { to: '/quienes-somos',        label: 'Quiénes somos' },
  { to: '/productos',            label: 'Productos' },
  { to: '/testimonios',          label: 'Testimonios' },
  { to: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
  { to: '/glosario',             label: 'Glosario' },
  { to: '/costos-envio',         label: 'Envíos' },
  { to: '/lista-precios',        label: 'Precios' },
]
</script>
