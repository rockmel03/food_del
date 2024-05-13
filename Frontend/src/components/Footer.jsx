import React from "react";
import { assets } from "../assets";

const Footer = () => {
  return (
    <footer className="bg-[#323232] px-5">
      <section className="grid sm:grid-cols-[2fr_1fr_1fr] gap-[max(2vw,40px)] py-10">
        <div>
          <div className="max-w-[200px]">
            <img
              src={assets.logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>
          <p className="text-base my-5 opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ullam
            quis odit sed facilis accusamus reiciendis delectus hic veritatis
            ipsum autem, molestias atque repellendus nulla maiores. Ipsa laborum
            accusantium quis!
          </p>
          <div>
            <div className="flex items-center gap-[max(1.4vw,10px)]">
              <img src={assets.facebook_icon} alt="" />
              <img src={assets.twitter_icon} alt="" />
              <img src={assets.linkedin_icon} alt="" />
            </div>
          </div>
        </div>
        <div>
            <h2 className="text-2xl font-semibold uppercase mb-2">Company</h2>
          <ul>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md capitalize">home</li>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md capitalize">menu</li>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md capitalize">mobile-app</li>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md capitalize">contact us</li>
          </ul>
        </div>
        <div>
            <h2 className="text-2xl font-semibold uppercase mb-2">Get in Touch</h2>
          <ul>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md capitalize">+91-123-456-7890</li>
            <li className="text-lg opacity-80 hover:opacity-100 cursor-pointer text-md">contact@tomato.com</li>
          </ul>
        </div>
      </section>
      <hr className="border-none h-[1px] bg-zinc-500"/>
      <p className="py-5 text-center">
        Copyright <span>{new Date().getFullYear()}</span> &copy; Tomato.com. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
