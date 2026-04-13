<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Nuestros Productos</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Frescos, orgánicos y cultivados con cuidado</p>
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
                ? 'bg-primary text-white'
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
            class="card hover:shadow-lg transition-shadow"
          >
            <div class="h-40 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <UIcon :name="prod.icon" class="w-12 h-12 text-primary/50" />
            </div>
            <div class="flex items-start justify-between mb-2">
              <h3 class="font-heading font-bold text-lg text-dark">{{ prod.name }}</h3>
              <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{{ prod.category }}</span>
            </div>
            <p class="text-sm text-dark/60 mb-3 leading-relaxed">{{ prod.desc }}</p>
            <p class="text-accent font-bold">{{ prod.price }}</p>
          </div>
        </div>

        <p class="text-center text-dark/50 text-sm mt-12">
          * Disponibilidad sujeta a temporada. Consulte por WhatsApp para stock actual.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const products = [
  { name: 'Tomates Cherry',       category: 'Verduras',  icon: 'heroicons:circle-stack',              desc: 'Dulces y jugosos. Ideales para ensaladas y pastas.',                     price: '₡1,200/libra' },
  { name: 'Lechuga Romana',       category: 'Verduras',  icon: 'heroicons:bars-3-bottom-left',        desc: 'Crujiente y fresca, perfecta para ensaladas y wraps.',                   price: '₡800/unidad'  },
  { name: 'Zanahorias Baby',      category: 'Verduras',  icon: 'heroicons:bolt',                      desc: 'Tiernas y ricas en betacaroteno, excelentes para snacks.',                price: '₡900/libra'   },
  { name: 'Espinaca Orgánica',    category: 'Verduras',  icon: 'heroicons:star',                      desc: 'Rica en hierro y antioxidantes. Ideal para jugos verdes y sopas.',        price: '₡1,100/atado' },
  { name: 'Pepino',               category: 'Verduras',  icon: 'heroicons:minus',                     desc: 'Refrescante y bajo en calorías, perfecto para ensaladas.',                price: '₡600/unidad'  },
  { name: 'Brócoli',              category: 'Verduras',  icon: 'heroicons:squares-2x2',               desc: 'Lleno de vitaminas y minerales. Cosechado en su punto.',                  price: '₡1,300/unidad'},
  { name: 'Manzanas Fuji',        category: 'Frutas',    icon: 'heroicons:ellipsis-horizontal-circle',desc: 'Crujientes y dulces. Importadas y certificadas orgánicas.',               price: '₡1,500/libra' },
  { name: 'Bananos Orgánicos',    category: 'Frutas',    icon: 'heroicons:sun',                       desc: 'De finca local, maduros al natural sin etileno.',                         price: '₡700/racimo'  },
  { name: 'Fresas',               category: 'Frutas',    icon: 'heroicons:heart',                     desc: 'Dulces y aromáticas. Perfectas para postres y jugos.',                    price: '₡2,000/caja'  },
  { name: 'Piña',                 category: 'Frutas',    icon: 'heroicons:star',                      desc: 'Tropical y refrescante. Sin azúcares añadidos.',                         price: '₡1,000/unidad'},
  { name: 'Queso Turrialba',      category: 'Lácteos',   icon: 'heroicons:cube',                      desc: 'Queso artesanal de leche orgánica de la región de Turrialba.',            price: '₡3,500/250g'  },
  { name: 'Yogur Natural',        category: 'Lácteos',   icon: 'heroicons:inbox',                     desc: 'Sin colorantes ni conservantes. Fermentación natural.',                   price: '₡2,200/500ml' },
  { name: 'Arroz Integral',       category: 'Granos',    icon: 'heroicons:server',                    desc: 'Grano entero, rico en fibra y minerales.',                               price: '₡1,800/kg'    },
  { name: 'Frijoles Negros',      category: 'Granos',    icon: 'heroicons:circle-stack',              desc: 'Cultivados localmente sin fertilizantes químicos.',                       price: '₡1,500/kg'    },
  { name: 'Granola Artesanal',    category: 'Otros',     icon: 'heroicons:adjustments-horizontal',    desc: 'Mezcla de avena, miel orgánica, semillas y frutas deshidratadas.',        price: '₡2,500/300g'  },
  { name: 'Miel Pura',            category: 'Otros',     icon: 'heroicons:sun',                       desc: 'Miel de abeja sin procesar, de apiarios locales certificados.',           price: '₡3,000/350ml' },
]

const categories = ['Todos', 'Verduras', 'Frutas', 'Lácteos', 'Granos', 'Otros']
const activeCategory = ref('Todos')

const filteredProducts = computed(() =>
  activeCategory.value === 'Todos'
    ? products
    : products.filter(p => p.category === activeCategory.value)
)
</script>
