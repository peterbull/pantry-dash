import { createContext, useState } from "react";

export const GuestContext = createContext();

export const GuestProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  return (
    <GuestContext.Provider value={{ items, setItems }}>
      {children}
    </GuestContext.Provider>
  );
};
