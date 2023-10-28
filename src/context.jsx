import { useContext, createContext, useState, useEffect } from "react";

const UserContext = createContext({});

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);

export default function Context({ children }) {
  const [userData, setUserData] = useState();

  useEffect(() => {
    setUserData({
      id: "1000412540",
      name: "Juan Pablo Sanchez",
      mail: "juanpablo@gmail.com",
      movements: [
        {
          id: crypto.randomUUID(),
          type: 0,
          amount: 1000,
          points: 1000 * 0.001,
          from: "me",
          to: "tabo",
          date: new Date("Jul 12 2011"),
        },
        {
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },
        {
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },{
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },
        {
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },{
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },
        {
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },{
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        },
        {
          id: crypto.randomUUID(),
          type: 1,
          amount: 2000,
          points: 2000 * 0.001,
          from: "tabo",
          to: "me",
          date: new Date("Jul 12 2011"),
        }
      ],
      currency: 5000,
      points: 2000,
      loan: 0,
    });
  }, []);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
}
