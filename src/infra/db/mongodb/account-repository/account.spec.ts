
import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(global.__MONGO_URI__)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  test('Should return an account on success', async () => {
    const sut = new AccountMongoRepository()
    const fakeAccount = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    const account = await sut.add(fakeAccount)

    expect(account.id).toBeTruthy()
    expect(account.name).toContain(fakeAccount.name)
    expect(account.email).toContain(fakeAccount.email)
    expect(account.password).toContain(fakeAccount.password)
  })
})
