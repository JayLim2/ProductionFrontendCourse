import { type CounterSchema } from 'entities/CounterEntity';
import { type UserSchema } from 'entities/UserEntity';
import { type AuthSchema } from 'features/AuthByUsernameFeature';

export interface StateSchema {
  counter: CounterSchema
  user: UserSchema
  authForm?: AuthSchema
}
