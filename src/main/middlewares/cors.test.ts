import request from 'supertest'
import app from '../config/app'

describe('Cors Middleware', () => {
  test('Should enable CORS', async () => {
    app.post('/test_body_parser', (req, res) => {
      res.send()
    })

    await request(app)
      .get('/test_body_parser')
      .expect('acccess-control-allow-origin', '*')
      .expect('acccess-control-allow-methods', '*')
      .expect('acccess-control-allow-headers', '*')
  })
})
