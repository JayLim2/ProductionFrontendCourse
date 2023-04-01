import { type User } from './User';

export interface UserSchema {
  authData?: User
  _initialized: boolean
}
