import { Router } from 'express'
import upload from "../middlewares/multer.middleware.js"
import { getList } from '../controllers/food.controller.js'

const foodRouter = Router()

foodRouter.route('/list').get(getList)




export default foodRouter