import { createContext, useEffect, useReducer, useState } from "react";
import Axios from "../utils/Axios";

export const StoreContext = createContext({});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart": {
      if (!state[action.payload]) {
        return { ...state, [action.payload]: 1 };
      }
      return { ...state, [action.payload]: state[action.payload] + 1 };
    }
    case "remove-from-cart": {
      if (state[action.payload] === 1) {
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      }
      return { ...state, [action.payload]: state[action.payload] - 1 };
    }
  }
};

function StoreContextProvider({ children }) {
  const [food_list, setFood_list] = useState([]);
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  const [cartItems, dispatchCart] = useReducer(cartReducer, {});

  const fetchFoodList = async () => {
    const response = await Axios.get("/api/v1/food/list");
    const { data } = response;
    return data.data;
  };

  useEffect(() => {
    // fetch all food
    fetchFoodList().then((data) => setFood_list(data));

    // set the access token
    if (localStorage.getItem("access_token")) {
      setAccessToken(localStorage.getItem("access_token"));
    }
  }, []);

  const getTotalCartAmount = () => {
    return Object.keys(cartItems)
      .map(
        (key) =>
          food_list.find((item) => item._id == key).price * cartItems[key]
      )
      .reduce((acc, curr) => acc + curr, 0);
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  let contextValue = {
    food_list,
    cartItems,
    dispatchCart,
    getTotalCartAmount,
    user,
    setUser,
    accessToken,
    setAccessToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
