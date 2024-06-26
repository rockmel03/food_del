import Food from "../models/food.model.js";
import fs from "fs"
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

//get all food list
const getList = asyncHandler(async (req, res) => {

    const foodList = await Food.find({})
    if (!foodList) throw new ApiError(500, "items not found ")

    return res.status(200)
        .json(new ApiResponse(200, foodList, "data fetched successfully"))

})

//add food item
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
            console.log(`public/uploads/${imageFilename} was deleted`);
        })
        throw new ApiError(500, "something went wrong while creating food item")
    }

    return res
        .status(200)
        .json(new ApiResponse(200, createdFood, 'item added successfully'))

})

//delete food item 
const deleteFood = asyncHandler(async (req, res) => {

    const { id } = req.params
    if (!id) throw new ApiError(400, 'id required')

    const foodItem = await Food.findById(id)
    if (!foodItem) throw new ApiError(500, "item not found or already deleted")

    fs.unlink(`public/uploads/${foodItem.image}`, (err) => {
        if (err) throw err;
        console.log(`public/uploads/${foodItem.image} deleted successfully`);
    })

    const deletedFood = await Food.findByIdAndDelete(id)
    return res.status(200)
        .json(new ApiResponse(200, deletedFood, "food item deleted successfully"))

})

//update food item
const updateFood = asyncHandler(async (req, res) => {

    const { id } = req.params
    const { name, price, description, category } = req.body

    if (
        [name, price, description, category].some(val => val.trim() === "")
    ) throw new ApiError(400, 'all fields are required')

    const isExists = await Food.findOne({ _id: id })
    if (!isExists) throw new ApiError(400, 'item does not exists')

    let imageFilename = isExists.image

    if (req.file?.filename) {
        fs.unlink(`public/uploads/${isExists.image}`, (err) => {
            if (err) throw err;
            console.log(`public/uploads/${isExists.image} was deleted`)
        })

        imageFilename = req.file?.filename
    }

    const foodItem = await Food.findByIdAndUpdate(
        id,
        {
            name,
            price,
            description,
            category,
            image: imageFilename
        },
        { new: true }
    )

    return res.status(200)
        .json(new ApiResponse(200, foodItem, "item updated successfully"))

})

//get food item
const getFoodItem = asyncHandler(async (req, res) => {

    const { id } = req.params
    if (!id) throw new ApiError(400, 'id required')

    const foodItem = await Food.findById(id)
    if (!foodItem) throw new ApiError(400, 'item does not exists')

    return res.status(200)
        .json(new ApiResponse(200, foodItem, 'item fetched successfully'))
})

export { getList, addFood, deleteFood, updateFood, getFoodItem }