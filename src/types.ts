import { ReactNode } from "react";

export type FiltersType = {
  category: string[];
  price: string[];
  colors: string[];
};

export type FilterByTypes = {
  category: string;
  price: string;
  colors: string;
  company: string;
  searchTerm: string;
};

export type ProductType = {
  img: string;
  title: string;
  star: ReactNode;
  reviews: string;
  prevPrice: string;
  newPrice: string;
  company: string;
  color: string;
  category: string;
};
