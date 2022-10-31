import { MongoHelper } from '../infra/db/mongodb/helpers/mongo-helper'
import env from './config/env'

const port = env.port
const mongoUrl = env.mongoUrl

MongoHelper.connect(mongoUrl)
  .then(async () => {
    const app = (await import('./config/app')).default
    app.listen(port, () => console.log(`Server running on localhost:${port}`))
  })
  .catch(console.error)
