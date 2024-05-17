import express from "express"
import cors from 'cors'

const app = express();

app.use(cors())

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))


//routes imports
import foodRouter from "./routes/food.route.js";


//routes
app.use('/api/v1/food', foodRouter)
app.use('/images', express.static('public/uploads'))


export default app