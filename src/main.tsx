import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";

// Part #02 - introduction
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { LoremPicsumPage } from "./03-examples/LoremPicsumPage";
// import { FocusScreen } from "./04-useRef/FocusScreen";

// Part #02 - useReducer
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";

// Part #02 - memorizations and optimizations
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";

import "./index.css";
import { QuickPhotoApp } from "./07-useOptimistic/QuickPhotoApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster richColors />
    <QuickPhotoApp />
  </StrictMode>,
);
