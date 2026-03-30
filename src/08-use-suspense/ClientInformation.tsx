import { useEffect } from "react";
import { getUserAction } from "./get-user.action";

interface Props {
  id: number;
}

export const ClientInformation = function ({ id }: Props) {
  useEffect(() => {
    getUserAction(id).then(console.log);
  }, [id]);

  return (
    <div className="app-container">
      <h1 className="h1">Gabriel García Márquez #123</h1>
      <address className="text-xl">Aracataca, Magdalena, Colombia</address>
      <p>Rol del usuaio</p>
    </div>
  );
};
