import { food_list } from "../assets";
import ProductCard from "./templets/ProductCard";

const DisplayFood = () => {
  const foodList = food_list;

  return (
    <section className="py-5">
      <h2 className="text-4xl font-medium mb-7">Top dishes near you</h2>
      <div className="py-5 grid gap-5 grid-cols-[repeat(auto-fill,minmax(240px,1fr))] justify-center">
        {foodList.map((food) => (
          <div key={food._id} className="w-full flex items-center justify-center">
            <ProductCard key={food._id} data={food} />
            </div>
        ))}
      </div>
    </section>
  );
};

export default DisplayFood;
