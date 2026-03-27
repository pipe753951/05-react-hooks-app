# #01. La memorización

Según el instructor, antes de la versión 19.1 de React existe en problema, cuando se actualiza un estado, los componentes que no tienen nada que ver con el estado se actualizan. Además, cuándo se actualiza un componente, las funciones y métodos que no están envueltos se vuelven a crear, apuntando a un nuevo espacio en memoria; y como esto sucede, los componentes que utilizan estos métodos y funciones se vuelven a imprimir en pantalla, aunque sean los mismos.

React compiler resuelve este problema, dice el instructor. Sin embargo, en las versiones de React donde se presente este problema hay que utilizar herramientas de memorización:

## `React.memo(*component*)`

Este método funciona para devolver un componente de React que sirve para evitar que se vuelva a imprimir cuándo ninguna de las props ha cambiado. Por ejemplo:

```tsx
export const MyTitle = React.memo(function ({ children }: Props) {
  return <h2>{children}</h2>;
});
```

## `useCallback(*callback*)`

Es un hook que funciona para mantener un callback en caché ó igual entre repetidos “procesos de impresora” (o re-renders), funciona para evitar que un componente se reimprima por un callback que se re-declara cada vez que se reimprime su componente padre. Sólo se actualiza con dependencias, al igual que el hook `useEffect`; donde, actualiza la _referencia a la función_ cuándo las dependencias cambian.

Por ejemplo:

```tsx
const handleMyApiCall = useCallback(() => {
  console.log("Llamar a una API - ", subtitle, ".");
}, [subtitle]);
```
