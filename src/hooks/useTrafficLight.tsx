import { useEffect, useState } from "react";

type TrafficLightColor = "red" | "yellow" | "green";

const colorClasses: Record<TrafficLightColor, string> = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export const useTrafficLight = () => {
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
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

  return {
    // Properties
    countdown,
    light,
    // colorClasses,

    // Computed
    // percentage: (countdown / 5) * 100
    redLightClass: light === "red" ? colorClasses.red : "bg-gray-500",
    yellowLightClass: light === "yellow" ? colorClasses.yellow : "bg-gray-500",
    greenLightClass: light === "green" ? colorClasses.green : "bg-gray-500",

    // Methods
    // ...
  };
};
