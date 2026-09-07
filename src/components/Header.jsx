import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart, FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router";

const Header = () => {
  return (
    <div>
      <header className="flex w-100% h-30 justify-between items-center p-16 bg-white">
        <div className="flex items-center gap-1">
         <Link to="/"> <img
            src="/public/pictures/Meubel House_Logos-05.png"
            alt="logo"
            className="w-16"
          /> </Link>
          <h2 className="text-[35px] font-bold">Furniro</h2>
        </div>
        <nav className="flex gap-9">
          <Link
            to="/"
            className="no-underline text-black text-[15px] font-medium hover:text-[#B88E2F]"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="no-underline text-black text-[15px] font-medium hover:text-[#B88E2F]"
          >
            Shop{" "}
          </Link>
          <Link
            to="/Sofa"
            className="no-underline text-black text-[15px] font-medium hover:text-[#B88E2F]"
          >
            Sofa
          </Link>
          <Link
            to="/Contact"
            className="no-underline text-black text-[15px] font-medium hover:text-[#B88E2F]"
          >
            Contact
          </Link>
        </nav>
        <div className="flex gap-10">
          <FiUser className=" cursor-pointer size-9 hover:text-[#B88E2F]" />
          <IoSearchOutline className=" cursor-pointer size-9 hover:text-[#B88E2F]" />
            <FiHeart className=" cursor-pointer size-9 hover:text-[#B88E2F]" />
          <Link to="/Cart"> <AiOutlineShoppingCart className=" cursor-pointer size-9 hover:text-[#B88E2F]" /></Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
