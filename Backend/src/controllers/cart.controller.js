import User from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import Food from "../models/food.model.js";


// add item to cart
const addToCart = asyncHandler(async (req, res) => {

    const { itemId } = req.params;
    if (!itemId) throw new ApiError(400, "id required");

    const foodItem = await Food.findById(itemId);
    if (!foodItem) throw new ApiError(404, "item not found");

    const user = await User.findById(req.user._id);
    if (!user) throw new ApiError(404, "user not found");

    let cartData = user.cart;

    if (cartData[itemId]) {
        cartData[itemId] = cartData[itemId] + 1
    }
    else {
        cartData[itemId] = 1;
    }

    const savedUser = await User.findByIdAndUpdate(user._id, { cart: cartData }, { new: true });

    return res.status(200)
        .json(new ApiResponse(200, savedUser.cart, "item added to cart successfully"));

});

//remove item from cart
const removeFromCart = asyncHandler(async (req, res) => {

    const { itemId } = req.params;
    if (!itemId) throw new ApiError(400, "id required");

    const user = await User.findById(req.user._id);
    if (!user) throw new ApiError(404, "user not found");

    let cartData = user.cart;


    if (cartData[itemId] > 1) cartData[itemId] -= 1;
    else delete cartData[itemId];

    const savedUser = await User.findByIdAndUpdate(user._id, { cart: cartData }, { new: true });

    return res.status(200)
        .json(new ApiResponse(200, savedUser.cart, "item removed from cart successfully"));

});

//get cart items
const getCartItems = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (!user) throw new ApiError(404, "user not found");

    return res.status(200)
        .json(new ApiResponse(200, user.cart, "cart items fetched successfully"));
});

export { addToCart, removeFromCart, getCartItems }