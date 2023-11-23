import { useContextHook } from "../context/useContextHook";
import { data } from "../data";
import { ProductType } from "../types";
import Icon from "./Icon";

const ProductsList = () => {
  const { filterBy } = useContextHook();
  console.log(filterBy);
  console.log(data.length);

  const handleFilter = (
    filteredValue: string,
    product: ProductType,
    filterBy: string
  ) => {
    if (filteredValue === "all") return true;
    if (filterBy === "category") return product.category === filteredValue;
    else if (filterBy === "color") return product.color === filteredValue;
  };

  const filteredProducts = data.filter(
    (product) =>
      handleFilter(filterBy.category, product, "category") &&
      handleFilter(filterBy.colors, product, "color")
  );

  console.log(filteredProducts);

  return (
    <div className="p-5 flex flex-wrap gap-8">
      {filteredProducts.map((product, index) => {
        return (
          <div
            key={index}
            className="w-[250px] h-[280px] border-[1px] border-gray-200 border-solid p-8 "
          >
            <img
              className="h-[100px] w-full object-contain "
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
                <span className="line-through ">{product.prevPrice}</span>{" "}
                {product.newPrice}
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
