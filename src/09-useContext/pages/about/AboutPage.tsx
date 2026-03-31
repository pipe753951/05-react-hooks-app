import { UserContext } from "@/09-useContext/context/userContext";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { Link } from "react-router";

export const AboutPage = function () {
  const { authStatus } = use(UserContext);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="h1">Acerca de...</h1>

      <div className="flex gap-2">
        {authStatus === "authenticated" ? (
          <>
            <Link
              to="/profile"
              className="underline hover:text-blue-300 focus:text-blue-300 "
            >
              <Button>Mi perfíl</Button>
            </Link>
            <Link
              to="/login"
              className="underline hover:text-blue-300 focus:text-blue-300 "
            >
              <Button variant="destructive">Cerrar sesión</Button>
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="underline hover:text-blue-300 focus:text-blue-300 "
            >
              <Button>Inicia sesión</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
