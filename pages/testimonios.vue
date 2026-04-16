<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">Testimonios</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Lo que dicen nuestros clientes</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="(t, i) in testimonios"
            :key="i"
            class="card flex flex-col gap-3"
          >
            <blockquote class="font-heading text-sm italic text-dark/80 leading-relaxed flex-1 whitespace-pre-line">
              "{{ t.Testimonio }}"
            </blockquote>
            <div class="border-t border-primary/10 pt-3">
              <p class="font-semibold text-dark">{{ t.Persona }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-primary/5 py-12 px-4 text-center">
      <h3 class="font-heading text-2xl font-bold text-primary mb-3">¿Ya es cliente?</h3>
      <p class="text-dark/60 mb-6">Comparta su experiencia con nosotros por WhatsApp.</p>
      <a href="https://wa.me/50686394271" target="_blank" rel="noopener" class="btn-primary">
        <div class="inline-flex items-center gap-2">
          <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />
          <span>Enviar mi testimonio</span>
        </div>
      </a>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { obtenerTestimonios, type Testimonio } from '~/serviciosAPI';

const testimonios = ref<Testimonio[]>([]);

onMounted(async () => testimonios.value = await obtenerTestimonios());
</script>