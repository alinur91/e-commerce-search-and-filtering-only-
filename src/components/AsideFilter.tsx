import FilterByForm from "./FilterByForm";

const AsideFilterBy = () => {
  return (
    <div className="py-8 border-t-2 border-t-gray-200 w-full px-2 sm:pl-16 flex flex-col  gap-6 h-screen">
      <FilterByForm name="category" />
      <FilterByForm name="price" />
      <FilterByForm name="colors" />
    </div>
  );
};

export default AsideFilterBy;
