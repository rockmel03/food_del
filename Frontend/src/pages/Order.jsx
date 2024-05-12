import { InputField } from "../components";
import { useForm } from "react-hook-form";

const Order = () => {
  const { handleSubmit, register } = useForm();
  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col md:flex-row items-center justify-between gap-5 my-[3vw]"
      >
        <div className="flex flex-col gap-2 max-w-[450px]  w-full">
          <h2 className="text-3xl font-medium capitalize mb-5">
            delivery information
          </h2>
          <div className="flex gap-2">
            <InputField
              {...register("firstName", { required: true })}
              type="text"
              placeholder="first name"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
            <InputField
              {...register("lastName", { required: true })}
              type="text"
              placeholder="last name"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
          </div>
          <InputField
            {...register("email", { required: true })}
            type="email"
            placeholder="email address"
            className="shadow-md bg-zinc-700 placeholder:capitalize"
            required
          />
          <InputField
            {...register("street", { required: true })}
            type="text"
            placeholder="street"
            className="shadow-md bg-zinc-700 placeholder:capitalize"
            required
          />
          <div className="flex gap-2">
            <InputField
              {...register("city", { required: true })}
              type="text"
              placeholder="city"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
            <InputField
              {...register("state", { required: true })}
              type="text"
              placeholder="state"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
          </div>
          <div className="flex gap-2">
            <InputField
              {...register("pinCode", { required: true })}
              type="number"
              placeholder="zip code"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
            <InputField
              {...register("country", { required: true })}
              type="text"
              placeholder="country"
              className="shadow-md bg-zinc-700 placeholder:capitalize"
            />
          </div>
          <InputField
            {...register("phone", { required: true })}
            type="tel"
            placeholder="phone"
            className="shadow-md bg-zinc-700 placeholder:capitalize"
            required
          />
        </div>
        <div className="capitalize max-w-[450px] w-full p-3">
          <h2 className="text-3xl mb-4">cart totals</h2>
          <h4 className="text-xl flex items-end justify-between">
            subtotal <span>{`subtotal`}</span>
          </h4>
          <hr className="h-[1px] border-none bg-zinc-500 my-2" />
          <h4 className="text-xl flex items-end justify-between">
            delivery fee <span>{`deliveryFee`}</span>
          </h4>
          <hr className="h-[1px] border-none bg-zinc-500 my-2" />
          <h4 className="text-xl flex items-end justify-between">
            total <span>{`subtotal + deliveryFee`}</span>
          </h4>
          <button
            type="submit"
            className="uppercase px-4 py-3 rounded bg-orange-700 hover:bg-orange-800 text-white text-sm font-medium mt-4"
          >
            proceed to payment
          </button>
        </div>
      </form>
    </main>
  );
};

export default Order;
