import Icon from "./Icon";
import AsideFilterBy from "./AsideFilter";

const Aside = () => {
  return (
    <aside
      className={`w-80 sm:w-56 h-screen border-r-2 border-r-gray-200  flex px-2 sm:pl-0  sm:items-center flex-col sticky top-0`}
    >
      <Icon />
      <AsideFilterBy />
    </aside>
  );
};

export default Aside;
