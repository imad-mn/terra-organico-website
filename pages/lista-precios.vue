<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Lista de Precios</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Precios vigentes — actualizados semanalmente</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-4xl mx-auto space-y-6">
        <!-- Price table -->
        <div
          v-for="cat in categories"
          :key="cat"
          class="card p-0 overflow-hidden"
        >
          <div class="bg-primary px-3 py-3">
            <h3 class="font-heading font-bold text-white text-lg">{{ cat }}</h3>
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-primary/10 bg-primary/5">
                <th class="text-left px-3 py-3 font-semibold text-dark/60">Producto</th>
                <th class="text-left px-3 py-3 font-semibold text-dark/60">Presentación</th>
                <th class="text-right px-3 py-3 font-semibold text-dark/60">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in products.filter(p => p.tipo === cat)"
                :key="item.nombre"
                :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/10'"
                class="border-b border-primary/5 last:border-0"
              >
                <td class="px-3 py-3 font-medium text-dark">{{ item.nombre }}</td>
                <td class="px-3 py-3 text-dark/60">{{ item.presentacion }}</td>
                <td class="px-3 py-3 text-right font-bold text-accent">₡{{ item.precio }}</td>
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
import { ref, computed } from 'vue'
import { obtenerCategorias, obtenerProductos, type Producto } from '~/serviciosAPI';

const products = ref<Producto[]>([]);
const categories = ref<string[]>([]);

onMounted(async () => {
  products.value = (await obtenerProductos()).sort((a, b) => a.nombre.localeCompare(b.nombre));
  categories.value = await obtenerCategorias();
});
</script>