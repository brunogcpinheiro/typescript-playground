import { Router } from 'express'

import MovieController from './src/controllers/MovieController'

const routes = Router()

routes.get('/movies', MovieController.index)

export default routes