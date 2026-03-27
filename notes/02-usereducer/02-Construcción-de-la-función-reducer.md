# #02. Construcción de la función reducer

Lo que hace una función reducer para determinar un nuevo estado, es utilizar el estado anterior junto con la acción indicada para crear y/o regresar el nuevo estado. Estas funciones deben devolver el mismo tipo de dato del estado actual, además de un estado nuevo en lo posible (si existe una salvedad, tiene que devolver el estado actual). Por ejemplo:

```tsx
interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  toDos: ToDo[];
  toDosLength: number;
  doneToDosQuantity: number;
  pendingToDosQuantity: number;
}

export type TaskAction =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "TOGGLE_TODO"; payload: number };

export const taskReducer = function (
  state: TaskState,
  action: TaskAction,
): TaskState {
  const getDoneAndPendingToDosQuantity = (toDos: ToDo[]) => {
    const doneTodos = toDos.filter((toDo) => toDo.completed).length;
    const pendingTodos = toDos.length - doneTodos;

    return [doneTodos, pendingTodos] as const;
  };

  switch (action.type) {
    case "ADD_TODO": {
      const newToDoText = action.payload.trim();
      if (!newToDoText) return state;

      const newToDo: ToDo = {
        id: Date.now(),
        text: newToDoText,
        completed: false,
      };

      const updatedToDos = [newToDo, ...state.toDos];

      return {
        ...state,
        toDosLength: updatedToDos.length,
        toDos: updatedToDos,
        pendingToDosQuantity: state.pendingToDosQuantity + 1,
      };
    }

    case "DELETE_TODO": {
      const updatedToDos = state.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      );

      const [doneToDos, pendingToDos] =
        getDoneAndPendingToDosQuantity(updatedToDos);

      return {
        toDosLength: updatedToDos.length,
        toDos: updatedToDos,
        doneToDosQuantity: doneToDos,
        pendingToDosQuantity: pendingToDos,
      };
    }

    case "TOGGLE_TODO": {
      const updatedToDos = state.toDos.map((toDo) => {
        if (toDo.id == action.payload) {
          const editedToDo = toDo;
          editedToDo.completed = !toDo.completed;
          return editedToDo;
        }
        return toDo;
      });

      const [doneToDos, pendingToDos] =
        getDoneAndPendingToDosQuantity(updatedToDos);

      return {
        ...state,
        toDos: updatedToDos,
        doneToDosQuantity: doneToDos,
        pendingToDosQuantity: pendingToDos,
      };
    }
  }
};
```
