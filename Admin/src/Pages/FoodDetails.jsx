import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../utils/axios";

export const FoodDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itemData, setItemData] = useState({});
  const itemImage =
    `${import.meta.env.VITE_SERVER_URL}/images/${itemData.image}` || "";

  const fetchData = async () => {
    const response = await Axios.get(
      `${import.meta.env.VITE_SERVER_URL}/api/v1/food/${id}`
    );
    console.log(response);
    setItemData(response.data.data);
  };

  const deleteHandler = async (itemId) => {
    const response = await Axios.delete(`/api/v1/food/${itemId}`);
    if (response.status) {
      alert(response.data.message);
      navigate("/list");
    } else {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="w-full h-[calc(100vh-80px)] p-[3vw] md:p-10">
      <div className="grid md:grid-cols-[40%_1fr] items-start gap-5 md:p-4">
        <div className="">
          <img
            src={itemImage}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="text-5xl font-bold capitalize">{itemData.name}</h1>
          <p className="text-xl capitalize">{itemData.description}</p>
          <p className="w-fit px-2 text-zinc-600 bg-zinc-300 rounded font-medium capitalize">
            {itemData.category}
          </p>
          <p className="text-3xl">${itemData.price}</p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate(`/update/${id}`)}
              className="px-4 py-2 rounded bg-yellow-500 text-white text-md font-medium"
            >
              Update
            </button>
            <button
              onClick={() => deleteHandler(id)}
              className="px-4 py-2 rounded bg-red-500 text-white text-md font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
