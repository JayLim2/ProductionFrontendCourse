import { type UserProfileSchema } from '../../types/UserProfileSchema';

export const getUserProfileError = (state: UserProfileSchema): string => {
  return state?.error || '';
}
