# ⚠️ #04. ¡No utilizes estados mutados!

Según las reglas de los reducers de React, se debe devolver un nuevo estado, no uno mutado. Esto es, según la documentación React, porque el estado es sólo de lectura ([Ver. documentación](https://es.react.dev/reference/react/useReducer#writing-the-reducer-function)). puede usar el operador _spread_ para cumplir esta regla. Por ejemplo:

```jsx
function wrongReducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      // 🚩 No mutes un objeto del estado, como se hace de esta forma:
      state.age = state.age + 1;
      return state;
    }
  }
}

function correctReducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      // ✅ En cambio, devuelve un nuevo objeto, más o menos de esta forma:
      return {
        ...state,
        age: state.age + 1,
      };
    }
  }
}
```
