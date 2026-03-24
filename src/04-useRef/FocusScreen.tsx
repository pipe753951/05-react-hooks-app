import { useRef } from "react";
import { Button } from "../shared/components/Button";

export const FocusScreen = function () {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    console.log(inputRef.current?.value);
  };

  return (
    <div className="app-container gap-4">
      <h1 className="text-white text-5xl font-bold">Pantalla de foco</h1>
      <label htmlFor="focus" className="flex items-center gap-4">
        Input:
        <input
          ref={inputRef}
          type="text"
          className="bg-white text-black px-4 py-2 rounded-xl outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-950 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          name="Focus input"
          id="focus"
        />
      </label>
      <Button
        onClick={handleClick}
        className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
      >
        Set focus
      </Button>
    </div>
  );
};
