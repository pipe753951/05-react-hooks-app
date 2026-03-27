interface Props {
  children: string;
}

export const MyTitle = function ({ children }: Props) {
  console.log("MyTitle re-render");

  return <h2 className="text-4xl font-semibold">{children}</h2>;
};
