# 🔒 #06. Rutas privadas con React Router - Usando componentes

Existen distintas maneras de configurar rutas privadas para React Router. Para el modo de información y el declarativo, se puede utilizar el método de rutas protegidas por componente. Este método consiste en entregarle el hijo desde el elemento de la ruta, y analizar si se cumple ciertas condiciones. Si es así, se muestra la ruta, si no, se redirige a otra. Aquí está un ejemplo de este método para autenticación en una aplicación SPA:

```tsx
import { use, type JSX } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router";
interface Props {
  element: JSX.Element;
}
export const PrivateRoute = function ({ element }: Props) {
  const { authStatus } = use(UserContext);
  if (authStatus === "checking") {
    return <div>Cargando</div>;
  } else if (authStatus === "authenticated") {
    return element;
  }
  return <Navigate to="/login" replace />;
};
```

```tsx
import { createBrowserRouter, Navigate } from "react-router";
import { PrivateRoute } from "./PrivateRoute";
import { AboutPage } from "../pages/about/AboutPage";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
export const appRouter = createBrowserRouter([
  { path: "/", element: <AboutPage /> },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage />} />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "*", element: <Navigate to="" /> },
]);
```
