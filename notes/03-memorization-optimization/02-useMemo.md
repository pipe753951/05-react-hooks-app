# 🔧 #02. `useMemo`

`useMemo` es un Hook de React que se encarga de mantener el valor de retorno de un callback entre varias repeticiones de impresión (re-renders). Esto es útil para evitar ejecutar tareas muy pesadas, ya que, sin ello, entre cada impresión se ejecuta la misma tarea pesada de manera “injustificada”. Según el instructor, este problema no ocurre al utilizar el compilador de React y, por tanto, `useMemo` no será necesario.

Este Hook utiliza las dependencias para volver a ejecutar el callback cuando una de ellas se modifica.

Por ejemplo:

```tsx
const myVeryHeavyTaskMessage = useMemo(
  () => veryHeavyTask(repeatTimes),
  [repeatTimes],
);
```
