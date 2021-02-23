import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export declare class Banana {
  readonly id: string;
  readonly vector: string;
  readonly cognito_uuid: string:
  constructor(init: ModelInit<Banana>);
  static copyOf(source: Banana, mutator: (draft: MutableModel<Banana>) => MutableModel<Banana> | void): Banana;
}
