import express from "express"
import cors from 'cors'
import cookieParser from "cookie-parser"
import corsOptions from "./config/corsOptions.js";

const app = express();

app.use(cors(corsOptions))
app.use(cookieParser())

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


//routes imports
import foodRouter from "./routes/food.route.js";
import userRouter from "./routes/user.route.js";
import cartRouter from "./routes/cart.route.js";
import orderRouter from "./routes/order.route.js";


//routes
app.use('/api/v1/food', foodRouter)
app.use('/images', express.static('public/uploads'))
app.use('/api/v1/user', userRouter)
app.use('/api/v1/cart', cartRouter)
app.use('/api/v1/order', orderRouter)


export default app