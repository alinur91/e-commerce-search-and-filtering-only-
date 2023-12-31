import FilterByCompanyBtns from "./FilterByCompanyBtns";
import ProductsList from "./ProductsList";

const Products = () => {
  return (
    <div className="sm:px-6 py-2 font-semibold">
      <FilterByCompanyBtns />
      <ProductsList />
    </div>
  );
};

export default Products;
