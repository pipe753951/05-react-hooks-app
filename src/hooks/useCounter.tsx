import { useState } from "react";

export const useCounter = function (initialValue: number = 1) {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    setCounter(counter + 1);
  };
  const reduce = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  };

  return {
    // Properties
    counter,

    // Methods
    increase,
    reduce,
  };
};
