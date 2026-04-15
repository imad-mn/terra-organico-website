<template>
  <div>
    <!-- Hero con foto -->
    <section class="relative py-18 px-4 text-center text-white overflow-hidden">
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

    <section class="py-16 px-4">
      <div class="max-w-6xl mx-auto">
        <!-- Category tabs -->
        <div class="flex flex-wrap gap-2 justify-center mb-12">
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

        <!-- Product grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            v-for="prod in filteredProducts"
            :key="prod.name"
            class="card hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden !p-0"
          >
            <!-- Foto del producto -->
            <div class="h-48 overflow-hidden rounded-t-2xl">
              <img
                :src="prod.img"
                :alt="prod.name"
                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="p-5">
              <div class="flex items-start justify-between mb-2">
                <h3 class="font-heading font-bold text-lg text-dark">{{ prod.name }}</h3>
                <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium shrink-0 ml-2">{{ prod.category }}</span>
              </div>
              <p class="text-sm text-dark/60 mb-3 leading-relaxed">{{ prod.desc }}</p>
              <p class="text-accent font-bold text-lg">{{ prod.price }}</p>
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

<script setup>
import { ref, computed } from 'vue'

const products = [
  {
    name: 'Tomates Cherry',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=500&q=80',
    desc: 'Dulces y jugosos. Ideales para ensaladas, pastas o comerlos así nomás.',
    price: '₡1,200/libra',
  },
  {
    name: 'Lechuga Romana',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=500&q=80',
    desc: 'Crujiente y fresquísima, perfecta para ensaladas y wraps.',
    price: '₡800/unidad',
  },
  {
    name: 'Zanahorias Baby',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=500&q=80',
    desc: 'Tiernas y ricas en betacaroteno, excelentes para snacks o jugos.',
    price: '₡900/libra',
  },
  {
    name: 'Espinaca Orgánica',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=500&q=80',
    desc: 'Rica en hierro y antioxidantes. Ideal para jugos verdes y sopas.',
    price: '₡1,100/atado',
  },
  {
    name: 'Pepino',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=500&q=80',
    desc: 'Refrescante y bajo en calorías, perfecto para ensaladas del mediodía.',
    price: '₡600/unidad',
  },
  {
    name: 'Brócoli',
    category: 'Verduras',
    img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=500&q=80',
    desc: 'Lleno de vitaminas. Lo cosechamos justo cuando está en su mejor momento.',
    price: '₡1,300/unidad',
  },
  {
    name: 'Manzanas Fuji',
    category: 'Frutas',
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80',
    desc: 'Crujientes y dulces. Importadas y certificadas orgánicas.',
    price: '₡1,500/libra',
  },
  {
    name: 'Bananos Orgánicos',
    category: 'Frutas',
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=80',
    desc: 'De finca local, maduros al natural sin etileno ni apuros.',
    price: '₡700/racimo',
  },
  {
    name: 'Fresas',
    category: 'Frutas',
    img: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=500&q=80',
    desc: 'Dulces y aromáticas. Perfectas para postres, jugos o darte un gustito.',
    price: '₡2,000/caja',
  },
  {
    name: 'Piña',
    category: 'Frutas',
    img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=80',
    desc: 'Tropical y refrescante. Sin azúcares añadidos, pura naturaleza.',
    price: '₡1,000/unidad',
  },
  {
    name: 'Queso Turrialba',
    category: 'Lácteos',
    img: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?auto=format&fit=crop&w=500&q=80',
    desc: 'Queso artesanal de leche orgánica, directo de la región de Turrialba.',
    price: '₡3,500/250g',
  },
  {
    name: 'Yogur Natural',
    category: 'Lácteos',
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=500&q=80',
    desc: 'Sin colorantes ni conservantes. Fermentación natural, sabor real.',
    price: '₡2,200/500ml',
  },
  {
    name: 'Arroz Integral',
    category: 'Granos',
    img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=500&q=80',
    desc: 'Grano entero, rico en fibra y minerales. El arroz de verdad.',
    price: '₡1,800/kg',
  },
  {
    name: 'Frijoles Negros',
    category: 'Granos',
    img: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=500&q=80',
    desc: 'Cultivados localmente sin fertilizantes químicos. Sabor auténtico.',
    price: '₡1,500/kg',
  },
  {
    name: 'Granola Artesanal',
    category: 'Otros',
    img: 'https://images.unsplash.com/photo-1517093602195-b40af9688b5e?auto=format&fit=crop&w=500&q=80',
    desc: 'Avena, miel orgánica, semillas y frutas deshidratadas. Hecha con amor.',
    price: '₡2,500/300g',
  },
  {
    name: 'Miel Pura',
    category: 'Otros',
    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=500&q=80',
    desc: 'Miel de abeja sin procesar, de apiarios locales certificados. Riquísima.',
    price: '₡3,000/350ml',
  },
]

const categories = ['Todos', 'Verduras', 'Frutas', 'Lácteos', 'Granos', 'Otros']
const activeCategory = ref('Todos')

const filteredProducts = computed(() =>
  activeCategory.value === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory.value)
)
</script>
