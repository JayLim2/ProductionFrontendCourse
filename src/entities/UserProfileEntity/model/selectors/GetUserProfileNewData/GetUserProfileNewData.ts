import { type UserProfile } from '../../types/UserProfile';
import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserProfileNewData = (state: StateSchema): UserProfile | undefined => {
  return state?.userProfile?.newData;
}
