//* Part #03 - Memorizations and optimizations.
// import { StrictMode, Suspense } from "react";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Toaster } from "sonner";

//* Part #01 - Introduction.
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { LoremPicsumPage } from "./03-examples/LoremPicsumPage";
// import { FocusScreen } from "./04-useRef/FocusScreen";

//* Part #02 - useReducer.
// import { TasksApp } from "./05-useReducer/TaskApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";

//* Part #03 - Memorizations and optimizations.
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { QuickPhotoApp } from "./07-useOptimistic/QuickPhotoApp";
// import { ClientInformation } from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/get-user.action";

//* Part #04 - useContext, React Router and use API.
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* Part #03 - Memorizations and optimizations. */}
    {/* <Suspense fallback={<h1 className="h1">Cargando...</h1>}>
      <ClientInformation getUser={getUserAction(1000)} />
      </Suspense> */}

    <Toaster richColors />
    <ProfessionalApp />
  </StrictMode>,
);
