import { useState } from "react";
import { Button } from "../shared/components/Button";

type TrafficLightColor = "red" | "yellow" | "green" | "gray";
// type TrafficLightColor = keyof typeof colorClasses;

const colorClasses: Record<TrafficLightColor, string> = {
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
  gray: "bg-gray-500",
};

export const TrafficLight = function () {
  const [light, setLight] = useState<TrafficLightColor>("red");

  const handleChangeColor = (newLight: TrafficLightColor) => {
    setLight(newLight);
  };

  return (
    <div className="app-container">
      <div className="flex items-center justify-center gap-8">
        <div className="flex flex-col items-center gap-8 p-5 bg-slate-950 rounded-4xl">
          <div
            className={`w-32 h-32 ${light === "red" ? colorClasses.red : colorClasses.gray} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>

          <div
            className={`w-32 h-32 ${light === "yellow" ? colorClasses.yellow : colorClasses.gray} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>
          <div
            className={`w-32 h-32 ${light === "green" ? colorClasses.green : colorClasses.gray} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>
        </div>
        {/* Botones para cambiar el estado de la luz */}
        <div className="flex gap-2">
          <Button
            onClick={() => handleChangeColor("red")}
            className="bg-red-500  text-black focus:ring-red-500"
          >
            Rojo
          </Button>
          <Button
            onClick={() => handleChangeColor("yellow")}
            className="bg-yellow-500 text-black focus:ring-yellow-500"
          >
            Amarillo
          </Button>
          <Button
            onClick={() => handleChangeColor("green")}
            className="bg-green-500 text-black focus:ring-green-500"
          >
            Verde
          </Button>
        </div>
      </div>
    </div>
  );
};
