import React from "react";
import { assets } from "../assets";
import { InputField } from "../components";
import { categories } from "../constants";
import { useForm } from "react-hook-form";
import Axios from "../utils/axios";

export const AddFood = () => {
  const { handleSubmit, register, reset } = useForm();

  const [image, setImage] = React.useState(null);

  const onFormSubmit = async (data) => {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);

    try {
      const response = await Axios.post("/api/v1/food/add", formData);

      if (response.data.status) {
        alert(response.data.message);
        setImage(null);
        reset();
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="w-full flex items-center p-5 ">
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
            rows={6}
            required
          ></textarea>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="category" className="opacity-80">
              Product category
            </label>
            <select
              {...register("category", { required: true })}
              name="category"
              id="category"
              className="w-full bg-transparent text-inherit border-2 px-4 py-2 rounded placeholder:capitalize capitalize"
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col">
            <InputField
              {...register("price", { required: true })}
              label="Product Price"
              className="border-2 max-w-[120px]"
              type="number"
              name="price"
              placeholder="$12"
              required
            />
          </div>
        </div>
        <button className="bg-zinc-500 text-white px-4 py-3 rounded max-w-[120px]">
          Add Item
        </button>
      </form>
    </main>
  );
};
