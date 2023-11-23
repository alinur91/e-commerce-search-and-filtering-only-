import { FormEvent } from "react";
import { useContextHook } from "../context/useContextHook";
import { filterByData } from "../data";
import { FiltersType } from "../types";

const FilterByForm = ({ name }: { name: string }) => {
  const { hanldeFilterBy } = useContextHook();

  const handleChange = (e: FormEvent<HTMLFormElement>, name: string) => {
    const value = (e.target as HTMLFormElement).value;
    hanldeFilterBy(name, value);
  };

  const firstCharToUpperCase = (name: string) =>
    name.charAt(0).toUpperCase() + [...name].slice(1).join("");

  const assignColorClasses = (name: string, category: string) => {
    let colorsClass = "";

    if (name === "colors") {
      colorsClass = "colors";
      if (category === "Blue") {
        colorsClass += " blue";
      } else if (category === "Black") {
        colorsClass += " black";
      } else if (category === "Red") {
        colorsClass += " red";
      } else if (category === "Green") {
        colorsClass += " green";
      } else if (category === "White") {
        colorsClass += " white";
      }
    }

    return colorsClass;
  };

  return (
    <div>
      <h2 className="font-semibold mb-2">{firstCharToUpperCase(name)}</h2>
      <form onChange={(e) => handleChange(e, name)}>
        {filterByData[name as keyof FiltersType].map((category) => {
          let newId = category;
          if (category === "all") {
            newId = `all-${name}`;
          }
          const colorsClass = assignColorClasses(name, category);

          return (
            <div key={category}>
              <input
                defaultChecked={category === "all"}
                className={colorsClass}
                value={category}
                type="radio"
                name="category"
                id={newId}
              />
              <label className="pl-2" htmlFor={newId} id={newId}>
                {category.charAt(0).toUpperCase() +
                  [...category].slice(1).join("")}{" "}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};

export default FilterByForm;
