import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router";

export const LoginPage = function () {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="h1">Iniciar sesión</h1>

      <form className="text-primary p-4 bg-background rounded-2xl shadow-md">
        <Label htmlFor="user-id" className="text-2xl mb-2">
          ID del usuario
        </Label>
        <Input
          type="number"
          name="user-id"
          id="user-id"
          placeholder="ID del usuario"
          className="my-2"
        />

        <div className="flex gap-4">
          <Button
            type="submit"
            className="text-md p-4 bg-blue-500 rounded-full focus-visible:ring-blue-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:border-none"
          >
            Inicia sesión
          </Button>
          <Link to="/">
            <Button variant="text">Volver al inicio</Button>
          </Link>
        </div>
      </form>
    </div>
  );
};
