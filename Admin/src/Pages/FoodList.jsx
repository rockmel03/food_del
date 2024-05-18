import { useEffect, useState } from "react";
import Axios from "../utils/axios";
import { Link } from "react-router-dom";

export const FoodList = () => {
  const [FoodList, setFoodList] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("/api/v1/food/list");
    const { data } = response;
    setFoodList(data.data);
  };

  const deleteHandler = async (itemId) => {
    const response = await Axios.delete(`/api/v1/food/${itemId}`);
    if (response.status) {
      alert(response.data.message);
      fetchData();
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main className="w-full py-5">
      <h1 className="text-center text-xl font-bold">Food List</h1>

      <section className="p-5">
        <hr className="hidden sm:block" />
        <br className="hidden sm:block" />
        <div className="hidden w-full sm:grid grid-cols-[1fr_1.5fr_0.5fr_1fr_1fr] gap-2 items-center">
          <b>Image</b>
          <b>Item Name</b>
          <b>Price</b>
          <b>Category</b>
          <b>Actions</b>
        </div>
        <br />
        <hr />

        {FoodList.map((food) => (
          <article key={food._id}>
            <div className="w-full grid grid-cols-[1fr_2fr_1fr] sm:grid-cols-[1fr_1.5fr_0.5fr_1fr_1fr] gap-x-3 gap-y-4 items-center py-2">
              <Link to={`/details/${food._id}`}>
                <div className="max-w-[20vw] sm:max-w-[12vh]">
                  <img
                    src={`${import.meta.env.VITE_SERVER_URL}/images/${
                      food.image
                    }`}
                    alt={food.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </Link>
              <Link to={`/details/${food._id}`}>
                <p className="capitalize hover:underline hover:text-blue-500">
                  {food.name}
                </p>
              </Link>
              <p className="">${food.price}</p>
              <p className="">{food.category}</p>
              <div className="flex gap-2">
                <button onClick={()=> deleteHandler(food._id)} className="px-2 text-red-500">Delete</button>
              </div>
            </div>
            <hr />
          </article>
        ))}
      </section>
    </main>
  );
};
