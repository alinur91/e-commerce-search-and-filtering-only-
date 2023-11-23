import { useContextHook } from "../context/useContextHook";
import Icon from "./Icon";

const Header = () => {
  const { hanldeFilterBy } = useContextHook();

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = (e.target as HTMLInputElement).value.trim();
    
    if (value) {
      hanldeFilterBy("searchTerm", value);
    }
  };

  return (
    <div className="flex items-center justify-around border-b-2 border-b-gray-200">
      <div>
        <input
          onChange={handleSearchTermChange}
          placeholder="Enter your search shoes"
          className="bg-gray-100 outline-none py-1.5 pl-4"
          type="text"
        />
      </div>
      <div className="flex gap-6 ">
        <Icon name="heart" />
        <Icon name="cart" />
        <Icon name="signin" />
      </div>
    </div>
  );
};

export default Header;
