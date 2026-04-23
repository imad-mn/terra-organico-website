<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />

    <!-- Floating WhatsApp button -->
    <a
      :href="`https://wa.me/50686394271?text=${encodeURIComponent('Hola, les escribo desde su página web.')}`"
      target="_blank"
      rel="noopener"
      aria-label="Contáctenos por WhatsApp"
      class="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg bg-[#25D366] hover:bg-[#1ebe5d] transition-colors duration-200"
    >
      <UIcon name="simple-icons:whatsapp" class="text-white w-7 h-7" />
    </a>
  </div>
</template>
