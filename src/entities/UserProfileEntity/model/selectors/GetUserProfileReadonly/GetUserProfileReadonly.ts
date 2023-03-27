import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserProfileReadonly = (state: StateSchema): boolean => {
  return Boolean(state?.userProfile?.isReadonly);
}
