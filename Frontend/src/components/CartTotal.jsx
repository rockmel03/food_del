import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  let deliveryFee = 2;
  let subtotal = getTotalCartAmount();

  return (
    <section className="my-10 flex flex-col sm:flex-row-reverse items-start justify-around gap-5">
      <div className="capitalize max-w-[450px] w-full p-3">
        <p className="mb-2">if you have promo code, enter it here</p>
        <form className="flex">
          <input
            type="text"
            name="promoCode"
            id="promoCode"
            placeholder="promo code"
            className="px-4 py-3 rounded-[5px_0_0_5px] w-full border-none outline-none bg-white text-black"
          />
          <button
            type="submit"
            className="px-5 py-3 rounded-[0_5px_5px_0] bg-black text-white "
          >
            Submit
          </button>
        </form>
      </div>
      <div className="capitalize max-w-[450px] w-full p-3">
        <h2 className="text-3xl mb-4">cart totals</h2>
        <h4 className="text-xl flex items-end justify-between">
          subtotal <span>${subtotal}</span>
        </h4>
        <hr className="h-[1px] border-none bg-zinc-500 my-2" />
        <h4 className="text-xl flex items-end justify-between">
          delivery fee <span>${subtotal === 0 ? 0 : deliveryFee}</span>
        </h4>
        <hr className="h-[1px] border-none bg-zinc-500 my-2" />
        <h4 className="text-xl flex items-end justify-between">
          total <span>${subtotal === 0 ? 0 : subtotal + deliveryFee}</span>
        </h4>
        <button
          onClick={() => navigate("/order")}
          className="uppercase px-4 py-3 rounded bg-orange-700 hover:bg-orange-800 text-white text-sm font-medium mt-4"
        >
          proceed to checkout
        </button>
      </div>
    </section>
  );
};

export default CartTotal;
