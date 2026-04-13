# Terra Orgánico

Sitio web para la tienda virtual de productos orgánicos **Terra Orgánico** — *De la tierra a su hogar*.

## Tecnologías

- [Nuxt 3](https://nuxt.com/) — framework Vue con SSG
- [Nuxt UI 3](https://ui.nuxt.com/) — componentes e iconos (Iconify)
- [Tailwind CSS 4](https://tailwindcss.com/) — estilos utilitarios
- Google Fonts: Playfair Display + Lato

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Inicio — hero, características, productos destacados |
| `/quienes-somos` | Historia, misión, visión y valores |
| `/productos` | Catálogo con filtro por categoría |
| `/testimonios` | Opiniones de clientes |
| `/preguntas-frecuentes` | Acordeón de preguntas y respuestas |
| `/costos-envio` | Tabla de zonas, tarifas y días de entrega |
| `/lista-precios` | Precios por categoría con opción de impresión |

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo (http://localhost:3000)
npm run dev

# Generar sitio estático
npm run build

# Vista previa del build
npm run preview
```

El comando `npm run build` ejecuta `nuxt generate` y produce la carpeta `.output/public/` con un archivo HTML por ruta, lista para subir a cualquier servicio de hosting estático (Netlify, GitHub Pages, cPanel, etc.).

## Personalización

### Colores de marca

Los colores están definidos en `assets/css/main.css` bajo `@theme {}`:

```css
@theme {
  --color-primary:   #2D6A2D;  /* verde bosque */
  --color-secondary: #4A7C3F;  /* verde oliva  */
  --color-accent:    #8B5E3C;  /* marrón tierra */
  --color-khaki:     #E8E0C8;  /* fondo khaki claro */
  --color-dark:      #1E2D1E;  /* texto oscuro */
}
```

### Contenido

Los datos de productos, precios, zonas de envío y testimonios se encuentran como arreglos JavaScript dentro de cada archivo `.vue` en `pages/`. Edítelos directamente para reflejar el catálogo y la información real de la tienda.

## Estructura del proyecto

```
terra-organico-website/
├── public/
│   └── logo.png
├── assets/
│   └── css/
│       └── main.css          ← tokens de marca + clases utilitarias
├── components/
│   ├── Navbar.vue
│   └── Footer.vue
├── layouts/
│   └── default.vue           ← Navbar + slot + Footer + botón WhatsApp
├── pages/
│   ├── index.vue
│   ├── quienes-somos.vue
│   ├── productos.vue
│   ├── testimonios.vue
│   ├── preguntas-frecuentes.vue
│   ├── costos-envio.vue
│   └── lista-precios.vue
├── app.vue                   ← shell raíz (NuxtLayout + NuxtPage)
├── app.config.ts
├── nuxt.config.ts
└── package.json
```
