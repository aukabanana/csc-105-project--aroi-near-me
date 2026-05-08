import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'

const router = Router()

router.get('/menus', controller.getAllMenu)
router.post('/create-menu', authenticate, controller.createMenu)
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', authenticate, controller.createRestaurant)
router.get('/menu-by-name/:name', controller.getMenuByName)
router.patch("/menu/:id", authenticate, controller.updateMenu)
router.delete("/menu/:id", authenticate, controller.deleteMenu)
router.patch("/restaurant/:id", authenticate, controller.updateRestaurant)
router.delete("/restaurant/:id", authenticate, controller.deleteRestaurant)

export default router