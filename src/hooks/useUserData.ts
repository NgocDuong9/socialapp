import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const useUserData = () => {
  const authContextValue = useContext(UserContext);
  if (!authContextValue) {
    throw new Error("Forgot to wrap component in AuthContext");
  }
  return authContextValue;
};
