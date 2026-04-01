import { use, type JSX } from "react";
import { UserContext } from "../context/userContext";
import { Navigate } from "react-router";

interface Props {
  element: JSX.Element;
}

export const PrivateRoute = function ({ element }: Props) {
  const { authStatus } = use(UserContext);

  if (authStatus === "checking") {
    return <div>Cargando</div>;
  } else if (authStatus === "authenticated") {
    return element;
  }

  return <Navigate to="/login" replace />;
};
