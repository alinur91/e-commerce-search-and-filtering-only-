import { createContext, useContext } from "react";
import { FilterByTypes } from "../types";

interface FilterByContextType {
  filterBy: FilterByTypes;
  hanldeFilterBy: (key: string, value: string) => void;
  toggleShowSideBar: () => void;
  showSideBar: boolean;
}

export const Context = createContext<FilterByContextType>({
  hanldeFilterBy: () => undefined,
  toggleShowSideBar: () => undefined,
  filterBy: {
    category: "All",
    price: "All",
    colors: "All",
    company: "All",
    searchTerm: "",
  },
  showSideBar: false,
});

export const useContextHook = () => {
  return useContext(Context);
};
