import express from "express"

const app = express();

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


//routes imports
import foodRouter from "./routes/food.route.js";


//routes
app.use('/api/v1/food', foodRouter)


export default app