import FilterByForm from "./FilterByForm";

const AsideFilterBy = () => {
  return (
    <div className="flex-1 py-8 border-t-2 border-t-gray-200 w-full pl-16 flex flex-col gap-6">
      <FilterByForm name="category" />
      <FilterByForm name="price" />
      <FilterByForm name="colors" />
    </div>
  );
};

export default AsideFilterBy;
