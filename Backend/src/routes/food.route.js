import { Router } from 'express'
import upload from "../middlewares/multer.middleware.js"
import { addFood, deleteFood, getFoodItem, getList, updateFood } from '../controllers/food.controller.js'

const foodRouter = Router()

foodRouter.route('/list').get(getList)

foodRouter.route('/add').post(upload.single("image"), addFood)

foodRouter.route('/:id')
    .get(getFoodItem)
    .delete(deleteFood)
    .patch(upload.single("image"), updateFood)

export default foodRouter