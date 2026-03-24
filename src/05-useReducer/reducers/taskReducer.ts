interface ToDo {
  id: number;
  text: string;
  completed: boolean;
}

interface TaskState {
  toDos: ToDo[];
  toDosLength: number;
  completedToDosQuantity: number;
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
  switch (action.type) {
    case "ADD_TODO": {
      const newToDoText = action.payload.trim();
      if (!newToDoText) return state;

      const newToDo: ToDo = {
        id: Date.now(),
        text: newToDoText,
        completed: false,
      };

      return { ...state, toDos: [newToDo, ...state.toDos] };
    }

    case "DELETE_TODO":
      return {
        ...state,
        toDos: state.toDos.filter((toDo) => toDo.id !== action.payload),
      };

    case "TOGGLE_TODO": {
      const updatedToDos = state.toDos.map((toDo) => {
        if (toDo.id == action.payload) {
          const editedToDo = toDo;
          editedToDo.completed = !toDo.completed;
          return editedToDo;
        }
        return toDo;
      });

      return { ...state, toDos: updatedToDos };
    }

    default:
      return state;
  }
};
