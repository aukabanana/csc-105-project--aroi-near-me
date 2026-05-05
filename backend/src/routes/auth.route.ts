import { Router } from 'express'
import * as controller from '../controllers/auth.controller.js'

const router = Router()
// router.get('/check', (req, res) => res.send("Auth Router is working!"));
router.post('/login-admin', controller.loginAdmin)
router.post('/logout-admin', controller.logoutAdmin)

export default router