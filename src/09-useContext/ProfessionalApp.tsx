import { RouterProvider } from "react-router";

import { appRouter } from "./router/app.router";
import { UserContextProvider } from "./context/userContext";

export const ProfessionalApp = function () {
  return (
    <UserContextProvider>
      <div className="app-container">
        <RouterProvider router={appRouter} />
      </div>
    </UserContextProvider>
  );
};
