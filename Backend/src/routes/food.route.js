import { Router } from 'express'
import upload from "../middlewares/multer.middleware.js"
import { addFood, deleteFood, getList } from '../controllers/food.controller.js'

const foodRouter = Router()

foodRouter.route('/list').get(getList)

foodRouter.route('/add').post(upload.single("image"), addFood)

foodRouter.route('/delete').delete(deleteFood)

export default foodRouter