<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Lista de Precios</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Precios vigentes — actualizados semanalmente</p>
    </section>

    <section class="py-8 px-3">
      <div class="max-w-xl mx-auto space-y-6">
        <!-- Price table -->
        <div
          v-for="cat in categories"
          :key="cat"
          class="card !px-3 overflow-hidden"
        >
          <div class="bg-primary px-3 py-3">
            <h3 class="font-heading font-bold text-white text-lg">{{ cat }}</h3>
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-primary/10 bg-primary/5">
                <th class="text-left px-2 py-3 font-semibold text-dark/60">Producto</th>
                <th class="text-left px-2 py-3 font-semibold text-dark/60">Presentación</th>
                <th class="text-right px-2 py-3 font-semibold text-dark/60">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in products.filter(p => p.tipo === cat)"
                :key="item.nombre"
                :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/10'"
                class="border-b border-primary/5 last:border-0"
              >
                <td class="px-2 py-3 font-medium text-dark">{{ item.nombre }}</td>
                <td class="px-2 py-3 text-dark/60">{{ item.presentacion }}</td>
                <td class="px-2 py-3 text-right font-bold text-accent">₡{{ item.precio }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-center text-dark/40 mt-4">
          Sujetos a cambio sin previo aviso según disponibilidad.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { obtenerCategorias, obtenerProductos, type Producto } from '~/serviciosAPI';

useSeoMeta({
  title: 'Lista de Precios - Terra Orgánico',
  ogTitle: 'Precios de productos orgánicos frescos',
  description: 'Consulta la lista de precios actualizada semanalmente de todos los productos orgánicos frescos de Terra Orgánico. Verduras, frutas y más.',
  ogDescription: 'Precios de verduras y frutas orgánicas frescas en Terra Orgánico, actualizados semanalmente.',
  ogImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
  keywords: 'precios frutas orgánicas, precios verduras Costa Rica, lista de precios productos frescos',
})

const products = ref<Producto[]>([]);
const categories = ref<string[]>([]);

onMounted(async () => {
  products.value = ((await obtenerProductos()).filter(p => p.habilitado)).sort((a, b) => a.nombre.localeCompare(b.nombre));
  categories.value = (await obtenerCategorias()).filter(c => c !== 'Otros');
});
</script>