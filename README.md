# Dashboard Web Moderno - Flex (Réplica 100%)

Panel de control y analíticas web moderno, limpio y completamente responsivo, replicado con precisión visual basada en el diseño de referencia.

## 🚀 Tecnologías Utilizadas

- **Framework**: [Next.js](https://nextjs.org/) (React 19, App Router)
- **Estilos**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Iconografía**: Iconos vectoriales SVG limpios inspirados en Lucide/Heroicons
- **Interactividad**: React Hooks (`useState`), tooltips dinámicos flotantes al hacer hover y controles de calendario

---

## 📋 Características y Componentes del Dashboard

### 1. Menú Lateral Izquierdo (Sidebar)
- **Logotipo Flex**: Icono hexagonal amarillo con letra "R" y tipografía `flex`.
- **Navegación Interactiva**:
  - `Dashboard` (activo por defecto con fondo morado/azul y sombra difuminada).
  - `Pedidos`, `Productos`, `Marketing` con flechas desplegables indicativas.
  - `Análisis`.
  - `Mensajes` con indicador numérico verde (`25`).
- **Integraciones**: Accesos rápidos con logotipos a Jira, Slack e Intercom.
- **Cerrar Sesión**: Botón al pie con feedback visual interactivo en hover.

### 2. Encabezado Superior (Header)
- **Barra de Búsqueda**: Estilo redondeado moderno con transición de borde y foco interactivo.
- **Notificaciones**: Campana con indicador luminoso de novedades pendientes.
- **Saldo de Cuenta**: Indicador de balance actual (`$5.456`).
- **Perfil de Usuario**: Saludo `"Hola, Lay"` y avatar con borde gradiente.

### 3. Contenido Principal (Dashboard)
- **Controles Superiores**: Botón de sección activa, selector desplegable simulado `"Este Mes"` y botón interactivo `"Descargar Reporte"`.
- **Tarjetas de Métricas**:
  - **Ventas Totales**: `263k` (+15.6% en verde con flecha ascendente).
  - **Visitantes Totales**: `35k` (-6.2% en rojo con flecha descendente).
  - **Pedidos Totales**: `165k` (+3.5% en verde con flecha ascendente).
- **Sesiones de la Tienda Online**:
  - Resumen métrico de visitantes (`68`) y comparativa de tráfico.
  - Gráfico de curva suave SVG con sombreado y **tooltips interactivos** al pasar el cursor sobre cada nodo.
  - Selector de días interactivo (21 al 25).
- **Banner Promocional**:
  - Módulo degradado en violeta *"¿Necesitas más estadísticas?"* con botón interactivo *"Ir a Pro ahora"* e ilustración réplica.
- **Módulo de Conversión**:
  - Gráfico en medio anillo (semi donut) marcando `58,19%` (+3.5%).
  - Desglose comparativo de **Ingresos** (`$542,317`) y **Gastos** (`$497,456`).

---

## 💻 Instrucciones para Ejecutar en Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir en tu navegador:
   ```
   http://localhost:3000
   ```

4. Para compilar la versión de producción:
   ```bash
   npm run build
   npm run start
   ```

---

*Desarrollado con arquitectura moderna en Next.js y Tailwind CSS.*
