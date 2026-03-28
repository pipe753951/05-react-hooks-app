import { useCounter } from "@/hooks/useCounter";
import { Button } from "@/shared/components/Button";
import { useMemo } from "react";

const veryHeavyTask = function (repeatInterationTimes: number) {
  console.time("heavy_task");

  for (let timeCount = 0; timeCount < repeatInterationTimes; timeCount++) {
    // console.log(`Interation time #${timeCount} done.`);
    console.log("App is doing a interation...");
  }

  console.timeEnd("heavy_task");

  return `${repeatInterationTimes} interation times done.`;
};

export const MemoCounter = function () {
  const { counter, increase } = useCounter(40000);
  const { counter: counter2, increase: increase2 } = useCounter(10);

  const myVeryHeavyTaskMessage = useMemo(
    () => veryHeavyTask(counter),
    [counter],
  );
  console.log(myVeryHeavyTaskMessage);

  return (
    <div className="app-container">
      <h1 className="h1">
        Memory - <code>{myVeryHeavyTaskMessage}</code>
      </h1>

      <p>
        <code>counter:</code> {counter}
      </p>
      <p>
        <code>counter2:</code> {counter2}
      </p>

      <Button
        onClick={increase}
        className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
      >
        +1
      </Button>
      <Button
        onClick={increase2}
        className="bg-blue-500 text-black focus:ring-blue-500 focus-visible:ring-blue-500"
      >
        +1 (<code className="italic">counter 2</code>)
      </Button>
    </div>
  );
};
