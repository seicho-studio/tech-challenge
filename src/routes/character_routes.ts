import app from 'express'
import asyncHandler from 'express-async-handler'

import { create, index, show } from '../controllers/character_controller'

const routes = app.Router()

routes.get(
  '/',
  asyncHandler(index)
)

routes.post(
  '/',
  asyncHandler(create)
)

routes.get(
  '/',
  asyncHandler(show)
)

export default routes
