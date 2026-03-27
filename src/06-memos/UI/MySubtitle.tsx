import { Button } from "@/shared/components/Button";

interface Props {
  children: string;
}

export const MySubtitle = function ({ children }: Props) {
  console.log("MySubtitle re-render");

  return (
    <>
      <h3 className="text-3xl font-medium">{children}</h3>
      <Button className="bg-cyan-500 text-black focus:ring-cyan-500 focus-visible:ring-cyan-500">
        Llamar a función
      </Button>
    </>
  );
};
