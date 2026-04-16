# Guía de SEO - Terra Orgánico

Este documento describe la configuración de SEO implementada en Terra Orgánico.

## Módulos instalados

- **@nuxtjs/seo**: Gestiona meta tags, sitemaps, robots.txt y Open Graph automáticamente.

## Configuración global (nuxt.config.ts)

### Site Configuration
- **URL**: https://terraorganico.com
- **Nombre**: Terra Orgánico
- **Locale**: es (Español)
- **Descripción global**: Productos libres de pesticidas y frescos, de la tierra a su hogar. Deliveries en Costa Rica con variedad de frutas y verduras ecológicas.

### Meta Tags Globales
- **title**: Terra Orgánico
- **description**: Descripción SEO optimizada
- **keywords**: productos orgánicos, verduras frescas, frutas orgánicas, etc.
- **Open Graph**: og:type, og:site_name, og:locale
- **Twitter Card**: summary_large_image

### Robots.txt
Generado automáticamente en `/robots.txt`:
- Allow all crawlers (`*`)
- Block `/admin` rutas (si existen)
- Sin delay de crawl

### Sitemap.xml
Generado automáticamente en `/sitemap.xml` con:
- **Prioridades**:
  - Inicio `/` : 1.0 (máxima)
  - Productos: 0.9
  - Quiénes Somos, Preguntas Frecuentes: 0.8
  - Testimonios, Costos Envío: 0.7

- **Frecuencias de cambio**:
  - Inicio: monthly
  - Productos y Lista de Precios: weekly
  - Otras páginas: monthly

## Meta Tags por página

Cada página incluye `useSeoMeta()` con:
- **title**: Título de página específico (55-60 caracteres)
- **description**: Descripción meta (150-160 caracteres)
- **ogTitle**: Título para redes sociales
- **ogDescription**: Descripción para redes sociales
- **ogImage**: Imagen para vista previa (Open Graph)
- **keywords**: Palabras clave relevantes (donde aplica)

### Páginas configuradas:
1. **Inicio** (`pages/index.vue`)
   - Schema.org: LocalBusiness

2. **Productos** (`pages/productos.vue`)
   - Keywords específicas de productos

3. **Quiénes Somos** (`pages/quienes-somos.vue`)
   - Información de negocio local

4. **Testimonios** (`pages/testimonios.vue`)
   - Social proof

5. **Preguntas Frecuentes** (`pages/preguntas-frecuentes.vue`)
   - Schema.org: FAQPage

6. **Costos de Envío** (`pages/costos-envio.vue`)
   - Información logística

7. **Lista de Precios** (`pages/lista-precios.vue`)
   - E-commerce focus

## Structured Data (Schema.org)

### LocalBusiness (Inicio)
Tipo: LocalBusiness
- name: Terra Orgánico
- description: Productos libres de pesticidas y frescos
- url: https://terraorganico.com
- logo: https://terraorganico.com/logo.png
- phone: +506-8853-2344
- address: Costa Rica

### FAQPage (Preguntas Frecuentes)
Incluye todas las preguntas y respuestas estructuradas como JSON-LD para rich snippets en Google.

## Próximos pasos recomendados

1. **Verificar en Google Search Console**:
   - Añade tu dominio en https://search.google.com/search-console/
   - Envía el sitemap.xml manualmente
   - Verifica que no haya errores de indexación

2. **Verificar en Bing Webmaster Tools**:
   - https://www.bing.com/webmasters

3. **Google Analytics (GA4)**:
   - Añade tu ID de GA4 en `app.vue` si deseas rastrear conversiones
   - Busca la línea `G-XXXXXXXXXX` y reemplaza con tu ID

4. **Optimización de imágenes**:
   - Las imágenes de Unsplash ya son optimizadas
   - Considera usar WebP si se añaden imágenes locales
   - Optimiza la compresión con herramientas como TinyPNG

5. **Speed Optimization**:
   - Ejecuta: https://pagespeed.web.dev/
   - Revisa Core Web Vitals
   - Considera implementar image lazy-loading en Nuxt

6. **Link Building**:
   - Asegúrate de que el sitio tenga backlinks desde directorios locales de Costa Rica
   - Verifica presencia en Google My Business

## Archivos generados automáticamente

Después de ejecutar `npm run build`, se generarán en `.output/public/`:
- `robots.txt` - Para controlar bots de búsqueda
- `sitemap.xml` - Mapa del sitio para buscadores
- HTML con meta tags optimizados

## Testing de SEO

### Herramientas recomendadas:
1. **Google Search Console**: https://search.google.com/search-console/
2. **SEO Auditor Chrome Extension**: Valida on-page SEO
3. **Lighthouse** (DevTools): Auditoría de performance y SEO
4. **Structured Data Testing Tool**: https://search.google.com/test/rich-results

## Checklist de SEO Local

- [x] Meta descriptions en todas las páginas
- [x] Open Graph tags para redes sociales
- [x] Schema.org structured data (LocalBusiness + FAQPage)
- [x] Sitemap.xml generado
- [x] robots.txt optimizado
- [x] Mobile responsive (Tailwind CSS)
- [x] Keywords específicas por página
- [x] Internal linking (NuxtLinks)
- [ ] Google My Business verificado
- [ ] Google Analytics implementado
- [ ] Search Console verificado
- [ ] Backlinks de directorios locales

## Notas importantes

- **Imagen OG**: Todas las páginas usan una imagen de Unsplash optimizada como preview social
- **Idioma**: Configurado a español (es) para Costa Rica (es_CR)
- **URL Canónica**: Se genera automáticamente con https://terraorganico.com
- **Twitter**: Incluye Card type para mejor vista en Twitter/X

