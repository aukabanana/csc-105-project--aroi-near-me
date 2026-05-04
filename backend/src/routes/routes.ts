import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'

const router = Router()

router.get('/menus', controller.getAllMenu)
router.post('/create-menu', controller.createMenu)
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', controller.createRestaurant)

export default router