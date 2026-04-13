<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <RouterView />
    </main>
    <Footer />

    <!-- Floating WhatsApp button -->
    <a
      href="https://wa.me/50688532344"
      target="_blank"
      rel="noopener"
      aria-label="Contáctenos por WhatsApp"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
    >
      <i class="pi pi-whatsapp text-white text-2xl"></i>
    </a>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>
