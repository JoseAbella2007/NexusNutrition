# Nexus Nutrition 🏋️‍♂️

![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-0.185-000000?style=for-the-badge&logo=threedotjs&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-10-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-package_manager-F69220?style=for-the-badge&logo=pnpm&logoColor=white)

Tienda online de nutrición premium y suplementación deportiva. Aplicación web construida con **React 19** y **Vite**, con catálogo de productos, carrito de compras, wishlist, autenticación de usuarios y un panel de administración para gestionar productos y usuarios.

## ✨ Características

- **Catálogo de productos** filtrado por categoría, con vista rápida (quick view) de cada producto.
- **Carrito de compras** persistente (guardado en `localStorage`) con panel lateral deslizante.
- **Lista de deseos (wishlist)** persistente con su propio panel lateral.
- **Autenticación de usuarios**: registro e inicio de sesión con validaciones (email, longitud de contraseña, mayúscula y carácter especial obligatorios).
- **Rutas protegidas** para el panel de administrador (`RutaAdministrador`).
- **Panel de administración** con secciones para gestionar productos (alta, edición, baja) y usuarios.
- **Diseño animado**: transiciones con Framer Motion, botón magnético, tarjetas inclinadas, revelado de elementos al hacer scroll y una portada 3D con Three.js / React Three Fiber.
- **Notificaciones y confirmaciones** con SweetAlert2.
- **Página 404** personalizada.

## 🛠️ Stack tecnológico

| Categoría | Tecnología |
|---|---|
| Librería UI | React 19 |
| Bundler / Dev server | Vite 8 |
| Enrutamiento | React Router DOM 7 |
| Estilos | Tailwind CSS 4 (vía `@tailwindcss/vite`) + CSS por componente |
| Animaciones | Framer Motion |
| 3D | Three.js + @react-three/fiber |
| Iconos | Font Awesome |
| Alertas / modales | SweetAlert2 |
| Linter | ESLint |
| Gestor de paquetes | pnpm |

> La app no usa un backend propio: la persistencia de usuarios y sesión se resuelve en el navegador con `localStorage` / `sessionStorage`

## 📂 Estructura del proyecto

```
NexusNutrition/
├── public/                     # Assets estáticos (imágenes de productos, favicon, etc.)
├── src/
│   ├── jsx/                    # Componentes y páginas de React
│   │   ├── App.jsx             # Definición de rutas de la aplicación
│   │   ├── main.jsx            # Punto de entrada
│   │   ├── DisenoSitio.jsx     # Layout general (Menu, Footer, carrito, wishlist)
│   │   ├── Menu.jsx / Footer.jsx
│   │   ├── Inicio.jsx          # Home: portada, beneficios, categorías, testimonios, etc.
│   │   ├── CategoriaProductos.jsx / CardProducto.jsx / ItemProducto.jsx / QuickViewProducto.jsx
│   │   ├── SideCarrito.jsx / SideWishlist.jsx
│   │   ├── Login.jsx / Registro.jsx / DisenoAutenticacion.jsx / ContextoAutenticacion.jsx
│   │   ├── Administrador.jsx / AdminInicio.jsx / AdminProductos.jsx / AdminUsuarios.jsx
│   │   ├── RutaAdministrador.jsx  # Guard de rutas privadas de admin
│   │   ├── Nosotros.jsx / Error404.jsx
│   │   └── ... (componentes visuales: Portada3D, TarjetaInclinada, BotonMagnetico, etc.)
│   ├── components/common/      # Componentes compartidos (ej. carrusel de más vendidos)
│   ├── hooks/                  # Hooks personalizados (useLocalStorage)
│   ├── services/                # Lógica de negocio (servicioAutenticacion.js)
│   ├── routes/                  # Definición centralizada de rutas (rutas.js)
│   ├── data/                    # Datos de productos (productos.js)
│   ├── css/                     # Estilos por componente + variables globales
│   └── assets/imagenes/         # Imágenes usadas en la UI
├── index.html
├── vite.config.js
├── eslint.config.js
├── package.json
└── pnpm-lock.yaml
```

## 🗺️ Rutas principales

| Ruta | Página | Acceso |
|---|---|---|
| `/` | Inicio | Público |
| `/categoria/:nombreCategoria` | Catálogo por categoría | Público |
| `/acerca-de` | Nosotros | Público |
| `/iniciar-sesion` | Login | Público |
| `/registro` | Registro | Público |
| `/admin` | Panel de administración (inicio) | Solo administrador |
| `/admin/usuarios` | Gestión de usuarios | Solo administrador |
| `/admin/productos` | Gestión de productos | Solo administrador |
| `/404` (catch-all `*`) | Página no encontrada | Público |

## 🔐 Autenticación

El sistema de autenticación (`src/services/servicioAutenticacion.js`) es simulado en el cliente:

- Los usuarios registrados se guardan en `localStorage`.
- La sesión activa se guarda en `sessionStorage`.
- El registro valida email, longitud mínima de contraseña (6 caracteres), al menos una mayúscula y un carácter especial.
- Existe un usuario **administrador** con credenciales fijas en el código (`admin` / `admin123`) que habilita el acceso al panel `/admin`.

## 🚀 Instalación y uso

### Requisitos previos
- Node.js (versión compatible con Vite 8 / React 19)
- [pnpm](https://pnpm.io/) como gestor de paquetes

### Pasos

```bash
# 1. Instalar dependencias
pnpm install

# 2. Levantar el servidor de desarrollo
pnpm dev

# 3. Generar build de producción
pnpm build

# 4. Previsualizar el build de producción
pnpm preview

# 5. Ejecutar el linter
pnpm lint
```

Por defecto, `pnpm dev` levanta la app en `http://localhost:5173` (puerto estándar de Vite).

## 🛫 Deploy:
https://nexus-nutrition-delta.vercel.app/

## 👥 Autores  
Pilar Molina: ![Scrum Master](https://img.shields.io/badge/Scrum%20Master-blueviolet?style=for-the-badge)<br>
Jose Abella: ![Tech Leader](https://img.shields.io/badge/Tech%20Leader-blue?style=for-the-badge)<br>
Mariano De Filippo: ![Desarrolladores](https://img.shields.io/badge/Desarrolladores-green?style=for-the-badge)<br>
Agustin Penza: ![Desarrolladores](https://img.shields.io/badge/Desarrolladores-green?style=for-the-badge)
