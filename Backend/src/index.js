import dotenv from 'dotenv'
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./.env" })

connectDB()
    .then(() => {
        app.on('error', (error) => {
            console.error("ERROR: ", error)
            throw error
        })
        app.listen(process.env.PORT || 8000, () => {
            console.log(`App is listning on port ${process.env.PORT}`)
        })
    })
    .catch(error => {
        console.error("MongoDB connection FAILD : ", error)
    })