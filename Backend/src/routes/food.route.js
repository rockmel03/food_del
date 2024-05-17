import { Router } from 'express'
import upload from "../middlewares/multer.middleware.js"
import { addFood, deleteFood, getList, updateFood } from '../controllers/food.controller.js'

const foodRouter = Router()

foodRouter.route('/list').get(getList)

foodRouter.route('/add').post(upload.single("image"), addFood)

foodRouter.route('/delete').delete(deleteFood)

foodRouter.route('/update/:id').patch(upload.single("image"), updateFood)

export default foodRouter