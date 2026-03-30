export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async function (id: number): Promise<User> {
  console.log("Función llamada.");

  await new Promise((resolve) => setTimeout(resolve, 2000));

  console.log("Función resuelta.");

  return {
    id,
    name: "Gabriel García Márquez",
    location: "Aracataca, Magdalena, Colombia",
    role: "Escritor",
  };
};
