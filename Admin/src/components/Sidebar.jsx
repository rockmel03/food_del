import React from "react";
import { assets } from "../assets";

const Sidebar = () => {
  return (
    <aside className="fixed sm:relative bottom-0 sm:bottom-[unset] w-full max-w-[320px] h-[calc(100vh-80px)] border-r-2 pt-5">
      <ul className="flex flex-col gap-2 pl-10">
        <li className="w-full cursor-pointer bg-orange-100 border-[1px] border-r-0 border-orange-500 px-4 py-2 rounded-[5px_0_0_5px] text-xl flex items-center gap-4 hover:bg-orange-300 ">
          <img src={assets.add_icon} alt="add_icon" />
          <span>Add Item</span>
        </li>
        <li className="w-full cursor-pointer bg-orange-100 border-[1px] border-r-0 border-orange-500 px-4 py-2 rounded-[5px_0_0_5px] text-xl flex items-center gap-4 hover:bg-orange-300 ">
          <img src={assets.order_icon} alt="add_icon" />
          <span>List Items</span>
        </li>
        <li className="w-full cursor-pointer bg-orange-100 border-[1px] border-r-0 border-orange-500 px-4 py-2 rounded-[5px_0_0_5px] text-xl flex items-center gap-4 hover:bg-orange-300 ">
          <img src={assets.order_icon} alt="order_icon" />
          <span>Orders</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
