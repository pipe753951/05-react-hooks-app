import { Link } from "react-router";

export const AboutPage = function () {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="h1">Acerca de...</h1>

      <div className="flex flex-col gap-2">
        <Link
          to="/profile"
          className="underline hover:text-blue-300 focus:text-blue-300 "
        >
          Mi perfíl
        </Link>
        <Link
          to="/login"
          className="underline hover:text-blue-300 focus:text-blue-300 "
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
};
