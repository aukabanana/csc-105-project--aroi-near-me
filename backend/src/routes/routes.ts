import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'
import { upload } from '../config/multer.js';

const router = Router()

router.get('/menus', controller.getAllMenu)
router.post('/create-menu', authenticate, controller.createMenu)
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', authenticate,upload.single('image'), controller.createRestaurant)
router.get('/menu-by-name/:name', controller.getMenuByName) //TODO
router.patch("/menu/:id", authenticate, controller.updateMenu) //TODO
router.delete("/menu/:id", authenticate, controller.deleteMenu) //TODO
router.patch("/restaurant/:id", authenticate,upload.single('image'), controller.updateRestaurant)
router.delete("/restaurant/:id", authenticate, controller.deleteRestaurant)

export default router
