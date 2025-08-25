# Actividad Práctica 2: Estilizado de Componentes en Next.js

## Instrucciones Iniciales

### Fork del Repositorio

**Antes de comenzar la actividad, debes realizar fork del repositorio donde trabajarás:**

1. **Accede al repositorio base:**

    - Navega a: `https://github.com/jfinfosena/act_react_s2.git`
    - Examina la estructura del proyecto
    - Lee el archivo README.md

2. **Realiza el Fork:**

    - Haz clic en el botón "Fork" en la esquina superior derecha
    - Selecciona tu cuenta personal como destino
    - Espera a que se complete el proceso

3. **Clona tu fork localmente:**
   ```bash
   git clone https://github.com/TU_USUARIO/act_react_s2.git
   cd act_react_s2
   npm install
   ```

4. **Verifica que el proyecto funciona:**
   ```bash
   npm run dev
   ```
   - Abre tu navegador en `http://localhost:3000`

---

## Objetivo
Aprender a aplicar diferentes métodos de estilizado CSS en componentes de Next.js, incluyendo **CSS Global**, **Módulos CSS**, **Estilos en Línea** y **Tailwind CSS**.

---

## Parte 1: CSS Global



### Ejercicio 1.2: Crear Componente con Estilos Globales

1. **Componente Tarjeta Global (`app/components/TarjetaGlobal.js`):**

    - Crear componente que reciba props: `titulo`, `contenido`, `color`
    - Usar clases CSS globales definidas en `globals.css`
    - Clases a crear: `.tarjeta-global`, `.titulo-global`, `.contenido-global`

2. **Estilos en globals.css:**

    - `.tarjeta-global`: borde, padding, border-radius, sombra
    - `.titulo-global`: tamaño de fuente, color, margin
    - `.contenido-global`: color de texto, line-height
    - Incluir estados hover para interactividad

---

## Parte 2: Módulos CSS

### Ejercicio 2.1: Componente con CSS Modules

1. **Crear componente Tarjeta con Módulos:**

    - Crea `app/components/TarjetaModulo.js`
    - Crea `app/components/TarjetaModulo.module.css`
    - El componente debe recibir props: `nombre`, `descripcion`, `categoria`

2. **Estilos en el módulo CSS:**

    - Clases: `tarjeta`, `encabezado`, `titulo`, `descripcion`, `categoria`
    - Cada clase debe tener estilos específicos y únicos    
    - Agregar transiciones suaves para hover

### Ejercicio 2.2: Múltiples Variantes con Módulos

1. **Crear variantes de tarjetas:**

    - Implementar clases: `tarjetaPrimaria`, `tarjetaSecundaria`, `tarjetaExito`
    - Cada variante con esquema de colores diferente
    - Usar composición de clases en el componente

---

## Parte 3: Estilos en Línea

### Ejercicio 3.1: Componente con Estilos Dinámicos

1. **Crear TarjetaDinamica (`app/components/TarjetaDinamica.js`):**

    - Recibir props: `titulo`, `contenido`, `colorFondo`, `colorTexto`, `ancho`
    - Aplicar estilos en línea usando el objeto `style`
    - Los estilos deben ser completamente dinámicos basados en props

2. **Funcionalidad requerida:**

    - Cambio de color de fondo según prop `colorFondo`
    - Cambio de color de texto según prop `colorTexto`
    - Ancho variable según prop `ancho`
    - Padding y margin fijos en el objeto style

### Ejercicio 3.2: Estilos Condicionales en Línea

1. **Implementar estados visuales:**

    - Agregar prop `activo` (boolean)
    - Cambiar estilos cuando `activo` es true/false
    - Usar operador ternario para estilos condicionales

---

## Parte 4: Tailwind CSS

### Ejercicio 4.1: Componente con Tailwind CSS

1. **Crear TarjetaTailwind (`app/components/TarjetaTailwind.js`):**

    - Usar solo clases de Tailwind para el estilizado
    - Recibir props: `titulo`, `descripcion`, `imagen`, `etiqueta`
    - Implementar diseño tipo card moderno

2. **Clases de Tailwind a utilizar:**

    - Layout: `flex`, `flex-col`, `p-4`, `m-2`, `w-64`
    - Colores: `bg-white`, `text-gray-800`, `border-gray-200`
    - Efectos: `shadow-lg`, `rounded-lg`, `hover:shadow-xl`
    - Transiciones: `transition-all`, `duration-300`

---

## Parte 5: Integración y Comparación

### Ejercicio 5.1: Página de Demostración

1. **Crear página principal (`app/page.js`):**

    - Mostrar los 4 tipos de tarjetas creadas
    - Cada tarjeta debe demostrar su método de estilizado
    - Incluir título descriptivo para cada sección

---
