import { type StateSchema } from 'app/providers/StoreProvider';

export const getAuthError = (state: StateSchema): string => {
  return state?.authForm?.error || '';
};
