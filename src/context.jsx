import { useContext, createContext, useState, useEffect } from "react";
import { hasASession } from "./services/localStorage";

const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
export default function Context({ children }) {
  const [userData, setUserData] = useState();

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
