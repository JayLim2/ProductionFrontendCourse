import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserProfileIsLoading = (state: StateSchema): boolean => {
  return state?.userProfile?.isLoading || false;
}
