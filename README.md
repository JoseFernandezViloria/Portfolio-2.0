# Portfolio Personal - Jose.dev

Un portfolio moderno y elegante construido con React.js, Tailwind CSS y Vite.

## 🚀 Características

- **Diseño Moderno**: Glassmorphism, gradientes y efectos visuales elegantes
- **Responsive**: Optimizado para móvil, tablet y desktop
- **Multilingüe**: Soporte para español e inglés
- **Interactivo**: Animaciones suaves y efectos hover
- **Modal About**: Ventana modal con información personal
- **Carrusel de Proyectos**: Navegación elegante entre proyectos
- **Funcionalidad de Copiar**: Botón para copiar email al portapapeles

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Navegación principal
│   ├── Hero.jsx        # Sección principal
│   ├── Skills.jsx      # Sección de habilidades
│   ├── Projects.jsx    # Sección de proyectos
│   ├── Footer.jsx      # Pie de página
│   ├── AboutModal.jsx  # Modal de información personal
│   └── index.js        # Exportaciones de componentes
├── data/               # Datos estáticos
│   ├── translations.js # Traducciones ES/EN
│   ├── projects.js     # Datos de proyectos
│   └── skills.js       # Datos de habilidades
├── hooks/              # Hooks personalizados
│   └── useLanguage.js  # Hook para manejo de idiomas
├── utils/              # Utilidades (futuro)
├── assets/             # Recursos estáticos
├── App.jsx             # Componente principal
└── main.jsx            # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **React.js**: Framework principal
- **Tailwind CSS**: Framework de estilos
- **Vite**: Build tool y dev server
- **Lucide React**: Iconos
- **React Icons**: Iconos de tecnologías

## 🎨 Componentes Principales

### Header

- Navegación responsive
- Cambio de idioma
- Menú móvil hamburguesa

### Hero

- Presentación personal
- Foto circular clickeable
- Botones de acción
- Redes sociales

### Skills

- Grid de habilidades
- Efectos hover
- Iconos de tecnologías
- Diseño glassmorphism

### Projects

- Tarjetas de proyectos
- Proyectos destacados
- Enlaces a GitHub y demo
- Efectos visuales

### Footer

- Input de email con copiar
- Redes sociales
- Información de contacto

### AboutModal

- Modal con información personal
- Experiencia laboral
- Educación
- Especialidades

## 🌐 Internacionalización

El proyecto incluye soporte completo para español e inglés:

- **Traducciones**: Archivo `translations.js` con todas las cadenas
- **Hook personalizado**: `useLanguage` para manejo de estado
- **Cambio dinámico**: Botón en el header para cambiar idioma

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm, md, lg, xl
- **Navegación adaptativa**: Menú hamburguesa en móvil
- **Grid responsivo**: Se adapta a diferentes tamaños

## 🎯 Funcionalidades Especiales

### Modal About

- Se abre al hacer click en la foto
- Se abre desde el menú "Sobre mí"
- Fondo difuminado
- Se cierra al hacer click afuera

### Copiar Email

- Botón con feedback visual
- Ancho fijo para evitar saltos
- Centrado en móvil

### Efectos Visuales

- Sombras con colores temáticos
- Transiciones suaves
- Efectos hover elaborados
- Partículas animadas

## 🚀 Instalación y Uso

1. **Clonar el repositorio**

   ```bash
   git clone <url-del-repositorio>
   cd portfolio
   ```

2. **Instalar dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecutar en desarrollo**

   ```bash
   pnpm dev
   ```

4. **Construir para producción**
   ```bash
   pnpm build
   ```

## 📝 Personalización

### Cambiar Contenido

- **Traducciones**: Editar `src/data/translations.js`
- **Proyectos**: Modificar `src/data/projects.js`
- **Habilidades**: Actualizar `src/data/skills.js`

### Cambiar Estilos

- **Colores**: Modificar clases de Tailwind en los componentes
- **Efectos**: Ajustar animaciones y transiciones
- **Layout**: Cambiar estructura de grid y flexbox

### Agregar Funcionalidades

- **Nuevos componentes**: Crear en `src/components/`
- **Hooks personalizados**: Agregar en `src/hooks/`
- **Utilidades**: Implementar en `src/utils/`

## 🎨 Paleta de Colores

- **Primarios**: Púrpura (#8b5cf6) y Rosa (#ec4899)
- **Secundarios**: Cian (#06b6d4) y Azul (#3b82f6)
- **Neutros**: Slate (#0f172a) y Blanco
- **Gradientes**: Combinaciones de colores primarios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👨‍💻 Autor

**Jose** - Desarrollador Frontend

---

¡Gracias por revisar mi portfolio! 🚀
