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
  return {};
};
