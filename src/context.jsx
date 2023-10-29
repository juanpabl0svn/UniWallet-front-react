import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
export default function Context({ children }) {
  
  const [userData, setUserData] = useState();


  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    } else {
      localStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
