# #03. Usar `useReducer`

Para utilizar el hook `useReducer` con una función reducer, se hace de una manera parecida al hook `useState`; donde se desestructura el estado y una función _dispatcher_, para cambiar el estado). La diferencia está en que el hook recibe dos argumentos: el reducer y el estado inicial. Este hook sigue la siguiente estructura:

```tsx
  const [state, dispatch] = useReducer(*state*Reducer, initialState());
```

> **💡 Nota:** Hay que anotar que al colocar el estado inicial, es posible colocar el estado directamente o una función que devuelve el estado. Esta última es práctica que aplica el instructor.

> **⚠️ Advertencia:** Hay gente que inicia el estado del reducer directamente allí, y no desde el hook. Esta práctica es desaconsejable para el instructor, porque, según el, el estado no debe establecerse directamente en el reducer, sino únicamente en el hook.

## Usar el dispatcher

Para utilizar el dispatcher se utiliza cómo argumento la acción indicada en la función reducer. A continuación se presenta un ejemplo para una función reducer que aplica una acción tipo objeto:

```tsx
dispatch({ type: "ADD_TODO", payload: newToDoText });
```
