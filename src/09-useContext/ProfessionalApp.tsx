import { RouterProvider } from "react-router";
import { appRouter } from "./router/app.router";

export const ProfessionalApp = function () {
  return (
    <div className="app-container">
      <RouterProvider router={appRouter} />
    </div>
  );
};
