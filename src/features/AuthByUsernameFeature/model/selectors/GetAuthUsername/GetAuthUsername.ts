import { type StateSchema } from 'app/providers/StoreProvider';

export const getAuthUsername = (state: StateSchema): string => {
  return state?.authForm?.username || '';
};
