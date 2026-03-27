# #01. `useReducer`

Un reducer es una función que siempre regresa un estado nuevo o un valor. Esta función es pura, es decir, devuelve el mismo resultado para los mismos argumentos en los argumentos sin causar efectos secundarios. En el caso de el reducer, resuelve un nuevo estado basado en los argumentos, que son:

1. El estado actual (o anterior antes de los cambios de hook)
2. Una acción, que se compone de la siguiente estructura:
   1. El tipo de acción.
   2. Un payload, que es la información que se pasa a la acción.

Tanto el estado como la acción son objetos. No existe reglas para definir el estado actual, pero sí para el payload, especialmente con TypeScript.

Con el payload, la estructura debe tener más o menos el siguiente tipado (siguiendo sugerencias del instructor):

```ts
export type TaskAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "EDIT_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number };
```

## Ejemplo

```tsx
interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  toDos: TaskState[];
  toDosLength: number;
  completedToDosQuantity: number;
  pendingToDosQuantity: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "DELETE_TODO"; payload: number };

export const taskReducer = function (
  state: TaskState,
  action: TaskAction,
): TaskState {
  // ...
};
```
