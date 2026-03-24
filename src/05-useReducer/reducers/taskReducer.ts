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

const getPendingToDos = function (toDos: ToDo[]) {
  return toDos.filter((toDo) => !toDo.completed);
};

const getDoneToDos = function (toDos: ToDo[]) {
  return toDos.filter((toDo) => toDo.completed);
};

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

      const updatedToDos = [newToDo, ...state.toDos];

      return {
        ...state,
        toDosLength: updatedToDos.length,
        toDos: updatedToDos,
        pendingToDosQuantity: getPendingToDos(updatedToDos).length,
      };
    }

    case "DELETE_TODO": {
      const updatedToDos = state.toDos.filter(
        (toDo) => toDo.id !== action.payload,
      );

      return {
        toDosLength: updatedToDos.length,
        toDos: updatedToDos,
        pendingToDosQuantity: getPendingToDos(updatedToDos).length,
        doneToDosQuantity: getDoneToDos(updatedToDos).length,
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

      return {
        ...state,
        toDos: updatedToDos,
        pendingToDosQuantity: getPendingToDos(updatedToDos).length,
        doneToDosQuantity: getDoneToDos(updatedToDos).length,
      };
    }

    default:
      return state;
  }
};
