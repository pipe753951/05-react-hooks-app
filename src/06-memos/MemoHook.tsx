import { Button } from "@/shared/components/Button";
import { MyTitle } from "./UI/MyTitle";
import { useCallback, useState } from "react";
import { MySubtitle } from "./UI/MySubtitle";

export const MemoHook = function () {
  const [title, setTitle] = useState("Mi título");
  const [subtitle, setSubtitle] = useState("Mi subtítulo");

  // const handleMyApiCall = () => {
  // console.log("Llamar a una API.");
  // };

  const handleMyApiCall = useCallback(() => {
    console.log("Llamar a una API - ", subtitle, ".");
  }, [subtitle]);

  return (
    <div className="app-container gap-4">
      <h1 className="text-5xl font-bold">MemoApp</h1>

      {/* <h2>Mi título</h2> */}
      <MyTitle>{title}</MyTitle>
      <MySubtitle onCallApi={handleMyApiCall}>{subtitle}</MySubtitle>

      <div className="flex gap-4">
        <Button
          onClick={() => setTitle(`Otro título ${new Date().getTime()}`)}
          className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
        >
          Cambiar título
        </Button>
        <Button
          onClick={() => setSubtitle(`Otro subtítulo ${new Date().getTime()}`)}
          className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
        >
          Cambiar subtítulo
        </Button>
      </div>
    </div>
  );
};
