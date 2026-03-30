# #03. useOptimistic y useTransition

Ambos son Hooks de React que se utilizan para optimizar la aplicación y mejorar la UX.

## `useOptimistic`

Funciona para actualizar la UI cuando el usuario realiza una acción. Se parece a `useState`, con la diferencia de que el hook que se encuentra enseñando tiene cómo segundo elemento de arreglo una función que llamada `addOptimistic`, donde actualiza el estado conforme uno optimista; este recibe el valor optimista y lo procesa en un callback creado en el hook (llamado `updateFn`).

Como parámetros, estará el estado que se devolverá inicialmente y cuando no haya acción pendiente, y la función que se encarga de devolver un estado optimista. Este callback recibe el estado actual y el parámetro pasado para aplicar el estado optimista. Cabe aclarar que según la documentación de React, este callback debe ser una función pura.

Por ejemplo:

```tsx
const [comments, setComments] = useState<Comment[]>([]);

const [optimisticComments, addOptimisticComment] = useOptimistic(
  comments,
  (currentComments, newCommentText: string): Comment[] => {
    lastOptimisticCommentId.current++;
    return [
      ...currentComments,
      {
        id: lastOptimisticCommentId.current,
        text: newCommentText,
        optimistic: true,
      },
    ];
  }
);

const handleAddComment = async (form: FormData) => {
  // Aplicar el estado optimista:
  addOptimisticComment("Mi comentario");

  // Reiniciar al estado original, modificándolo:
  setComments(...);
};
```

## `useTransition`

Consiste en marcar que se está haciendo un trabajo para que algunos componentes lo indiquen. Así, se evita que la aplicación se bloquee. Es igual al `useState`, pero no recibe parámetros y su método consiste en iniciar una transición, llamado `startTransition`. Este recibe un callback que es el trabajo, mientras se ejecuta, `isPending` (Estado de si está pendiente un trabajo) está en verdadero, de lo contrario, está en falso. Por ejemplo:

```tsx
const [isPending, startTransition] = useTransition();

const handleAddComment = async (form: FormData) => {
  const newMessageText = form.get("post-message");

  startTransition(async () => {
    addOptimisticComment(newMessageText.toString());
    // Petición HTTP.
    await fetch("..."); // ...
  });
};
```
