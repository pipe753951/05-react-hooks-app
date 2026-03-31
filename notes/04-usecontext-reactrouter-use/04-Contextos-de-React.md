# #04. 📻 Contextos de React

Los contextos de React son piezas que permiten proveer comportamientos y/o estados a múltiples componentes, sin tener que usar las _props_. Se crean con la función `createContext`, donde se indica como parámetro el contexto. En TypeScript, es posible añadirle un genérico a la función para especificar el tipo de contexto.

Los contextos se llaman desde un Proveedor, que es un componente HOC, que pide los componentes hijos y los devuelve de una manera mejorada, en esta caso, para proveerles comportamientos y/o estados. El proveedor tiene el mismo nombre del contexto y viene con el sufijo `Provider` en su nombre.

Aquí está un ejemplo de un contexto de React:

```tsx
import { createContext, useState, type PropsWithChildren } from "react";
import type { User } from "../data/user-fake-data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //* State
  authStatus: AuthStatus;
  user: User | null;

  //* Methods
  login: (userId: number) => boolean;
  logout: VoidFunction;
}

const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = function ({ children }: PropsWithChildren) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    console.log(userId);
    return false;
  };

  const handleLogout = () => {
    console.log("Logout");
  };

  return (
    <UserContext
      value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
```
