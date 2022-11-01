import { DbAddAccount } from '@/data/usecases/add-account/db-add-account'
import { BcryptAdapter } from '@/infra/criptography/bcrypt-adapter'
import { AccountMongoRepository } from '@/infra/db/mongodb/account-repository/account'
import { SignUpController } from '@/presentation/controllers/signup/signup-controller'
import { EmailValidatorAdapter } from '@/utils/email-validator-adapter'

export const makeSignupController = (): SignUpController => {
  const salt = 12

  const dbAddAccount = new DbAddAccount(
    new BcryptAdapter(salt),
    new AccountMongoRepository()
  )

  const emailValidatorAdapter = new EmailValidatorAdapter()

  return new SignUpController(emailValidatorAdapter, dbAddAccount)
}
