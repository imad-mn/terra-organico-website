<template>
  <div>
    <!-- Hero con foto -->
    <section class="relative py-16 px-4 text-center text-white overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1510629954389-c1e0da47d414?auto=format&fit=crop&w=1600&q=80"
        alt="Canasta de verduras orgánicas"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <div class="absolute inset-0" style="background: rgba(45,106,45,0.78)"></div>
      <div class="relative z-10">
        <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Nuestros Productos</h1>
        <p class="text-white/80 text-lg max-w-xl mx-auto">Frescos, orgánicos y cultivados con mucho cariño</p>
      </div>
    </section>

    <section class="py-10 px-2">
      <div class="max-w-7xl mx-auto">
        <!-- Category tabs -->
        <div class="flex flex-wrap gap-2 justify-center mb-4">
          <button
            v-for="cat in categories"
            :key="cat"
            @click="activeCategory = cat"
            :class="[
              'px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150',
              activeCategory === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-white/60 text-dark border border-primary/20 hover:bg-primary/10'
            ]"
          >
            {{ cat }}
          </button>
        </div>

        <!-- Search input -->
        <div class="mb-8 max-w-md mx-auto">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Buscar por nombre..."
            class="w-full px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 text-dark placeholder-dark/40"
          />
        </div>

        <!-- Product grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5">
          <div
            v-for="prod in filteredProducts"
            :key="prod.id"
            class="card hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden !p-0"
          >
            <!-- Foto del producto -->
            <div class="h-40 md:h-44 lg:h-53 overflow-hidden rounded-t-2xl">
              <img
                :src="config.public.imagesBase + '/' + prod.imagen"
                :alt="prod.nombre"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="py-2 px-4">
              <h3 class="font-heading font-bold text-lg text-dark">{{ prod.nombre }}</h3>
              <p class="text-sm text-dark/60 mb-1 leading-relaxed">{{ prod.tipo }}</p>
              <p class="text-accent font-bold text-md">₡{{ prod.precio }} / {{ prod.presentacion }}</p>
            </div>
          </div>
        </div>

        <p class="text-center text-dark/50 text-sm mt-12">
          * Disponibilidad según temporada. Consultá por WhatsApp para ver el stock del día 👇
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { obtenerCategorias, obtenerProductos, type Producto } from '~/serviciosAPI';

const config = useRuntimeConfig();
const products = ref<Producto[]>([]);
const categories = ref<string[]>([]);

onMounted(async () => {
  products.value = await obtenerProductos();
  categories.value = ['Todos', ...(await obtenerCategorias())];
});

const activeCategory = ref<string>('Todos')
const searchTerm = ref<string>('')

const filteredProducts = computed(() => {
  let filtered = activeCategory.value === 'Todos'
    ? products.value.filter(p => p.habilitado)
    : products.value.filter(p => p.habilitado && p.tipo === activeCategory.value)

  if (searchTerm.value.trim()) {
    filtered = filtered.filter(p =>
      p.nombre.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  }

  return filtered
})
</script>
