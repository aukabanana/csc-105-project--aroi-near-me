import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'

const router = Router()

router.get('/menus', controller.getAllMenu)
router.post('/create-menu', controller.createMenu)
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', controller.createRestaurant)
router.get('/menu-by-name', controller.getMenuByName)
router.patch("/menu/:id", controller.updateMenu)
router.delete("/menu/:id", controller.deleteMenu)
router.patch("/restaurant/:id", controller.updateRestaurant)
router.delete("/restaurant/:id", controller.deleteRestaurant)

export default router