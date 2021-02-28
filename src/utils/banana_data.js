import {DataStore} from '@aws-amplify/datastore';
import {Banana} from '../models';

export default class BananaData {
  static async all(){
    return await DataStore.query(Banana)
  }

  static async find_by_banana_id(id){
    let bananas = await DataStore.query(Banana, t => t.id("eq", id));
    console.debug('find',bananas)
    return bananas[0]
  }

  static async find_by_cognito_uuid(cognito_uuid){
    let bananas = await DataStore.query(Banana, t => t.cognito_uuid("eq", cognito_uuid));
    console.debug('find',bananas)
    return bananas[0]
  }

  static async create(hashnode_username,cognito_uuid,vector,success){
    console.debug('create', arguments)
    try {
      let new_banana = await DataStore.save(
        new Banana({
          hashnode_username: hashnode_username,
          cognito_uuid: cognito_uuid,
          vector: JSON.stringify(vector)
        })
      )
      console.debug("create:success", new_banana);
      success(new_banana)
    } catch (error) {
      console.debug("create:error", error);
    }
  }

  static async update(banana_id,vector,success){
    try {
      const old_banana = await BananaData.find_by_banana_id(banana_id)
      console.debug('old_banana:update', old_banana)
      const updated_banana = await DataStore.save(
        Banana.copyOf(old_banana, updated => {
          updated.vector = JSON.stringify(vector)
        })
      )
      console.debug("update:success", updated_banana);
      success(updated_banana)
    } catch (error) {
      console.debug("update:error", error);
    }
  }
}
