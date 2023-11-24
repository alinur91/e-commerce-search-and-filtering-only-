import { useContextHook } from "../context/useContextHook";
import { data } from "../data";
import { FilterBy, ProductType } from "../types";
import Icon from "./Icon";

const ProductsList = () => {
  const { filterBy } = useContextHook();

  const handleFilter = (
    filteredValue: string,
    product: ProductType,
    filterBy: FilterBy
  ) => {
    if (filteredValue === "all" || filteredValue === "All Products")
      return true;
    if (filterBy === FilterBy.category)
      return product.category === filteredValue;
    else if (filterBy === FilterBy.color)
      return product.color === filteredValue;
    else if (filterBy === FilterBy.company)
      return product.company === filteredValue;
  };

  const handleSearchTerm = (title: string, searchTerm: string) =>
    !searchTerm || title.toLowerCase().includes(searchTerm.toLowerCase());

  const handleFilterByPrice = (price: string, searchingPrice: string) => {
    const priceStrToNumber = parseInt(price);
    let min = 0;
    let max = 150;
    if (searchingPrice === "all") return true;
    if (searchingPrice.includes("Over $150")) return priceStrToNumber > max;
    const stringWithout$ = searchingPrice.replace(/[$]/g, "");
    [min, max] = stringWithout$.split("-").map(Number);
    const isPriceBetweenValidRange = isProductsPriceBetweenTheRange(
      min,
      max,
      priceStrToNumber
    );
    return isPriceBetweenValidRange;
  };

  const isProductsPriceBetweenTheRange = (
    min: number,
    max: number,
    productsPrice: number
  ) => min < productsPrice && productsPrice <= max;

  const filteredProducts = data.filter(
    (product) =>
      handleFilter(filterBy.category, product, FilterBy.category) &&
      handleFilter(filterBy.colors, product, FilterBy.color) &&
      handleFilter(filterBy.company, product, FilterBy.company) &&
      handleSearchTerm(product.title, filterBy.searchTerm) &&
      handleFilterByPrice(product.newPrice, filterBy.price)
  );

  if (filteredProducts.length === 0)
    return (
      <>
        <h1 className="text-6xl p-5 text-red-600	font-bold">Oops!</h1>
        <h3>No products found...</h3>
      </>
    );

  return (
    <div className="p-5 flex flex-wrap gap-8">
      {filteredProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="w-[250px] h-[280px] border-[1px] border-gray-200 border-solid p-8 "
          >
            <img
              className="h-[100px] w-full object-contain hover:scale-125"
              src={product.img}
              alt=""
            />
            <h3 className="py-3">{product.title}</h3>
            <div className="flex items-center pb-[1px]">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i}>{product.star}</div>
              ))}
              <h4 className="font-thin ">{product.reviews}</h4>
            </div>
            <div className="flex items-center justify-between">
              <div className="font-normal">
                <span className="line-through ">{product.prevPrice}</span> $
                {product.newPrice},00
              </div>
              <Icon name="lock" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
