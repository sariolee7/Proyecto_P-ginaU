# Portal institucional USB Bogotá

Landing page institucional de la Universidad de San Buenaventura Bogotá, desarrollada como proyecto académico con React y Vite. La página presenta la universidad, su oferta académica, la vida en el campus y diferentes formas de contacto para aspirantes, estudiantes y visitantes.

## Contenido

- Barra superior con accesos institucionales y navegación principal.
- Hero principal con carrusel automático y controles manuales.
- Sección de vida universitaria: USB Radio, Colegios a la U, Breviloquio y Directorio USB.
- Banner de financiación para estudios.
- Oferta académica: pregrados, posgrados, tecnologías, educación continua y centro de idiomas.
- Facultades y diferenciales de estudiar en la USB Bogotá.
- Carrusel de historias y perfiles de graduados destacados.
- Carrusel de eventos académicos e institucionales.
- Galería fotográfica del campus San Buenaventura.
- Información para visitar el campus, enlace de indicaciones y mapa de Google Maps.
- Pie de página con certificaciones, contacto, menús y redes sociales.

## Tecnologías

- React 19
- Vite 8
- Tailwind CSS 4
- Lucide React para iconos
- ESLint para revisión de código

## Requisitos

- Node.js 18 o superior.
- npm, incluido con Node.js.

## Instalación

Clona el repositorio, entra en la carpeta del proyecto e instala las dependencias:

```bash
npm install
```

## Desarrollo

Inicia el servidor local con:

```bash
npm run dev
```

Vite mostrará en la terminal la dirección local disponible, normalmente `http://localhost:5173`.

## Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo con recarga en caliente. |
| `npm run build` | Genera la versión optimizada para producción en `dist/`. |
| `npm run preview` | Sirve localmente la compilación de producción. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

## Estructura principal

```text
src/
├── components/       # Barra de navegación y secciones institucionales
├── components2/      # Graduados, eventos, campus, visitas y footer
├── styles/           # Estilos CSS de las secciones de components2
├── assets/           # Logos, fondos e imágenes de la página principal
├── img/              # Fotografías del campus y graduados
├── App.jsx           # Composición de la página completa
├── main.jsx          # Punto de entrada de React
├── App.css           # Estilos globales y Tailwind
└── index.css         # Estilos base
```

## Notas de desarrollo

- El contenido de eventos, graduados y enlaces institucionales está definido directamente en los componentes.
- Varios enlaces de navegación, redes sociales y botones usan `#` como destino temporal y deben conectarse a las URLs definitivas.
- El mapa y el enlace de indicaciones utilizan Google Maps.
- Los carruseles de graduados y eventos incluyen reproducción automática, navegación por puntos y soporte para arrastre; la galería del campus incluye navegación por flechas.
