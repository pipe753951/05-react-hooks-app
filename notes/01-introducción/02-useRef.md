# #02. `useRef`

`useRef` es un hook que permite tener una variable o referencia que no provoca la re-generación de un componente al ser cambiada. Para utilizarlo, se crea una constante que llama al hook. Por ejemplo:

```tsx
const inputRef = useRef("data");
```

## Uso con elementos HTML

Es posible utilizar `useRef` para elementos HTML, para ello, se utiliza el hook con `null` como valor por defecto, y se establece en el elemento deseado con el atributo `ref`. En TypeScript, el hook es genérico, por lo que se puede establecer tipado estricto para restringir el hook al elemento deseado. Por ejemplo:

```tsx
export const FocusScreen = function () {
  const inputRef = useRef < HTMLInputElement > null;
  const handleClick = () => {
    console.log(inputRef.current?.value);
  };
  return (
    <>
      <label htmlFor="focus">
        Input: <input ref={inputRef} type="text" id="focus" />
      </label>
      <Button onClick={handleClick}> Set focus </Button>
    </>
  );
};
```
