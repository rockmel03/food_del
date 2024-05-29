import { useEffect, useState } from "react";
import Axios from "../utils/Axios";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await Axios.get("/api/v1/order/");
      console.log(response);
      return response.data.data;
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchOrders().then((data) => {
      setOrders(data);
    });
  }, []);

  return (
    <section className="py-10 min-h-[60vh]">
      <h1 className="text-2xl text-center mb-5">My Orders</h1>
      {orders.length > 0 &&
        orders.map((order, index) => {
          const name = order.foods
            .map((item) => item.foodDetail.name)
            .join(", ");
          return (
            <div key={order._id} className=" even:bg-zinc-500/50">
              <br />
              <article className="grid grid-cols-[0.5fr_1.5fr_1fr] sm:grid-cols-[0.5fr_1.5fr_1fr_0.5fr] gap-2 gap-y-4 px-3 py-2">
                <p className="font-bold">{index + 1}.</p>
                <p className="capitalize font-medium">
                  {name.length > 30 ? name.slice(0, 30) + "..." : name}
                </p>
                <p className="capitalize ">{order.status}</p>
                <p>${order.total}</p>
              </article>
              <br />
              <hr />
            </div>
          );
        })}
    </section>
  );
};

export default MyOrders;
