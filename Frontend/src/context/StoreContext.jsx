import { createContext, useEffect, useReducer } from "react";
import { food_list } from "../assets";

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
        const newState = {...state}
        delete newState[action.payload];
        return newState
      }
      return { ...state, [action.payload]: state[action.payload] - 1 };
    }
  }
};


function StoreContextProvider({ children }) {
  const [cartItems, dispatchCart] = useReducer(cartReducer, {});

  useEffect(() => {
    console.log(cartItems)
  },[cartItems])

  let contextValue = {
    food_list,
    cartItems,
    dispatchCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
}

export default StoreContextProvider;
