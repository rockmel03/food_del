import express from 'express';
import { addToCart, getCartItems, removeFromCart } from '../controllers/cart.controller.js';
import { verifyAuth } from '../middlewares/auth.middleware.js';


const cartRouter = express.Router();
cartRouter.use(verifyAuth);

cartRouter
    .route("/")
    .get(getCartItems)

cartRouter
    .route("/:itemId")
    .post(addToCart)
    .patch(removeFromCart)


export default cartRouter;