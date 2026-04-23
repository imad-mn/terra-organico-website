<template>
  <footer class="bg-dark text-white/80 mt-auto">
    <div class="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Brand -->
      <div class="flex flex-col items-start gap-3">
        <img src="/logo.webp" alt="Terra Orgánico" class="h-15 w-15 rounded-full object-cover" />
        <p class="font-heading text-lg text-white font-semibold">Terra Orgánico</p>
        <p class="text-sm italic text-white/75">De la tierra a su hogar 🌱</p>
      </div>

      <!-- Contact -->
      <div>
        <h4 class="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contacto</h4>
        <ul class="space-y-3 text-sm">
          <li class="flex items-center gap-2">
            <UIcon name="simple-icons:whatsapp" class="text-green-400 w-4 h-4" />
            <a :href="`https://wa.me/50686394271?text=${encodeURIComponent('Hola, les escribo desde su página web.')}`" target="_blank" rel="noopener" class="hover:text-white transition-colors">+506 8639-4271</a>
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="heroicons:envelope" class="text-green-400 w-4 h-4" />
            <a href="mailto:terraorganicocr@gmail.com" class="hover:text-white transition-colors">terraorganicocr@gmail.com</a>
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="simple-icons:instagram" class="text-green-400 w-4 h-4" />
            <a href="https://instagram.com/terraorganicocr" target="_blank" rel="noopener" class="hover:text-white transition-colors">@terraorganicocr</a>
          </li>
          <li class="flex items-center gap-2">
            <UIcon name="simple-icons:facebook" class="text-green-400 w-4 h-4" />
            <a href="https://facebook.com/terraorganicocr" target="_blank" rel="noopener" class="hover:text-white transition-colors">Terra Orgánico</a>
          </li>
        </ul>
      </div>
    </div>

    <div class="border-t border-white/10 text-center text-xs text-white/60 py-3 flex flex-wrap items-center justify-center gap-2">
      <span>© {{ new Date().getFullYear() }} Terra Orgánico. Todos los derechos reservados.</span>
      <span class="flex items-center gap-1">
        Hecho con <UIcon name="heroicons:heart-solid" class="w-3 h-3 text-red-400" /> por
        <a href="https://imvisoft.com/" target="_blank" rel="noopener" class="hover:text-white/70 transition-colors underline underline-offset-2">IMVIsoft</a>
      </span>
    </div>
  </footer>
</template>

<script setup>
</script>
