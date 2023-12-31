import Icon from "./Icon";
import AsideFilterBy from "./AsideFilter";

const Aside = () => {
  return (
    <aside
      className={`sm:w-56  border-r-2 border-r-gray-200  flex  items-center flex-col`}
    >
      <Icon />
      <AsideFilterBy />
    </aside>
  );
};

export default Aside;
