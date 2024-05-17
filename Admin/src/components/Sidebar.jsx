import React from "react";
import { assets } from "../assets";
import { NavLink, useNavigate } from "react-router-dom";

const SideNav_links = [
  { link: "/", title: "Add Item", image: assets.add_icon },
  { link: "/list", title: "List Items", image: assets.order_icon },
  { link: "/orders", title: "Orders", image: assets.order_icon },
];

const Sidebar = () => {
  return (
    <aside className="flex-shrink-1 h-[calc(100vh-80px)] border-r-2 pt-5">
      <div className="w-fit flex flex-col gap-2 sm:pl-10 ">
        {SideNav_links.map((item, index) => (
          <NavLink
            key={index}
            to={item.link}
            className={({ isActive }) =>
              `w-full cursor-pointer border-[1px] border-r-0 border-orange-500 px-4 py-2 rounded-[5px_0_0_5px] text-xl flex items-center gap-4 hover:bg-orange-300 ${
                isActive ? "bg-orange-300" : "bg-orange-100"
              }`
            }
          >
            <img src={item.image} alt="add_icon" className="min-w-[22px]" />
            <span className="hidden sm:inline whitespace-nowrap">{item.title}</span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
