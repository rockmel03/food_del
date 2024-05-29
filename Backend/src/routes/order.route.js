import { Router } from 'express';
import { verifyAuth } from '../middlewares/auth.middleware.js';
import { placeOrder, getOrders, getOrder, verifyOrder } from '../controllers/order.controller.js';


const orderRouter = Router();

orderRouter.use(verifyAuth)

orderRouter
    .route('/place')
    .post(placeOrder)

orderRouter
    .route('/')
    .get(getOrders)

orderRouter
    .route('/:id')
    .get(getOrder)

orderRouter
    .route('/:id/verify')
    .post(verifyOrder)




export default orderRouter;