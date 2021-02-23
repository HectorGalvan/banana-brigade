import {DataStore} from '@aws-amplify/datastore';
import {Banana} from './models';

export default class BananaData {
  static async all(){
    return await DataStore.query(Banana)
  }

  static async find(cognito_uuid){
    return await DataStore.query(Banana, t => t.cognito_uuid("eq", cognito_uuid));
  }

  static create(hashnode_username,cognito_uuid,vector){
    DataStore.save(
      new Banana({
        hashnode_username: hashnode_username,
        cognito_uuid: cognito_uuid,
        vector: JSON.stringify(vector)
      })
    )
  }

  static update(){
  }
}
