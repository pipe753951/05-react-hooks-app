import { useEffect, useState } from "react";
import { ProgressBar } from "../shared/components/ProgressBar";

type TrafficLightColor = "red" | "yellow" | "green";

const colorClasses: Record<TrafficLightColor, string> = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const TrafficLightWithEffect = function () {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // if (countdown === 0) {
    //   switch (light) {
    //     case "red":
    //       setLight("green");
    //       break;
    //     case "yellow":
    //       setLight("red");
    //       break;
    //     case "green":
    //       setLight("yellow");
    //       break;
    //   }
    //   setCountdown(5);
    // }

    // console.log(countdown);
    // const intervalId = setInterval(() => {
    //   console.log("setInterval llamado.");
    //   setCountdown((prev) => prev - 1);
    // }, 1000);

    // return () => {
    //   console.log("Cleanup effect.");
    //   clearInterval(intervalId);
    // };
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          setLight((prevLight) => {
            if (prevLight === "red") return "green";
            if (prevLight === "yellow") return "red";
            return "yellow";
          });
          return 5;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => {
      console.log("Cleanup.");
      clearInterval(intervalId);
    };
  }, [countdown, light]);

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
