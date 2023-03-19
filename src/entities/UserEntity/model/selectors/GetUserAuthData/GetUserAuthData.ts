import { type StateSchema } from 'app/providers/StoreProvider';
import { type User } from '../../types/User';

export const getUserAuthData = (state: StateSchema): User => state.user.authData;
