import { useState } from "react";
import { Context } from "./useContextHook";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [filterBy, setFilterBy] = useState({
    category: "all",
    price: "all",
    colors: "all",
    company: "all",
    searchTerm: "",
  });

  const hanldeFilterBy = (key: string, value: string) => {
    setFilterBy((filterByObj) => ({ ...filterByObj, [key]: value }));
  };

  return (
    <Context.Provider value={{ hanldeFilterBy, filterBy }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
