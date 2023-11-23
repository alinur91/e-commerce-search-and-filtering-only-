import { FaCartArrowDown } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
// import { IoCartOutline } from "react-icons/io5";
// import { FaSignInAlt } from "react-icons/fa";
import { PiSignInThin } from "react-icons/pi";
import { FaLock } from "react-icons/fa";

const Icon = ({ name = "mainCart" }: { name?: string }) => {
  const showIcon = (name: string) => {
    if (name === "cart") {
      return <PiShoppingCartSimpleThin />;
    } else if (name === "heart") {
      return <CiHeart />;
    } else if (name === "signin") {
      return <PiSignInThin />;
    } else if (name === "lock") {
      return <FaLock size="14px" color="#525252" />;
    } else {
      return <FaCartArrowDown />;
    }
  };
  return <div className="py-4 text-xl cursor-pointer">{showIcon(name)}</div>;
};

export default Icon;
