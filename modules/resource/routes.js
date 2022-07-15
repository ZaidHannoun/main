import express from 'express';
const router = express.Router()
import * as controller from './controller.js'
import authenticationMiddleware from '../../middlewares/authentication.js'

router.use(authenticationMiddleware)

router.post('/', controller.create)
router.get('/:search', controller.find)

export default router