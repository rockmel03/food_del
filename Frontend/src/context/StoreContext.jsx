import { createContext, useEffect, useReducer, useState } from "react";
import Axios from "../utils/Axios";

export const StoreContext = createContext({});

const fetchFoodList = async () => {
  try {
    const response = await Axios.get("/api/v1/food/list");
    if (response.data.status) {
      return response.data.data;
    }
  } catch (error) {
    console.log("Error: failed to get food list", error);
    throw new Error("Failed to get food list");
  }
};

const fetchCartList = async () => {
  try {
    const response = await Axios.get("/api/v1/cart");
    if (response.data.status) {
      return response.data.data;
    }
  } catch (error) {
    console.log("Error: failed to fetch cart data", error);
    throw new Error("Failed to fetch cart data");
  }
};

const addToCart = async (itemId) => {
  try {
    const response = await Axios.post(`/api/v1/cart/${itemId}`);
    if (response.data.status) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error while adding to cart");
  }
};

const removeFromCart = async (itemId) => {
  try {
    const response = await Axios.patch(`/api/v1/cart/${itemId}`);
    if (response.data.status) {
      return response.data.data;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error while adding to cart");
  }
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart": {
      addToCart(action.payload);
      if (!state[action.payload]) {
        return { ...state, [action.payload]: 1 };
      }
      return { ...state, [action.payload]: state[action.payload] + 1 };
    }
    case "remove-from-cart": {
      removeFromCart(action.payload);
      if (state[action.payload] === 1) {
        const newState = { ...state };
        delete newState[action.payload];
        return newState;
      }
      return { ...state, [action.payload]: state[action.payload] - 1 };
    }
    case "set-cart": {
      return action.payload;
    }
  }
};

function StoreContextProvider({ children }) {
  const [food_list, setFood_list] = useState([]);
  const [user, setUser] = useState({});
  const [accessToken, setAccessToken] = useState("");

  const [cartItems, dispatchCart] = useReducer(cartReducer, {});

  useEffect(() => {
    // fetch all food
    fetchFoodList()
      .then((data) => setFood_list(data))
      .catch((err) => alert(err.message));

    // set the access token
    if (localStorage.getItem("access_token")) {
      setAccessToken(localStorage.getItem("access_token"));
    }
  }, []);

  useEffect(() => {
    if (accessToken) {
      // set cart items
      fetchCartList()
        .then((data) => dispatchCart({ type: "set-cart", payload: data }))
        .catch((error) => alert(error.message));
    }
  }, [accessToken]);

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
