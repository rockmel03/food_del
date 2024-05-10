import { assets } from "../assets";

const Header = () => {
  return (
    <section className="py-10">
      <div className="w-full h-[34vw] bg-orange-500 rounded-xl overflow-hidden relative">
        <img
          src={assets.header_img}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start gap-[1vw] px-10 md:px-[5vw]">
          <h1 className="text-[7vw] lg:text-[72px] leading-[1.2] font-medium">
            Order your <br />
            favourite food here
          </h1>
          <p className="max-w-[680px] text-[1.5vw] leading-[1.2] lg:text-[18px] hidden md:block">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
            rerum pariatur neque nihil voluptatum, cumque, aspernatur facilis
            ipsa eveniet laudantium voluptate ad laborum minus beatae inventore?
            Alias at distinctio ullam.
          </p>
          <button className="px-[3vw] py-[1.2vw] sm:px-5 sm:py-3 bg-white text-black rounded-full text-sm md:text-base">View Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Header;
