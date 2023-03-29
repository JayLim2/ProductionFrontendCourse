import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserProfileError = (state: StateSchema): string => {
  return state?.userProfile?.error || '';
}
