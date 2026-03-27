import * as zod from "zod";

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

const TodoSchema = zod.object({
  id: zod.number(),
  text: zod.string(),
  completed: zod.boolean(),
});

const TaskStateSchema = zod.object({
  toDos: zod.array(TodoSchema),
  toDosLength: zod.number(),
  doneToDosQuantity: zod.number(),
  pendingToDosQuantity: zod.number(),
});

export const getTasksInitialState = (): TaskState => {
  const localStorageState = localStorage.getItem("tasks-state");

  //! Cuidado, porque el objeto pudo haber sido manipulado.
  if (localStorageState) {
    // Validar mediante validador de objetos.
    const result = TaskStateSchema.safeParse(JSON.parse(localStorageState));

    // if (result.error) {
    //   console.error(result.error);
    // } else {
    //   return JSON.parse(localStorageState);
    // }
    if (!result.error) return JSON.parse(localStorageState);
  }

  return {
    toDos: [],
    toDosLength: 0,
    doneToDosQuantity: 0,
    pendingToDosQuantity: 0,
  };
};

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
      const newToDo: ToDo = {
        id: Date.now(),
        text: action.payload,
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
          const editedToDo: ToDo = { ...toDo, completed: !toDo.completed };
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
