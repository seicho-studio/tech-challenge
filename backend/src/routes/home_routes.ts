import app from 'express'

import { controllerHandler } from '../utils/request_util'
import { get } from '../controllers/home_controller'

const routes = app.Router()

routes.get('/', controllerHandler(get))

export default routes
