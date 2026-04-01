# #05. 📻 useContext y use

`useContext` es un Hook de React que permite acceder a la información de un contexto disponible a un hijo. Mientras tanto, la API `use`, también permite acceder a la información de un contexto de manera más flexible (Véase sección anterior). La última opción se puede utlilizar en versiones iguales o superiores a la 19 de React; sin embargo, es recomendada ya que no tiene tantas restricciones cómo `useContext`. Por ejemplo:

```tsx
const { authStatus } = useContext(UserContext);
const { authStatus } = use(UserContext);
```
