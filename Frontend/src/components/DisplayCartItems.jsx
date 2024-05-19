import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const DisplayCartItems = () => {
  const { food_list, cartItems, dispatchCart } = useContext(StoreContext);
  return (
    <section className="my-10">
      <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-2 capitalize">
        <div>items </div>
        <p>title</p>
        <p>price</p>
        <p>quantity</p>
        <p>total</p>
        <p>remove</p>
      </div>
      <br />
      <hr />
      {food_list.map((food) => {
        if (cartItems[food._id] > 0) {
          return (
            <article key={food._id}>
              <div className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center gap-2 capitalize my-3">
                <div>
                  <img
                    src={`${import.meta.env.VITE_SERVER_URL}/images/${
                      food.image
                    }`}
                    alt=""
                    className="w-full h-full object-contain max-w-20"
                  />
                </div>
                <p>{food.name}</p>
                <p>${food.price}</p>
                <p>{cartItems[food._id]}</p>
                <p>${food.price * cartItems[food._id]}</p>
                <p
                  className="cursor-pointer"
                  onClick={() =>
                    dispatchCart({
                      type: "remove-from-cart",
                      payload: food._id,
                    })
                  }
                >
                  x
                </p>
              </div>
              <hr />
            </article>
          );
        }
      })}
    </section>
  );
};

export default DisplayCartItems;
