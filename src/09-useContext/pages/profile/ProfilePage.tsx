import { Button } from "@/components/ui/button";

export const ProfilePage = function () {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="h1">Mi perfíl</h1>

      <pre>{JSON.stringify({}, null, 2)}</pre>

      <Button variant="destructive">Salir</Button>
    </div>
  );
};
