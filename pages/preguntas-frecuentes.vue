<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Preguntas Frecuentes</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Respuestas a las dudas más comunes</p>
    </section>

    <section class="py-20 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-3">
          <div
            v-for="(faq, i) in faqs"
            :key="i"
            class="bg-white/60 rounded-2xl border border-white/80 overflow-hidden"
          >
            <button
              class="w-full text-left px-6 py-4 flex items-center justify-between gap-4 hover:bg-primary/5 transition-colors"
              @click="toggle(i)"
            >
              <span class="font-semibold text-dark pr-4">{{ faq.question }}</span>
              <UIcon
                :name="open === i ? 'heroicons:minus' : 'heroicons:plus'"
                class="text-primary flex-shrink-0 w-5 h-5 transition-transform duration-200"
              />
            </button>
            <Transition
              enter-active-class="transition-all duration-200 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-96"
              leave-active-class="transition-all duration-150 ease-in"
              leave-from-class="opacity-100 max-h-96"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="open === i" class="px-6 pb-5">
                <p class="text-dark/70 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>

        <div class="mt-12 card text-center">
          <p class="text-dark/70 mb-4">¿No encontró su respuesta? Escríbanos directamente.</p>
          <a href="https://wa.me/50688532344" target="_blank" rel="noopener" class="btn-primary inline-flex items-center gap-2">
            <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(null)
function toggle(i) {
  open.value = open.value === i ? null : i
}

const faqs = [
  {
    question: '¿Cómo hago un pedido?',
    answer: 'Puede hacer su pedido directamente por WhatsApp al número indicado en el pie de página. Envíenos la lista de productos que desea y le confirmaremos disponibilidad y precio total.',
  },
  {
    question: '¿Cuáles son los días de entrega?',
    answer: 'Los días de entrega varían según su zona. Consulte la sección de Costos de Envío para ver el calendario de entregas por área geográfica.',
  },
  {
    question: '¿Cuándo debo hacer mi pedido?',
    answer: 'Los pedidos deben realizarse con al menos 48 horas de anticipación a su día de entrega programado, para asegurar disponibilidad y organizar la logística.',
  },
  {
    question: '¿Los productos realmente son orgánicos?',
    answer: 'Sí. Trabajamos únicamente con agricultores que cultivan sin pesticidas ni fertilizantes químicos. Varios de nuestros proveedores cuentan con certificación orgánica y gustosamente le compartimos esa información.',
  },
  {
    question: '¿Tienen monto mínimo de pedido?',
    answer: 'Sí, el monto mínimo de pedido es de ₡5,000 para zonas con costo de envío incluido. Para pedidos menores, aplica un cargo adicional. Consulte en WhatsApp.',
  },
  {
    question: '¿Cómo se realiza el pago?',
    answer: 'Aceptamos transferencia bancaria (SINPE Móvil), depósito en cuenta y efectivo al momento de la entrega, según disponibilidad de ruta.',
  },
  {
    question: '¿Qué pasa si un producto no está disponible?',
    answer: 'Le avisamos con anticipación si algún producto de su pedido no está disponible esa semana, y le ofrecemos una alternativa o ajustamos el monto de su pedido.',
  },
  {
    question: '¿Entregan fuera del área metropolitana?',
    answer: 'Actualmente atendemos principalmente la Gran Área Metropolitana. Si está en otra zona, contáctenos y evaluamos si es posible llegar hasta usted o coordinar un punto de retiro.',
  },
  {
    question: '¿Puedo cancelar o modificar mi pedido?',
    answer: 'Puede modificar o cancelar su pedido hasta 24 horas antes de la fecha de entrega acordada, comunicándose por WhatsApp.',
  },
  {
    question: '¿Tienen productos disponibles todo el año?',
    answer: 'La disponibilidad de ciertos productos depende de la temporada. Nuestra selección varía para ofrecer siempre lo más fresco. Consulte la lista semanal por WhatsApp.',
  },
]
</script>
