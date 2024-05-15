import { Router } from 'express'
import upload from "../middlewares/multer.middleware.js"
import { addFood, getList } from '../controllers/food.controller.js'

const foodRouter = Router()

foodRouter.route('/list').get(getList)

foodRouter.route('/add').post(upload.single("image"), addFood)


export default foodRouter