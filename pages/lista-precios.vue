<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Lista de Precios</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Precios vigentes — actualizados semanalmente</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-4xl mx-auto space-y-10">

        <!-- Controls -->
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div class="flex flex-wrap gap-2">
            <button
              v-for="cat in categories"
              :key="cat"
              @click="activeCategory = cat"
              :class="[
                'px-4 py-1.5 rounded-full text-sm font-semibold transition-colors',
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white/60 text-dark border border-primary/20 hover:bg-primary/10'
              ]"
            >
              {{ cat }}
            </button>
          </div>
        </div>

        <!-- Price table -->
        <div
          v-for="cat in visibleCategories"
          :key="cat"
          class="card p-0 overflow-hidden"
        >
          <div class="bg-primary px-6 py-3">
            <h3 class="font-heading font-bold text-white text-lg">{{ cat }}</h3>
          </div>
          <table class="w-full text-sm">
            <thead>
              <tr class="border-b border-primary/10 bg-primary/5">
                <th class="text-left px-6 py-3 font-semibold text-dark/60">Producto</th>
                <th class="text-left px-6 py-3 font-semibold text-dark/60">Presentación</th>
                <th class="text-right px-6 py-3 font-semibold text-dark/60">Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, i) in groupedPrices[cat]"
                :key="item.name"
                :class="i % 2 === 0 ? 'bg-white/40' : 'bg-white/10'"
                class="border-b border-primary/5 last:border-0"
              >
                <td class="px-6 py-3 font-medium text-dark">{{ item.name }}</td>
                <td class="px-6 py-3 text-dark/60">{{ item.unit }}</td>
                <td class="px-6 py-3 text-right font-bold text-accent">{{ item.price }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p class="text-center text-dark/40 mt-4">
          * Precios en colones costarricenses (₡). Sujetos a cambio sin previo aviso según disponibilidad.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const prices = [
  { category: 'Verduras',  name: 'Tomates Cherry',      unit: '1 libra',    price: '₡1,200' },
  { category: 'Verduras',  name: 'Lechuga Romana',      unit: '1 unidad',   price: '₡800'   },
  { category: 'Verduras',  name: 'Zanahorias Baby',     unit: '1 libra',    price: '₡900'   },
  { category: 'Verduras',  name: 'Espinaca Orgánica',   unit: '1 atado',    price: '₡1,100' },
  { category: 'Verduras',  name: 'Pepino',              unit: '1 unidad',   price: '₡600'   },
  { category: 'Verduras',  name: 'Brócoli',             unit: '1 unidad',   price: '₡1,300' },
  { category: 'Verduras',  name: 'Pimiento Rojo',       unit: '1 unidad',   price: '₡700'   },
  { category: 'Verduras',  name: 'Cebolla Morada',      unit: '1 libra',    price: '₡900'   },
  { category: 'Frutas',    name: 'Manzanas Fuji',       unit: '1 libra',    price: '₡1,500' },
  { category: 'Frutas',    name: 'Bananos Orgánicos',   unit: '1 racimo',   price: '₡700'   },
  { category: 'Frutas',    name: 'Fresas',              unit: '1 caja',     price: '₡2,000' },
  { category: 'Frutas',    name: 'Piña',                unit: '1 unidad',   price: '₡1,000' },
  { category: 'Frutas',    name: 'Papaya Hawaiana',     unit: '1 unidad',   price: '₡1,200' },
  { category: 'Lácteos',   name: 'Queso Turrialba',    unit: '250 g',      price: '₡3,500' },
  { category: 'Lácteos',   name: 'Yogur Natural',       unit: '500 ml',     price: '₡2,200' },
  { category: 'Lácteos',   name: 'Crema Dulce',         unit: '250 ml',     price: '₡1,500' },
  { category: 'Granos',    name: 'Arroz Integral',      unit: '1 kg',       price: '₡1,800' },
  { category: 'Granos',    name: 'Frijoles Negros',     unit: '1 kg',       price: '₡1,500' },
  { category: 'Granos',    name: 'Lentejas Rojas',      unit: '500 g',      price: '₡1,200' },
  { category: 'Otros',     name: 'Granola Artesanal',   unit: '300 g',      price: '₡2,500' },
  { category: 'Otros',     name: 'Miel Pura',           unit: '350 ml',     price: '₡3,000' },
  { category: 'Otros',     name: 'Aceite de Coco',      unit: '250 ml',     price: '₡4,500' },
  { category: 'Otros',     name: 'Semillas de Chía',    unit: '200 g',      price: '₡2,000' },
]

const categories = ['Todos', 'Verduras', 'Frutas', 'Lácteos', 'Granos', 'Otros']
const activeCategory = ref('Todos')

const visibleCategories = computed(() => {
  if (activeCategory.value === 'Todos') return ['Verduras', 'Frutas', 'Lácteos', 'Granos', 'Otros']
  return [activeCategory.value]
})

const groupedPrices = computed(() => {
  const grouped = {}
  for (const item of prices) {
    if (!grouped[item.category]) grouped[item.category] = []
    grouped[item.category].push(item)
  }
  return grouped
})

function printPage() {
  window.print()
}
</script>

<style>
@media print {
  header, footer, button, .page-hero + * > .flex { display: none !important; }
  body { background: white; }
  .card { border: 1px solid #ccc; box-shadow: none; }
}
</style>
