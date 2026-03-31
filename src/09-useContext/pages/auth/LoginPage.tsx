import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

import { MessageCircleWarningIcon, X } from "lucide-react";

import { UserContext } from "@/09-useContext/context/userContext";

export const LoginPage = function () {
  const { login } = useContext(UserContext);
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event: React.SubmitEvent) => {
    event.preventDefault();

    const result = login(+userId);
    console.log({ result });

    if (!result) {
      toast.error("Usuario no encontrado", {
        position: "top-right",
        classNames: {
          icon: "size-6!",
          content: "flex-1",
        },
        icon: <MessageCircleWarningIcon />,
        action: (
          <button
            onClick={() => toast.dismiss()}
            className="bg-red-500 text-white p-2 shadow-md rounded-full cursor-pointer transition-shadow duration-300 ease-in-out outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white/80 focus:ring-red-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white/80 focus-visible:ring-red-500 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            <X size={20} />
          </button>
        ),
      });
      return;
    }

    navigate("/profile");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="h1">Iniciar sesión</h1>

      <form
        onSubmit={handleSubmit}
        className="text-primary p-4 bg-background rounded-2xl shadow-md"
      >
        <Label htmlFor="user-id" className="text-2xl mb-2">
          ID del usuario
        </Label>
        <Input
          type="number"
          value={userId}
          onChange={(event) => setUserId(event.target.value)}
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
