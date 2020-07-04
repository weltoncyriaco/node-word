import { Router } from 'express'
import TestController from '@controller/TestController'

const routes = Router()

routes.get('/', TestController.get)
routes.post('/', TestController.post)
routes.put('/:id', TestController.put)
routes.delete('/:id', TestController.delete)
routes.get('/:id', TestController.getOne)

export default routes
