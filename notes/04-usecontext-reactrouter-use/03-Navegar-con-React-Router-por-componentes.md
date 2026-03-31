# ↗️ #03. Navegar con React Router por componentes

Existen dos formas para navegar con React Router, por lo menos en el modo de información: Usar componentes o usar código JavaScript que haga la navegación. El instructor menciona que ambas son necesarias de aprender.

El motivo de la existencia de estas rutas es aplicar la funcionalidad propia de React Router, porque, si se utiliza la navegación tradicional con las etiquetas `<a>`, entonces toda la página se recarga. Las rutas de React Router evitan que toda la página se recargue, cargando únicamente el componente.

Para hacer la navegación por componentes, hay que utilizar el componente `Link`, junto con la _prop_ `to` donde se indica la ruta deseada. Por ejemplo:

```tsx
<Link to="/">Inicio</Link>
```
