import { type StateSchema } from 'app/providers/StoreProvider';

export const getAuthIsLoading = (state: StateSchema): boolean => {
  return state?.authForm?.isLoading || false;
};
