import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'

const router = Router()

router.get('/menus', controller.getAllMenu)
router.post('/create-menu', authenticate, controller.createMenu) //TODO
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', authenticate, controller.createRestaurant) //TODO
router.get('/menu-by-name/:name', controller.getMenuByName) //TODO
router.patch("/menu/:id", authenticate, controller.updateMenu) //TODO
router.delete("/menu/:id", authenticate, controller.deleteMenu) //TODO
router.patch("/restaurant/:id", authenticate, controller.updateRestaurant) //TODO
router.delete("/restaurant/:id", authenticate, controller.deleteRestaurant) //TODO

export default router