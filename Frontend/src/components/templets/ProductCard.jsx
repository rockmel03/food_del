import { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets";

const ProductCard = ({ data }) => {
  const { cartItems, dispatchCart } = useContext(StoreContext);
  const [quantity, setQuantity] = useState(cartItems[data._id] || 0);

  const increment = () => {
    dispatchCart({ type: "add-to-cart", payload: data._id });
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    dispatchCart({ type: "remove-from-cart", payload: data._id });
    setQuantity((prev) => prev - 1);
  };

  return (
    <article className="bg-zinc-800 w-full max-w-[350px] aspect-[3/4] rounded-lg overflow-hidden">
      <div className="w-full h-[60%] relative">
        <img
          src={`${import.meta.env.VITE_SERVER_URL}/images/${data.image}`}
          alt=""
          className="w-full h-full object-cover"
        />
        {quantity == 0 ? (
          <div
            onClick={increment}
            className="w-[45px] h-[45px] rounded-full  absolute right-3 bottom-3 z-[2]"
          >
            <img
              src={assets.add_icon_white}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="absolute right-3 bottom-3 z-[2] flex items-center gap-2 bg-white text-black p-1 rounded-full">
            <div onClick={decrement} className="w-[34px] h-[34px] rounded-full">
              <img
                src={assets.remove_icon_red}
                alt="+"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-medium min-w-4 text-center">{quantity}</p>
            <div onClick={increment} className="w-[34px] h-[34px] rounded-full">
              <img src={assets.add_icon_green} alt="" />
            </div>
          </div>
        )}
      </div>
      <div className="px-2 py-2">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-medium capitalize">{data.name}</h2>
          <h3 className="px-2 py-1 bg-green-500 text-white rounded text-sm font-medium">
            <span>⭐</span>
            <span>3.4</span>
          </h3>
        </div>
        <p className="text-base opacity-80 leading-[1.2] my-3">
          {data.description}
        </p>
        <h2 className="text-2xl font-medium text-orange-500">
          $ <span>{data.price}</span>
        </h2>
      </div>
    </article>
  );
};

export default ProductCard;
