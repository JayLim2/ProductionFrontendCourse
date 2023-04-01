import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserAuthDataInitialized = (state: StateSchema): boolean => {
  return Boolean(state.user._initialized);
}
