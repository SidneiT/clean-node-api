import { EmailValidatorAdapter } from './email-validator-adapter'

describe('EmailValidator', () => {
  test('Should retur false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBeFalsy()
  })
})
