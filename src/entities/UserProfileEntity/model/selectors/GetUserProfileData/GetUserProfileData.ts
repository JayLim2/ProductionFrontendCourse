import { type UserProfile } from '../../types/UserProfile';
import { type UserProfileSchema } from '../../types/UserProfileSchema';

export const getUserProfileData = (state: UserProfileSchema): UserProfile | null => {
  return state?.data || null;
}
