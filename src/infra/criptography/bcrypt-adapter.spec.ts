import bcrypt from 'bcrypt'
import { BcryptAdapter } from './bcrypt-adapter'

jest.mock('bcrypt', () => ({
  async hash (data: string, salt: number): Promise<string> {
    return await Promise.resolve('hash_value')
  }
}))

const salt = 12
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt)
}

describe('Bcrypt Adapter', () => {
  test('Should call bcrypt with correct values', async () => {
    const sut = makeSut()

    const hashSpy = jest.spyOn(bcrypt, 'hash')

    await sut.encrypt('any_value')

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt)
  })

  test('Should return a hash on success', async () => {
    const sut = makeSut()

    const hash = await sut.encrypt('any_value')

    expect(hash).toBe('hash_value')
  })

  test('Should throw if bcrypt throw', async () => {
    const sut = makeSut()

    // @ts-expect-error: Unreachable code error
    jest.spyOn(bcrypt, 'hash').mockReturnValueOnce(Promise.reject(new Error()))

    const promise = sut.encrypt('any_value')

    await expect(promise).rejects.toThrow()
  })
})
