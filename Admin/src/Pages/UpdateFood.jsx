import React, { useEffect } from "react";
import { InputField } from "../components";
import { categories } from "../constants";
import Axios from "../utils/axios";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateFood = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [food, setFood] = React.useState({
    name: "",
    description: "",
    category: "",
    price: "",
  });
  const [image, setImage] = React.useState(null);

  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFood({ ...food, [name]: value });
  };

  const fetchData = async () => {
    const response = await Axios.get(`/api/v1/food/${id}`);
    const { data } = response;
    setFood(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", food.name);
    formData.append("description", food.description);
    formData.append("category", food.category);
    formData.append("price", food.price);

    if (image) {
      formData.append("image", image);
    }

    try {
      const response = await Axios.patch(`/api/v1/food/${food._id}`, formData);

      if (response.data.status) {
        alert(response.data.message);
        setImage(null);
        navigate(`/details/${food._id}`);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="w-full flex items-center p-5 ">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col gap-2 w-full max-w-[760px]"
      >
        <div className="flex flex-col">
          <p className="mb-2">Upload Image Here</p>
          <InputField
            label={
              <img
                src={
                  image
                    ? URL.createObjectURL(image)
                    : `${import.meta.env.VITE_SERVER_URL}/images/${food.image}`
                }
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
            label="Product Name"
            className="border-2 "
            type="text"
            name="name"
            placeholder="Type here"
            required
            value={food.name}
            onChange={onChangeHandler}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description" className="opacity-80">
            Product description
          </label>
          <textarea
            className="bg-transparent text-inherit border-2 px-4 py-2 rounded  resize-none"
            name="description"
            id="description"
            placeholder="Write content here"
            rows={6}
            required
            value={food.description}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex flex-col">
            <label htmlFor="category" className="opacity-80">
              Product category
            </label>
            <select
              value={food.category}
              onChange={onChangeHandler}
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
              label="Product Price"
              className="border-2 max-w-[120px]"
              type="number"
              name="price"
              placeholder="$12"
              required
              value={food.price}
              onChange={onChangeHandler}
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
