import { type StateSchema } from 'app/providers/StoreProvider';
import { type AuthSchema } from '../../types/AuthSchema';

export const getAuthState = (state: StateSchema): AuthSchema => {
  return state.authForm;
};
