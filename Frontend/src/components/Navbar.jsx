import { useContext } from "react";
import { assets } from "../assets/index";
import { StoreContext } from "../context/StoreContext";
import { Link } from "react-router-dom";
import LogoutButton from "./templets/LogoutButton";

const Profile = () => (
  <div className="group w-[22px] h-[22px] relative cursor-pointer">
    <img
      src={assets.profile_icon}
      alt="menu_1"
      className="w-full h-full object-contain"
    />
    <div className="hidden group-hover:block absolute z-[9] top-full -right-full p-2 rounded bg-zinc-800">
      <Link to="/myorders">
        <div className="px-4 py-2 flex items-center gap-2 hover:bg-slate-800">
          <div className="w-[22px] h-[22px] ">
            <img
              src={assets.bag_icon}
              alt="bag_icon"
              className="w-full h-full object-contain"
            />
          </div>
          <p>Orders</p>
        </div>
      </Link>
      <hr className="boder-[1px] border-zinc-500" />
      <LogoutButton>
        <div className="px-4 py-2 flex items-center gap-2 hover:bg-slate-800">
          <div className=" w-[22px] h-[22px]">
            <img
              src={assets.logout_icon}
              alt="logout_icon"
              className=" w-full h-full object-contain"
            />
          </div>
          <p>Logout</p>
        </div>
      </LogoutButton>
    </div>
  </div>
);

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount, accessToken } = useContext(StoreContext);

  return (
    <nav className="w-full h-[100px] flex items-center justify-between gap-2 py-2 ">
      <Link to="/" className="block w-[152px]">
        <img
          src={assets.logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </Link>

      <div className="hidden md:flex items-center gap-5">
        <Link to="/home" className="text-lg">
          home
        </Link>
        <Link to="/menu" className="text-lg">
          menu
        </Link>
        <Link to="/mobile-app" className="text-lg">
          mobile-app
        </Link>
        <Link to="/contact" className="text-lg">
          contact us
        </Link>
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
          {getTotalCartAmount() > 0 && (
            <>
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px]" />
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px] animate-ping" />
            </>
          )}
        </Link>
        {accessToken ? (
          <Profile />
        ) : (
          <button
            onClick={() => setShowLogin(true)}
            className="px-4 py-1 capitalize rounded-full border-[2px]"
          >
            sign in
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
