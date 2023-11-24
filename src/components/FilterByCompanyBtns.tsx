import { useState } from "react";
import { useContextHook } from "../context/useContextHook";
import { companyArray } from "../data";

const FilterByCompanyBtns = () => {
  const [activeBtnIndex, setActiveBtnIndex] = useState(0);

  const { hanldeFilterBy } = useContextHook();

  const handleCompanyClick = (
    e: React.MouseEvent<HTMLInputElement>,
    index: number
  ) => {
    hanldeFilterBy("company", (e.target as HTMLInputElement).value);
    setActiveBtnIndex(index);
  };

  return (
    <div>
      <h1 className="mb-3">Recommended</h1>
      {companyArray.map((company, index) => (
        <input
          onClick={(e) => handleCompanyClick(e, index)}
          value={company}
          type="button"
          className={`border-[1px] px-2.5 py-0.5 font-thin mr-1 ${
            index === activeBtnIndex && `bg-blue-400`
          }`}
          key={company}
        />
      ))}
    </div>
  );
};

export default FilterByCompanyBtns;
