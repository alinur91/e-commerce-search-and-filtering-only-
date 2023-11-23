import { createContext, useContext } from "react";
import { FilterByTypes } from "../types";

interface FilterByContextType {
  filterBy: FilterByTypes;
  hanldeFilterBy: (key: string, value: string) => void;
}

export const Context = createContext<FilterByContextType>({
  hanldeFilterBy: () => undefined,
  filterBy: {
    category: "All",
    price: "All",
    colors: "All",
    company: "All",
    searchTerm: "",
  },
});

export const useContextHook = () => {
  return useContext(Context);
};
