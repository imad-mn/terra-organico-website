# Terra Orgánico 🌱

Sitio web para la tienda virtual de productos orgánicos **Terra Orgánico** — *De la tierra a su hogar*.

## Tecnologías

- [Vue 3](https://vuejs.org/) + [Vite 6](https://vitejs.dev/)
- [Vue Router 4](https://router.vuejs.org/) (hash history)
- [PrimeVue 4](https://primevue.org/) — biblioteca de componentes
- [Tailwind CSS 3](https://tailwindcss.com/) — estilos utilitarios
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

# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Compilar para producción
npm run build

# Vista previa del build
npm run preview
```

El comando `npm run build` genera la carpeta `dist/` lista para subir a cualquier servicio de hosting estático (Netlify, GitHub Pages, cPanel, etc.).

## Personalización

### Colores de marca

Los colores están definidos en `tailwind.config.js`:

```js
colors: {
  primary:   '#2D6A2D',  // verde bosque
  secondary: '#4A7C3F',  // verde oliva
  accent:    '#8B5E3C',  // marrón tierra
  khaki:     '#E8E0C8',  // fondo khaki claro
  dark:      '#1E2D1E',  // texto oscuro
}
```

### Contenido

Los datos de productos, precios, zonas de envío y testimonios se encuentran como arreglos JavaScript dentro de cada archivo `.vue` en `src/views/`. Edítelos directamente para reflejar el catálogo y la información real de la tienda.

## Estructura del proyecto

```
terra-organico-website/
├── public/
│   └── logo.png              ← logo del sitio
├── src/
│   ├── components/
│   │   ├── Navbar.vue
│   │   └── Footer.vue
│   ├── views/
│   │   ├── Inicio.vue
│   │   ├── QuienesSomos.vue
│   │   ├── Productos.vue
│   │   ├── Testimonios.vue
│   │   ├── PreguntasFrecuentes.vue
│   │   ├── CostosEnvio.vue
│   │   └── ListaPrecios.vue
│   ├── router/
│   │   └── index.js
│   ├── App.vue
│   ├── main.js
│   └── style.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── package.json
```
