import { UserContext } from "@/09-useContext/context/userContext";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { useNavigate } from "react-router";

export const ProfilePage = function () {
  const { user, logout } = use(UserContext);
  const navigate = useNavigate();

  const handleLogoutButtonClick = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full">
      <h1 className="h1">Mi perfíl</h1>

      <div className="flex max-w-full max-h-[60vh] px-10 py-5 bg-black rounded-4xl overflow-hidden">
        <pre className="overflow-scroll">
          <code>{JSON.stringify(user, null, 2)}</code>
        </pre>
      </div>

      <Button onClick={handleLogoutButtonClick} variant="destructive">
        Cerrar sesión
      </Button>
    </div>
  );
};
