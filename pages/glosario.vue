<template>
  <div>
    <section class="page-hero">
      <h1 class="text-4xl md:text-5xl font-heading font-bold mb-3">📚 Glosario</h1>
      <p class="text-white/70 text-lg max-w-xl mx-auto">Entiende los términos clave sobre nuestros productos orgánicos</p>
    </section>

    <section class="py-10 px-4">
      <div class="max-w-3xl mx-auto">
        <div class="space-y-4">
          <div
            v-for="(term, i) in glossary"
            :key="i"
            class="bg-white/60 rounded-2xl border border-white/80 p-6 hover:border-secondary transition-colors"
          >
            <h3 class="font-semibold text-dark text-lg mb-2">{{ term.title }}</h3>
            <p class="text-dark/70 leading-relaxed">{{ term.definition }}</p>
          </div>
        </div>

        <div class="mt-12 card text-center">
          <p class="text-dark/70 mb-4">¿Tienes preguntas sobre nuestros productos?</p>
          <a href="https://wa.me/50686394271" target="_blank" rel="noopener" class="btn-primary">
            <div class="inline-flex items-center gap-2">
              <UIcon name="simple-icons:whatsapp" class="w-5 h-5" />
              <span>Contactar por WhatsApp</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Glosario - Terra Orgánico',
  ogTitle: 'Glosario de términos orgánicos',
  description: 'Entiende los términos clave sobre agricultura orgánica certificada, tratamientos naturales y productos sostenibles de Terra Orgánico.',
  ogDescription: 'Glosario completo de términos sobre productos orgánicos, certificaciones y prácticas sostenibles.',
  ogImage: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=1200&q=80',
})

const glossary = [
  {
    title: 'Orgánico Certificado',
    definition: 'Productos provenientes de fincas que han sido evaluadas y aprobadas bajo normativas oficiales de agricultura orgánica, con el MEP. Esta certificación respalda prácticas agrícolas sin agroquímicos ni insumos sintéticos, garantizando trazabilidad y cumplimiento riguroso de estándares internacionales.',
  },
  {
    title: 'Tratamiento Orgánico',
    definition: 'Productos que, si bien no cuentan con certificación oficial debido a las características propias del cultivo o producción, se desarrollan bajo los mismos principios de la agricultura y ganadería orgánica: sin químicos, respetando el bienestar animal, la biodiversidad y la regeneración del suelo. Comprometidos con prácticas limpias, responsables y naturales.',
  },
  {
    title: 'Tratamiento Orgánico - Abonos',
    definition: 'Insumos de origen natural que mejoran la estructura del suelo, estimulan la actividad microbiológica y optimizan la absorción de nutrientes. Incluye abono foliar, microorganismos líquidos y sustratos enriquecidos para una fertilización eficiente y sostenible.',
  },
  {
    title: 'Orgánico Certificado - Frutas y Vegetales Frescos',
    definition: 'Provenientes de fincas certificadas que siguen prácticas agrícolas sostenibles. Cultivados sin agroquímicos ni fertilizantes sintéticos, garantizando la calidad, sabor y beneficios nutricionales, respetando los estándares más estrictos de certificación.',
  },
  {
    title: 'Tratamiento Orgánico - Plantas Medicinales',
    definition: 'Plantas cultivadas sin químicos ni procesos industriales, respetando los ciclos naturales y las propiedades curativas de cada especie. Su manejo sigue prácticas limpias y sostenibles, ideales para infusiones, tónicos y usos terapéuticos tradicionales.',
  },
  {
    title: 'Orgánico Certificado - Café y Chocolate',
    definition: 'Alimentos elaborados a partir de materias primas cultivadas en fincas certificadas, libres de insumos sintéticos y con procesos que respetan su origen natural. Conservando su sabor auténtico y alto valor nutricional bajo estándares certificados de calidad.',
  },
  {
    title: 'Orgánico Certificado - Granola y Deshidratados',
    definition: 'Alimentos elaborados a partir de materias primas cultivadas en fincas certificadas, libres de insumos sintéticos y con procesos que respetan su origen natural. Conservando su sabor auténtico y alto valor nutricional bajo estándares certificados de calidad.',
  },
  {
    title: 'Tratamiento Orgánico - Hongos',
    definition: 'Hongos cultivados en entornos controlados, sin uso de pesticidas, y manejados con prácticas que respetan su desarrollo natural. Su producción sigue principios de sostenibilidad, limpieza y respeto por el ecosistema del que provienen.',
  },
  {
    title: 'Tratamiento Orgánico - Tortillas, Aceite y Miel',
    definition: 'Alimentos naturales elaborados sin aditivos ni procesos industriales agresivos. Provienen de manejos responsables que siguen principios orgánicos en cada etapa de producción.',
  },
  {
    title: 'Crianza Orgánica',
    definition: 'Carnes de res, pollo y trucha provenientes de sistemas de crianza natural, libre de hormonas, antibióticos, anabólicos y sin procesos de tenderización química. El ganado se desarrolla en entornos de pastoreo y alimentación limpia, manteniendo el equilibrio ecológico y garantizando un producto saludable y de alta calidad.',
  },
  {
    title: 'Orgánico Certificado - Jugos',
    definition: 'Jugos elaborados a partir de frutas cultivadas en fincas certificadas, sin agroquímicos ni conservantes artificiales. Extraídos y procesados de forma cuidadosa para conservar su sabor natural, frescura y los nutrientes esenciales de cada ingrediente.',
  },
  {
    title: 'Orgánico Certificado - Fruta Congelada',
    definition: 'Frutas provenientes de fincas certificadas, cosechadas en su punto óptimo de maduración, congeladas rápidamente para preservar su sabor, textura y valor nutricional. Sin aditivos ni tratamientos químicos, listas para usar en batidos, postres o recetas saludables.',
  },
  {
    title: 'Orgánico Certificado - Mermeladas y Salsas',
    definition: 'Alimentos elaborados a partir de materias primas cultivadas en fincas certificadas, libres de insumos sintéticos y con procesos que respetan su origen natural. Conservando su sabor auténtico y alto valor nutricional bajo estándares certificados de calidad.',
  },
  {
    title: 'Jabones Artesanales',
    definition: 'Jabones elaborados a partir de materias primas cultivadas en fincas certificadas, con ingredientes naturales, libres de químicos y conservantes artificiales.',
  },
]
</script>
