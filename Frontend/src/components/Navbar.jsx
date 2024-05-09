import { assets } from "../assets/index";

const Navbar = () => {
  const isLoggedIn = false;
  const cartItems = [];

  return (
    <nav className="w-full h-[80px] flex items-center justify-between gap-2 py-2 border-b">
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
        <div className="w-[22px] h-[22px] relative">
          <img
            src={assets.basket_icon}
            alt="basket_icon"
            className="w-full h-full object-contain"
          />
          {cartItems.length > 0 && (
            <>
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px]" />
              <div className="w-[8px] h-[8px] bg-red-500 rounded-full absolute -top-[8px] -right-[8px] animate-ping" />
            </>
          )}
        </div>
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
