<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Preguntas Frecuentes</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Respuestas a las dudas más comunes</p>
    </section>

    <section class="py-10 px-4">
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
          <a href="https://wa.me/50686394271" target="_blank" rel="noopener" class="btn-primary">
            <div class="inline-flex items-center gap-2">
              <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />
              <span>Consultar por WhatsApp</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useSeoMeta({
  title: 'Preguntas Frecuentes - Terra Orgánico',
  ogTitle: 'Respuestas a tus dudas sobre pedidos y envíos',
  description: 'Preguntas frecuentes sobre cómo hacer pedidos, entregas, productos orgánicos certificados y formas de pago en Terra Orgánico.',
  ogDescription: 'Encuentra respuestas a tus dudas sobre productos orgánicos, entregas a domicilio y cómo pedir en Terra Orgánico.',
  ogImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
})

const open = ref(null)
function toggle(i) {
  open.value = open.value === i ? null : i
}

const faqs = [
  {
    question: '¿Cómo sé que de verdad son productos orgánicos?',
    answer: 'Nuestros productos provienen de: fincas certificadas bajo normativas orgánicas oficiales, y productores que, aunque no exista una certificación como tal del producto, siguen prácticas estrictas de cultivo y crianza libre de químicos, pesticidas, hormonas, anabólicos, etc. Siempre informamos claramente el origen y el tipo de tratamiento de cada producto para que compres con total confianza.',
  },
  {
    question: '¿Cómo se conservan los productos durante el reparto?',
    answer: 'Utilizamos empaques adecuados según el tipo de producto y transporte en frío para mantener la frescura, calidad y seguridad alimentaria. Además, fomentamos el uso de empaques reutilizables como cartones de huevos y botellas plásticas retornables, promoviendo prácticas sostenibles en cada entrega.',
  },
  {
    question: '¿Hacen entregas a domicilio y en qué horarios?',
    answer: 'Sí, realizamos entregas a domicilio en rutas programadas según tu ubicación. Puedes revisar el menú de "Envíos" para verificarlo en la zona que te encuentras. Siempre buscamos que recibas tus productos en el menor tiempo posible y en óptimas condiciones.',
  },
  {
    question: '¿Los productos son de temporada?',
    answer: 'Sí, trabajamos principalmente con productos de temporada para asegurar frescura, mejor sabor y menor impacto ambiental. Esto nos permite ofrecer alimentos más nutritivos y apoyar prácticas agrícolas responsables que respetan los ciclos naturales de cada cultivo. ',
  },
  {
    question: '¿Qué hago si un producto llega en mal estado?',
    answer: 'Si recibes un producto en mal estado, por favor contáctanos dentro de las primeras 24 horas posteriores a la entrega enviando una foto y una breve descripción del problema. Evaluaremos el caso y te ofreceremos una solución: reposición del producto, o reembolso, según corresponda. Nuestro compromiso es asegurar tu satisfacción y la calidad de cada entrega.',
  },
  {
    question: '¿Cómo realizo un pedido? ',
    answer: 'Al registrarte, te asignaremos un código de cliente con el cual podrás ingresar fácilmente a nuestra plataforma. Desde nuestra página oficial podrás seleccionar tus productos, agregar al carrito y enviar tu pedido de forma rápida y sencilla. También recibirás asistencia personalizada si lo necesitas.',
  },
  {
    question: '¿Cuándo debo hacer mi pedido?',
    answer: 'Los pedidos deben tomarse los días jueves y viernes, para asegurar disponibilidad y organizar la logística.',
  },
  {
    question: '¿Tienen monto mínimo de pedido?',
    answer: ' No hay un montón mínimo. El costo de envío es de acuerdo al tamaño del pedido.',
  },
  {
    question: '¿Cuáles son las formas de pago disponibles?',
    answer: 'Puedes realizar el pago al momento de la entrega, una vez hayas verificado que tu pedido esté completo y en buen estado. Aceptamos pagos en efectivo o por Sinpe Móvil, para tu comodidad y seguridad.',
  },
  {
    question: '¿Puedo cancelar o modificar mi pedido?',
    answer: 'Los pedidos se toman jueves y viernes. El día límite para cancelar o modificar el pedido es el día sábado.',
  },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
          '@type': 'Question',
          'name': faq.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': faq.answer
          }
        }))
      })
    }
  ]
})
</script>
