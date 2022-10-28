import express from 'express'

import middlewares from './middlewares'
import routes from './routes'

const app = express()

routes(app)
middlewares(app)

export default app
