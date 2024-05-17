import { useEffect, useState } from "react";
import Axios from "../utils/axios";

export const FoodList = () => {
  const [FoodList, setFoodList] = useState([]);

  const fetchData = async () => {
    const response = await Axios.get("/api/v1/food/list");
    const { data } = response;
    return data;
  };

  const deleteHandler = async (itemId) => {
    const response = await Axios.delete(`/api/v1/food/${itemId}`);
    console.log(response);
  };

  useEffect(() => {
    fetchData().then((res) => setFoodList(res.data));
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-10 px-5">
      <section className="w-full">
        <h2>ALL Food List</h2>
        <div className="w-full hidden sm:grid grid-cols-[0.5fr__1.5fr_0.75fr_1fr_0.75fr] gap-2 py-2">
          <b>Item</b>
          <b>Title</b>
          <b>price</b>
          <b>category</b>
          <b>actions</b>
        </div>
        <hr />
        {FoodList.map((item, index) => (
          <div key={item._id}>
            <article className="w-full grid grid-cols-[1fr_2fr_.5fr] sm:grid-cols-[0.5fr__1.5fr_0.75fr_1fr_0.75fr] gap-2 items-center grid-wrap py-5">
              <div className="w-full aspect-video ">
                <img
                  src={
                    import.meta.env.VITE_SERVER_URL + `/images/${item.image}`
                  }
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{item.category}</p>
              <p className="cursor-pointer" onClick={() => deleteHandler(item._id)}>
                delete
              </p>
            </article>
            <hr />
          </div>
        ))}
      </section>
    </section>
  );
};
