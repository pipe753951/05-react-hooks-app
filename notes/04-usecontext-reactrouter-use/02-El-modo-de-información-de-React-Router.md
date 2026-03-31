# #02. 💡 El modo de información de React Router

## Preparación en Vite

El modo de información de React Router se configura añadiendo instalando el paquete `react-router` al proyecto para que, luego, se añada una configuración.

El proceso de configuración consiste en: configurar rutas, y pasarlas a un componente proveedor (Que provee información) llamado `RouterProvider` a través de la _prop_ `route`.

## Configuración de rutas

Las rutas en React Router con el modo de información se configuran utilizando la función `createBrowsetRouter`, donde se le indica como parámetro un arreglo con todas las rutas deseadas. Una ruta es un objeto que tiene la dirección (_path_) y el componente a donde se dirige aquella ruta, además de otras propiedades. Con esto, aquí se indica un ejemplo de cómo utilizar React Router.

```tsx
export const appRouter = createBrowserRouter([
  { path: "/", element: <AboutPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/login", element: <LoginPage /> },
]);
```

> **💡 Nota:** Es posible crear una ruta que redirija a otra, para ello, se indica en la ruta deseada la dirección deseada (Se puede indicar un asterisco para indicar que puede ser cualquier dirección), y como componente `Navigate` con la ruta a la que se desea redirigir como _prop_.
