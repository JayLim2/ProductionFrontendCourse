import { type CounterSchema } from 'entities/CounterEntity';
import { type UserSchema } from 'entities/UserEntity';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
}
