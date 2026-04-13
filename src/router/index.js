import { createRouter, createWebHashHistory } from 'vue-router'
import Inicio from '../views/Inicio.vue'
import QuienesSomos from '../views/QuienesSomos.vue'
import Productos from '../views/Productos.vue'
import Testimonios from '../views/Testimonios.vue'
import PreguntasFrecuentes from '../views/PreguntasFrecuentes.vue'
import CostosEnvio from '../views/CostosEnvio.vue'
import ListaPrecios from '../views/ListaPrecios.vue'

const routes = [
  { path: '/',                    component: Inicio,               name: 'inicio' },
  { path: '/quienes-somos',       component: QuienesSomos,         name: 'quienes-somos' },
  { path: '/productos',           component: Productos,            name: 'productos' },
  { path: '/testimonios',         component: Testimonios,          name: 'testimonios' },
  { path: '/preguntas-frecuentes',component: PreguntasFrecuentes,  name: 'preguntas-frecuentes' },
  { path: '/costos-envio',        component: CostosEnvio,          name: 'costos-envio' },
  { path: '/lista-precios',       component: ListaPrecios,         name: 'lista-precios' },
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
