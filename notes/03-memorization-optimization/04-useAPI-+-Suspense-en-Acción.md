# #04. useAPI + `<Suspense>` en Acción

## Por un lado, `<Suspense>`

De acuerdo con la [documentación de React](https://es.react.dev/reference/react/Suspense), “[…] permite mostrar una interfaz alternativa o _fallback_ hasta que sus hijos hayan terminado de cargar.”. Según la guía de atajos del instructor, si hay varios hijos que hay que mostrarse bajo demanda, se debe colocar varios `Suspense` en los hijos. Por ejemplo:

```tsx
<Suspense fallback={<BigSpinner />}>
  <Biography />
  <Suspense fallback={<AlbumsGlimmer />}>
    <Panel>
      <Albums />
    </Panel>
  </Suspense>
</Suspense>
```

## Por otro… use API _(No es un hook)_

“`use` es una API de React que […] permite leer el valor de un recurso cómo una Promesa o contexto [Ver en https://es.react.dev/reference/react/use]”, según la [documentación de React](https://es.react.dev/reference/react/use). Se usa en conjunto con `Suspense`, porque `use` espera que se reciba y/o cumpla lo enviado por su parámetro para seguir ejecutando el flujo del componente.

### El tema de las promesas

`use` presenta problemas con las promesas sí se llaman desde el componente, esto se debe a que la promesa se llama cada vez que se imprime el componente. Por lo que, cuando la promesa devuelve un resultado, el componente se vuelve a “imprimir”, llama la promesa otra vez, y se queda el componente en lo mismo, porque entra en un ciclo repetitivo.

Para evitar el error, la promesa no se debe volver a llamar. Para lograrlo, debe estar fuera del componente, para que, cuando la promesa se resuelva, `use` vuelva a imprimir el componente y, como ya está resuelta la promesa, el componente seguirá su flujo normal. Se puede llamar la promesa en el mismo script del componente pero fuera del componente ó, dentro de las _Props_.

## Ejemplo

```tsx
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<h1 className="h1">Cargando...</h1>}>
      <ClientInformation getUser={getUserAction(1000)} />
    </Suspense>
  </StrictMode>,
);
```

```tsx
import { use, type Usable } from "react";
import type { User } from "./get-user.action";

interface Props {
  getUser: Usable<User>;
}

export const ClientInformation = function ({ getUser }: Props) {
  const user = use(getUser);
  return (
    <div className="app-container">
      <h1 className="h1">
        {user.name} #{user.id}
      </h1>
      <address className="text-xl">{user.location}</address> <p>{user.role}</p>
    </div>
  );
};
```
