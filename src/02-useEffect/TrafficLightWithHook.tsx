import { ProgressBar } from "../shared/components/ProgressBar";
import { colorClasses, useTrafficLight } from "../hooks/useTrafficLight";

export const TrafficLightWithHook = function () {
  const { light, countdown } = useTrafficLight();

  return (
    <div className="app-container">
      <div className="flex items-center justify-center gap-20">
        <div className="flex flex-col items-center gap-8 p-5 bg-slate-950 rounded-4xl">
          <div
            className={`w-32 h-32 ${light === "red" ? colorClasses.red : "bg-gray-500"} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>
          <div
            className={`w-32 h-32 ${light === "yellow" ? colorClasses.yellow : "bg-gray-500"} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>
          <div
            className={`w-32 h-32 ${light === "green" ? colorClasses.green : "bg-gray-500"} rounded-full transition-colors duration-200 ease-in-out`}
          ></div>
        </div>
        <div className="max-w-100">
          <h1 className="text-white text-5xl font-bold mb-7">
            Semáforo con useEffect
          </h1>
          <mark className="text-2xl block px-4 py-2 w-fit bg-slate-950 rounded-xl text-white">
            Conteo: {countdown}
          </mark>

          <ProgressBar value={countdown} max={5} label="Counter" />
        </div>
      </div>
    </div>
  );
};
