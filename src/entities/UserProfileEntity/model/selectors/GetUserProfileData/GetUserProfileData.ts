import { type UserProfile } from '../../types/UserProfile';
import { type StateSchema } from 'app/providers/StoreProvider';

export const getUserProfileData = (state: StateSchema): UserProfile | undefined => {
  return state?.userProfile?.data;
}
