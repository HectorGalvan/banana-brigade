// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Banana } = initSchema(schema);

export {
  Banana
};