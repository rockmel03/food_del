import React from "react";
import { assets } from "../assets";
import { InputField } from "../components";
import { useForm } from "react-hook-form";

export const AddFood = () => {
  const { handleSubmit, register } = useForm();

  const [image, setImage] = React.useState(null);

  const onFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="w-full flex items-center justify-center p-5 ">
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="flex flex-col gap-2 w-full max-w-[760px]"
      >
        <div className="flex flex-col">
          <p className="mb-2">Upload Image Here</p>
          <InputField
            {...register("image", { required: true })}
            label={
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="upload area"
                className="w-[130px] aspect-video object-contain"
              />
            }
            className="border-2"
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
          />
        </div>
        <div className="flex flex-col">
          <InputField
            {...register("name", { required: true })}
            label="Product Name"
            className="border-2 "
            type="text"
            name="name"
            placeholder="Type here"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="opacity-80">
            Product description
          </label>
          <textarea
            {...register("description", { required: true })}
            className="bg-transparent text-inherit border-2 px-4 py-2 rounded  resize-none"
            name="description"
            id="description"
            placeholder="Write content here"
            cols={30}
            rows={6}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col w-full">
            <label htmlFor="category" className="opacity-80">
              Product category
            </label>
            <select
              {...register("category", { required: true })}
              name="category"
              id="category"
              className="w-full bg-transparent text-inherit border-2 px-4 py-2 rounded placeholder:capitalize capitalize"
            >
              <option value="salad">salad</option>
              <option value="salad">salad1</option>
              <option value="salad">salad2</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <InputField
              {...register("price", { required: true })}
              label="Product Price"
              className="border-2"
              type="number"
              name="price"
              placeholder="$12"
              required
            />
          </div>
        </div>
        <button className="bg-zinc-500 text-white px-4 py-2 rounded">
          Add Item
        </button>
      </form>
    </main>
  );
};
