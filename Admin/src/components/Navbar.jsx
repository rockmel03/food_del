import React from "react";
import { assets } from "../assets";

const Navbar = () => {
  return (
    <nav className="h-[80px] flex items-center justify-between px-[4%] py-[8px]">
      <div className="max-w-[150px]">
        <img
          src={assets.logo}
          alt="logo"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[40px] h-[40px] bg-zinc-300 rounded-full cursor-pointer">
        <img
          src={assets.profile_image}
          alt="profile_image"
          className="w-full h-full object-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
