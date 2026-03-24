import { useState } from "react";

export const useCounter = function (initialValue: number = 0) {
  const [counter, setCounter] = useState(initialValue);

  const increase = () => {
    setCounter(counter + 1);
  };
  const reduce = () => {
    if (counter <= 0) return;
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
