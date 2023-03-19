import { type StateSchema } from 'app/providers/StoreProvider';
import { type User } from '../../types/User';

export const getUserAuthData = (state: StateSchema): User => {
  return state.user.authData;
};
