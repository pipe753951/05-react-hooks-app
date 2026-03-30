import { use, type Usable } from "react";
// import { getUserAction } from "./get-user.action";
import type { User } from "./get-user.action";

interface Props {
  getUser: Usable<User>;
}

// const userPromise = getUserAction(1);

export const ClientInformation = function ({ getUser }: Props) {
  // const user = use(userPromise);
  const user = use(getUser);

  return (
    <div className="app-container">
      <h1 className="h1">
        {user.name} #{user.id}
      </h1>
      <address className="text-xl">{user.location}</address>
      <p>{user.role}</p>
    </div>
  );
};
