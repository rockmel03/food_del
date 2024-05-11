import { useContext } from "react";
import { assets } from "../assets/index";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = false;
  const { cartItems } = useContext(StoreContext);

  return (
    <nav className="w-full h-[100px] flex items-center justify-between gap-2 py-2 ">
      <a href="/" className="block w-[152px]">
        <img
          src={assets.logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </a>

      <div className="hidden md:flex items-center gap-5">
        <a href="/home" className="text-lg">
          home
        </a>
        <a href="/menu" className="text-lg">
          menu
        </a>
        <a href="/mobile-app" className="text-lg">
          mobile-app
        </a>
        <a href="/contact" className="text-lg">
          contact us
        </a>
      </div>

      <div className="flex items-center gap-5">
        <div className="w-[22px] h-[22px] ">
          <img
            src={assets.search_icon}
            alt="search_icon"
            className="w-full h-full object-contain"
          />
        </div>
        <Link to="/cart" className="w-[22px] h-[22px] relative">
          <img
            src={assets.basket_icon}
            alt="basket_icon"
            className="w-full h-full object-contain"
          />
          {Object.keys(cartItems).length > 0 && (
            <>
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px]" />
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px] animate-ping" />
            </>
          )}
        </Link>
        {isLoggedIn ? (
          <div className="w-[22px] h-[22px]">
            <img
              src={assets.profile_icon}
              alt="menu_1"
              className="w-full h-full object-contain"
            />
          </div>
        ) : (
          <button className="px-4 py-1 capitalize rounded-full border-[2px]">
            sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
