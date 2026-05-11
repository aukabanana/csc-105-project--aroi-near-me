import * as controller from '../controllers/system.controller.js'
import { authenticate } from '../middlewares/authentication.js'
import { Router } from 'express'
import { upload } from '../config/multer.js';

const router = Router()

router.get('/menus', controller.getAllMenu)
router.get("/promotion-menus", controller.getPromotionMenus)
router.post('/create-menu', authenticate,upload.single('image'), controller.createMenu)
router.get('/restaurants', controller.getAllRestaurant)
router.post('/create-restaurant', authenticate,upload.single('image'), controller.createRestaurant)
router.get('/menu-by-name/:name', controller.getMenuByName) //TODO
router.patch("/menu/:id", authenticate, upload.single("image"), controller.updateMenu)
router.delete("/menu/:id", authenticate, controller.deleteMenu)
router.patch("/restaurant/:id", authenticate,upload.single('image'), controller.updateRestaurant)
router.delete("/restaurant/:id", authenticate, controller.deleteRestaurant)

export default router
