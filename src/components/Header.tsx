import { useContextHook } from "../context/useContextHook";
import Icon from "./Icon";
// import { GoSidebarCollapse } from "react-icons/go";
// import { GoSidebarExpand } from "react-icons/go";

const Header = () => {
  const { hanldeFilterBy } = useContextHook();

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.trim();
    hanldeFilterBy("searchTerm", value);
  };

  // const shouldShowSidebarIcons = (showSideBar: boolean) => {
  //   return (
  //     <div
  //       onClick={() => toggleShowSideBar()}
  //       className="flex sm:hidden text-2xl cursor-pointer"
  //     >
  //       {showSideBar ? <GoSidebarExpand /> : <GoSidebarCollapse />}
  //     </div>
  //   );
  // };

  return (
    <div className="flex items-center justify-around border-b-2 border-b-gray-200">
      {/* <div className="flex items-center gap-8"> */}
        {/* {shouldShowSidebarIcons(showSideBar)} */}
        <input
          onChange={handleSearchTermChange}
          placeholder="Enter your search shoes"
          className="bg-gray-100 outline-none py-1.5 pl-4"
          type="text"
        />
      {/* </div> */}
      <div className="flex gap-6 ">
        <Icon name="heart" />
        <Icon name="cart" />
        <Icon name="signin" />
      </div>
    </div>
  );
};

export default Header;
