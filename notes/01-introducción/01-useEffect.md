# #01. useEffect

El hook `useEffect` es utilizado para disparar lo que se conoce cómo efectos secundarios. Para crear este hook, se le pasa cómo argumento un callback que se encarga de los efectos secundarios, y un arreglo de dependencias, que indican con qué valores o estados se va a disparar el efecto. Por ejemplo:

```tsx
useEffect(() => {
  if (countdown === 0) return;
  console.log(countdown);
  const intervalId = setInterval(() => {
    console.log("setInterval llamado.");
    setCountdown((prev) => prev - 1);
  }, 1000);
  return () => {
    console.log("Cleanup effect.");
    clearInterval(intervalId);
  };
}, [countdown]);
```

## El problema de `useEffect`

Hay que conocer bien este efecto para evitar efectos secundarios. Debido a los eventos que provocan una llamada a `useEffect`, si no se cancela ciertas funcionalidades, entonces sucederá eventos inesperados. En el ejemplo anterior, que es un contador de segundos, si no se hubiera cancelado el intervalo con la función cleanup (Función que se llama antes de llamar el efecto o eliminar el componente), y ni siquiera se cancela la ejecución del evento con comparar el contador con cero (cosa que nunca pasará en el caso); el efecto entrará en un incremento muy grande que a medida que sucede, el incremento aumenta.

Entonces, para evitarlo, se utiliza el cleanup, que permite evitar efectos inesperados, en este caso, evitar el incremento innecesario y peligroso para el rendimiento de un ordenador; cancelando el intervalo definido.
