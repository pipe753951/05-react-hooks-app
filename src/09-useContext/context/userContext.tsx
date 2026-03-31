import { createContext, useState, type PropsWithChildren } from "react";
import { users, type User } from "../data/user-fake-data";

type AuthStatus = "checking" | "authenticated" | "not-authenticated";

interface UserContextProps {
  //* State
  authStatus: AuthStatus;
  user: User | null;

  //* Methods
  login(userId: number): boolean;
  logout(): void;
}

export const UserContext = createContext({} as UserContextProps);

export const UserContextProvider = function ({ children }: PropsWithChildren) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (userId: number): boolean => {
    const userGoingToLogIn = users.find(
      (userToFind) => userToFind.id === userId,
    );

    if (!userGoingToLogIn) {
      console.error(`The user with ID #${userId} was not found.`);
      setUser(null);
      setAuthStatus("not-authenticated");
      return false;
    }

    setUser(userGoingToLogIn);
    setAuthStatus("authenticated");
    return true;
  };

  const handleLogout = () => {
    console.log("Logout");
    setUser(null);
    setAuthStatus("not-authenticated");
  };

  return (
    <UserContext
      value={{
        authStatus,
        user,
        login: handleLogin,
        logout: handleLogout,
      }}
    >
      {children}
    </UserContext>
  );
};
