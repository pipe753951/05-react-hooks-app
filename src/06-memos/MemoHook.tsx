import { Button } from "@/shared/components/Button";
import { MyTitle } from "./UI/MyTitle";
import { useState } from "react";
import { MySubtitle } from "./UI/MySubtitle";

export const MemoHook = function () {
  const [title, setTitle] = useState("Mi título");
  const [subtitle, setSubtitle] = useState("Mi subtítulo");

  return (
    <div className="app-container gap-4">
      <h1 className="text-5xl font-bold">MemoApp</h1>

      {/* <h2>Mi título</h2> */}
      <MyTitle>{title}</MyTitle>
      <MySubtitle>{subtitle}</MySubtitle>

      <div className="flex gap-4">
        <Button className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500">
          Cambiar título
        </Button>
        <Button className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500">
          Cambiar subtítulo
        </Button>
      </div>
    </div>
  );
};
