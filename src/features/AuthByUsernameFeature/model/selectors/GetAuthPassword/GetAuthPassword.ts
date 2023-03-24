import { type StateSchema } from 'app/providers/StoreProvider';

export const getAuthPassword = (state: StateSchema): string => {
  return state?.authForm?.password || '';
};
