import express from 'express'
import { DevController, LikeController, DislikeController } from './controllers'

const routes = express.Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/dislikes', DislikeController.store)

export default routes
