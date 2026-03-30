export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async function (id: number): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    id,
    name: "Gabriel García Márquez",
    location: "Aracataca, Magdalena, Colombia",
    role: "Escritor",
  };
};
