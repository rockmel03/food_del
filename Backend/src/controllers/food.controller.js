import Food from "../models/food.model.js";
import fs from "fs"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const getList = asyncHandler((req, res) => {
    console.log('working')

    res.send('working')
})


const addFood = asyncHandler(async (req, res) => {
    const { name, price, description, category } = req.body

    if (
        [name, price, description, category].some(val => val.trim() === "")
    ) throw new ApiError(400, 'all fields are required')

    const imageFilename = req.file?.filename
    if (!imageFilename) throw new ApiError(400, 'image required')

    const createdFood = await Food.create({
        name,
        price,
        description,
        category,
        image: imageFilename
    })

    if (!createdFood) {
        fs.unlink(`public/uploads/${imageFilename}`, (err) => {
            if (err) throw err;
            console.log('path/file.txt was deleted');
        })
        throw new ApiError(500, "something went wrong while creating food item")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, createdFood, 'item added successfully'))

})


export { getList, addFood }