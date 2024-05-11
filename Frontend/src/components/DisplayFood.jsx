import { useLocation } from "react-router-dom";
import ProductCard from "./templets/ProductCard";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const DisplayFood = () => {
  const [foodList, setFoodList] = useState([]);

  const { food_list } = useContext(StoreContext);
  const { search } = useLocation();

  

  useEffect(() => {
    const searchData = search
      ? decodeURIComponent(search)?.split("?")[1].split("=")
      : "all";
    if (searchData[0] === "category" && searchData[1] !== "all") {
      const filteredData = food_list.filter(
        (food) => food.category.toLowerCase() === searchData[1].toLowerCase()
      );
      setFoodList(filteredData);
    } else {
      setFoodList(food_list);
    }
  }, [search]);

  return (
    <section className="py-5">
      <h2 className="text-4xl font-medium mb-7">Top dishes near you</h2>
      {foodList.length > 0 ? (
        <div className="py-5 grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] justify-center">
          {foodList.map((food) => (
            <div
              key={food._id}
              className="w-full flex items-center justify-center"
            >
              <ProductCard key={food._id} data={food} />
            </div>
          ))}
        </div>
      ) : (
        <h1 className="text-xl text-center">no items found</h1>
      )}
    </section>
  );
};

export default DisplayFood;
