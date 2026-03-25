import { useEffect, useReducer, useState } from "react";

import { Plus, Trash2, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { getTasksInitialState, taskReducer } from "./reducers/taskReducer";

export const TasksApp = () => {
  // const [toDos, setToDos] = useState<ToDo[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [state, dispatch] = useReducer(taskReducer, getTasksInitialState());
  useEffect(() => {
    localStorage.setItem("tasks-state", JSON.stringify(state));
  }, [state]);

  const addToDo = () => {
    const newToDoText = inputValue.trim();
    if (!newToDoText) return;

    // const newToDo: ToDo = {
    //   id: Date.now(),
    //   text: newToDoText,
    //   completed: false,
    // };

    // setToDos([newToDo, ...toDos]);
    // setToDos((previousToDos) => [newToDo, ...previousToDos]);

    dispatch({ type: "ADD_TODO", payload: newToDoText });
    setInputValue(String);
  };

  const toggleToDo = (id: number) => {
    // console.log("Cambiar de true a false", id);
    // const updatedToDos = toDos.map((toDo) => {
    //   if (toDo.id == id) {
    //     const editedToDo = toDo;
    //     editedToDo.completed = !toDo.completed;
    //     return editedToDo;
    //   }
    //   return toDo;
    // });
    // setToDos(updatedToDos);
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const deleteToDo = (id: number) => {
    // const updatedToDos = state.toDos.filter((toDo) => toDo.id !== id);
    // setToDos(updatedToDos);
    dispatch({ type: "DELETE_TODO", payload: id });
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") addToDo();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 p-10">
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold text-slate-800 mb-2">
            Lista de Tareas
          </h1>
          <p className="text-slate-600">
            Diseñado para organizar y conseguir hacerlas.
          </p>
        </div>

        <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <Label htmlFor="toDo" className="mb-3">
              Tarea
            </Label>
            <div className="flex gap-2">
              <Input
                id="toDo"
                placeholder="Añade una nueva tarea..."
                value={inputValue}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(event.target.value)
                }
                onKeyDown={handleKeyPress}
                className="flex-1 h-10 border-slate-200 focus:border-slate-400 focus:ring-slate-400"
              />
              <Button
                onClick={addToDo}
                className="text-white h-10 px-5 bg-slate-800 cursor-pointer hover:bg-slate-700"
                aria-label="Add toDo"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {state.toDosLength > 0 && (
          <Card className="mb-6 shadow-lg border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg font-semibold text-slate-700">
                Progreso
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between text-sm text-slate-600 mb-2">
                <span>
                  {state.doneToDosQuantity} de {state.toDosLength} completadas
                </span>
                <span>
                  {Math.round(
                    (state.doneToDosQuantity / state.toDosLength) * 100,
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className="bg-linear-to-r from-green-400 to-green-500 h-2 rounded-full transition-all duration-300 ease-out"
                  style={{
                    width: `${(state.doneToDosQuantity / state.toDosLength) * 100}%`,
                  }}
                />
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="shadow-lg border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-slate-700">
              Mis Tareas
            </CardTitle>
          </CardHeader>
          <CardContent>
            {state.toDos.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-slate-200 rounded-full flex items-center justify-center">
                  <Check className="w-8 h-8 text-slate-600" />
                </div>
                <p className="text-slate-500 font-medium text-lg mb-2">
                  Sin Tareas
                </p>
                <p className="text-slate-500 text-sm">
                  Empieza añadiendo tu primera tarea.
                </p>
              </div>
            ) : (
              <div className="space-y-2">
                {state.toDos.map((toDo) => (
                  <div
                    key={toDo.id}
                    className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                      toDo.completed
                        ? "bg-slate-50 border-slate-200"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <Checkbox
                      checked={toDo.completed}
                      onCheckedChange={() => toggleToDo(toDo.id)}
                      className="data-[state=checked]:bg-green-500 data-[state=checked]:border-green-500"
                    />
                    <span
                      className={`flex-1 transition-all duration-200 ${
                        toDo.completed
                          ? "text-slate-500 line-through"
                          : "text-slate-800"
                      }`}
                    >
                      {toDo.text}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => deleteToDo(toDo.id)}
                      className="text-slate-400 hover:text-red-500 hover:bg-red-50 h-8 w-8 p-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
