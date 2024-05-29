import mongoose from "mongoose";
import Stripe from 'stripe'
import Order from "../models/order.model.js";
import Food from "../models/food.model.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { FRONTEND_DOMAIN } from "../constants.js";
import User from "../models/user.model.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

//place order
const placeOrder = asyncHandler(async (req, res) => {
    const { items, address } = req.body;

    if ((!items || !address) || (!Object.keys(items).length || !Object.keys(address).length)) {
        throw new ApiError(400, "all field must be required")
    }

    const findedFoods = await Food.find(
        { _id: { $in: Object.keys(items).map(id => new mongoose.Types.ObjectId(id)) } }
    );

    const foods = findedFoods.map(f => ({
        ...f._doc,
        quantity: items[f._id]
    }))

    const totalPrice = foods.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)

    const createdOrder = await Order.create({
        user: req.user._id,
        foods,
        address,
        total: totalPrice
    })

    const line_items = foods.map(f => ({
        price_data: {
            currency: 'inr',
            unit_amount: f.price * 100 * 80,
            product_data: {
                name: f.name,
                // images: [f.image]
            },
        },
        quantity: f.quantity
    }))
    line_items.push({
        price_data: {
            currency: 'inr',
            unit_amount: 2 * 100 * 80,
            product_data: {
                name: "delivery charges",
            }
        },
        quantity: 1
    })
    const session = await stripe.checkout.sessions.create(
        {
            line_items,
            mode: 'payment',
            success_url: `${FRONTEND_DOMAIN}/verify?success=true&orderid=${createdOrder._id}`,
            cancel_url: `${FRONTEND_DOMAIN}/verify?success=false&orderid=${createdOrder._id}`,
        },
        { apiKey: process.env.STRIPE_SECRET_KEY }
    );

    return res.status(200).json(new ApiResponse(200, { url: session.url }, 'OK'))
})

// verify order 
const verifyOrder = asyncHandler(async (req, res) => {

    const { id: orderid } = req.params
    const { success } = req.body;

    if (!orderid) throw new ApiError(400, 'orderid is required')

    const order = await Order.findById(orderid);
    if (!order) throw new ApiError(400, 'order does not exists')

    if (success == 'true') {
        await Order.updateOne(
            { _id: order._id },
            { $set: { payment: true } }
        )
        await User.findByIdAndUpdate(req.user._id, { cart: {} })
        return res.status(202)
            .json(new ApiResponse(202, { paymentStatus: true }, 'Payment made successfully'))
    } else {
        await Order.findByIdAndDelete(order._id)
        return res.status(409)
            .json(new ApiResponse(409, { paymentStatus: false }, 'Payment has been canceled by the client.'))
    }

})

// get user's all orders
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id })
    return res.status(200)
        .json(new ApiResponse(200, orders, 'orders fetched successfully'))
});

// get single order
const getOrder = asyncHandler(async (req, res) => {
    const { id } = req.params
    if (!id) throw new ApiError(400, 'id required')

    const order = await Order.findById(id);
    if (!order) throw new ApiError(400, 'order does not exists')

    return res.status(200)
        .json(new ApiResponse(200, order, 'order fetched successfully'))
});


export { placeOrder, getOrders, getOrder, verifyOrder }