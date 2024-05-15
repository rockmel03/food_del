import Food from "../models/food.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getList = asyncHandler((req, res) => {
    console.log('working')

    res.send('working')
})



export { getList }