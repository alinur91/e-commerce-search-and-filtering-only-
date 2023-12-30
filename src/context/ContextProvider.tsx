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

  const [showSideBar, setShowSideBar] = useState(false);

  const hanldeFilterBy = (key: string, value: string) => {
    setFilterBy((filterByObj) => ({ ...filterByObj, [key]: value }));
  };

  const toggleShowSideBar = () => setShowSideBar((val) => !val);

  return (
    <Context.Provider
      value={{ hanldeFilterBy, filterBy, showSideBar, toggleShowSideBar }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
