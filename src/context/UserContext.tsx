import React, { createContext, useState, ReactNode, useEffect } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  followers: any;
  followings: any;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const initUser = localStorage.getItem("user");
    if (!initUser) return;
    setUser(JSON.parse(initUser));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
