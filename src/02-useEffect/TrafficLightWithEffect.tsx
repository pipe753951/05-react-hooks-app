import { useEffect, useState } from "react";

type TrafficLightColor = "red" | "yellow" | "green" | "gray";

const colorClasses: Record<TrafficLightColor, string> = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
  gray: "bg-gray-500",
};

export const TrafficLightWithEffect = function () {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    if (countdown === 0) return;

    console.log(countdown);
    const intervalId = setInterval(() => {
      console.log("setInterval llamado.");
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      console.log("Cleanup effect.");
      clearInterval(intervalId);
    };
  }, [countdown]);

  return (
    <div className="app-container">
      <div className="flex items-center justify-center gap-20">
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
        <div className="max-w-100">
          <h1 className="text-white text-5xl font-bold mb-7">
            Semáforo con useEffect
          </h1>
          <span className="text-white text-2xl px-4 py-2 bg-slate-950 rounded-xl">
            Conteo: {countdown}
          </span>
        </div>
      </div>
    </div>
  );
};
