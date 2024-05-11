import { Link } from "react-router-dom";
import { menu_list } from "../assets";
import { useState } from "react";

const ExploreMenu = () => {
  const categories = menu_list;
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-5 border-b-2 border-zinc-500">
      <h2 className="text-4xl font-medium mb-7">Explore our menu</h2>
      <p className="max-w-[680px] text-base leading-[1.2] lg:text-[18px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus
        ut quos adipisci iusto numquam nulla, quia ducimus iure? Nulla.
      </p>

      <div className="py-8 flex items-center justify-between gap-5 overflow-x-auto">
        {categories &&
          categories.map((item, index) => (
            <Link
              key={index}
              to={`?category=${
                !(activeIndex === index) ? item.menu_name.toLowerCase() : "all"
              }`}
            >
              <div
                onClick={() =>
                  !(activeIndex === index)
                    ? setActiveIndex(index)
                    : setActiveIndex(null)
                }
                className="flex flex-col items-center justify-center gap-4 w-fit"
              >
                <div
                  className={`w-[100px] h-[100px] rounded-full overflow-hidden border-4  ${
                    activeIndex === index
                      ? "border-orange-500"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={item?.menu_image}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-medium capitalize opacity-60">
                  {item?.menu_name}
                </h3>
              </div>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default ExploreMenu;
