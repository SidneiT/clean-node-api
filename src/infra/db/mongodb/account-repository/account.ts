import { AccountModel } from '@/domain/models/account'
import { AddAccount, AddAccountModel } from '@/domain/usecases/add-account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccount {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getConnection('accounts')
    const result = await accountCollection.insertOne(accountData)

    return await Promise.resolve(
      Object.assign({}, accountData, { id: result.insertedId.toString() })
    )
  }
}
