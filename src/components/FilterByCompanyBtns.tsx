import { useContextHook } from "../context/useContextHook";
import { companyArray } from "../data";

const FilterByCompanyBtns = () => {
  const { hanldeFilterBy } = useContextHook();

  const handleCompanyClick = (e: React.MouseEvent<HTMLInputElement>) =>
    hanldeFilterBy("company", (e.target as HTMLInputElement).value);

  return (
    <div>
      <h1 className="mb-3">Recommended</h1>
      {companyArray.map((company) => (
        <input
          onClick={handleCompanyClick}
          value={company}
          type="button"
          className="border-[1px] px-2.5 py-0.5 font-thin mr-1"
          key={company}
        />
      ))}
    </div>
  );
};

export default FilterByCompanyBtns;
