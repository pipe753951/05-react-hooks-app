import { Button } from "@/shared/components/Button";
import React from "react";

interface Props {
  children: string;
}

export const MySubtitle = React.memo(function ({ children }: Props) {
  console.log("MySubtitle re-render");

  console.log("¡Tarea muy pesada!");

  return (
    <>
      <h3 className="text-3xl font-medium">{children}</h3>
      <Button className="bg-cyan-500 text-black focus:ring-cyan-500 focus-visible:ring-cyan-500">
        Llamar a función
      </Button>
    </>
  );
});
