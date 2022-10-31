import { Collection, InsertOneResult, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as MongoClient,

  async connect (uri: string): Promise<void> {
    this.client = await MongoClient.connect(uri)
  },

  async disconnect () {
    await this.client.close()
  },

  getCollection (name: string): Collection {
    return this.client.db().collection(name)
  },

  map (insertedData: any, mongoResult: InsertOneResult): any {
    return Object.assign({}, insertedData, { id: mongoResult.insertedId.toString() })
  }
}
