import { useForm } from "react-hook-form";
import { assets } from "../assets";
import InputField from "./templets/InputField";
import { useContext, useState } from "react";
import Axios from "../utils/Axios";
import { StoreContext } from "../context/StoreContext";

const LogInPopup = ({ setShowLogin }) => {
  const { handleSubmit, register, reset } = useForm();
  const [showSignupForm, setShowSignupForm] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { setUser, setAccessToken } = useContext(StoreContext);

  const onFormSubmit = async (data) => {
    const url = `/api/v1/user/${showSignupForm ? "register" : "login"}`;
    try {
      const response = await Axios.post(url, data);

      if (response?.data?.status) {
        const { user, access_token } = response.data.data;
        localStorage.setItem("access_token", access_token);

        setUser(user);
        setAccessToken(access_token);
        reset();
        setShowLogin(false);
        alert(
          showSignupForm ? "account created successfully" : "login successful"
        );
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <section className="fixed z-[9] top-0 left-0 w-full h-screen bg-zinc-800/50 flex items-center justify-center px-3">
      <div className="w-full max-w-[320px] bg-white text-black p-7 rounded-md ">
        <div className="flex justify-between items-center">
          <h2 className="capitalize text-2xl font-semibold">
            {showSignupForm ? "sign up" : "login"}
          </h2>
          <button onClick={() => setShowLogin(false)}>
            <img src={assets.cross_icon} alt="cross" />
          </button>
        </div>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="flex flex-col gap-2 my-5"
        >
          {showSignupForm && (
            <InputField
              type="text"
              {...register("username", { required: true })}
              placeholder="username"
              className="shadow-md placeholder:capitalize"
            />
          )}

          <InputField
            type="email"
            {...register("email", { required: true })}
            placeholder="email"
            className="shadow-md placeholder:capitalize"
          />
          <InputField
            type={showPassword ? "text" : "password"}
            {...register("password", { required: true })}
            placeholder="password"
            className="shadow-md placeholder:capitalize"
            autoComplete="current-password"
          />
          <div className="flex items-center justify-between py-2 px-2">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="show-password"
                className="mr-1"
                checked={showPassword}
                onChange={(e) =>
                  e.target.checked
                    ? setShowPassword(true)
                    : setShowPassword(false)
                }
              />
              <label htmlFor="show-password" className="text-sm leading-none">
                Show Password
              </label>
            </div>
            {!showSignupForm && (
              <p className="text-sm leading-none cursor-pointer text-blue-500">
                Forgot Password?
              </p>
            )}
          </div>
          <button
            type="submit"
            className="shadow-md px-4 py-2 capitalize bg-orange-500 text-white rounded"
          >
            {showSignupForm ? "create account" : "login"}
          </button>
          {showSignupForm && (
            <div className="flex items-start">
              <input
                type="checkbox"
                {...register("policy", { required: true })}
                id="policy"
                className="mr-2"
              />
              <label htmlFor="policy" className="text-sm leading-none">
                By continuing, i agree to the terms of use & privacy policy.
              </label>
            </div>
          )}
        </form>
        <div className="text-base text-center">
          {showSignupForm ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setShowSignupForm(false)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don&#39;t have an account?{" "}
              <span
                onClick={() => setShowSignupForm(true)}
                className="text-blue-500 hover:underline cursor-pointer"
              >
                Create here
              </span>
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default LogInPopup;
