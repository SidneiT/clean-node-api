import request from 'supertest'
import app from '../config/app'

describe('Cors Middleware', () => {
  test('Should enable CORS', async () => {
    app.get('/test_cors', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_cors')
      .expect('acccess-control-allow-origin', '*')
      .expect('acccess-control-allow-methods', '*')
      .expect('acccess-control-allow-headers', '*')
  })
})
