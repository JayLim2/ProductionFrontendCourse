import { type UserProfileSchema } from '../../types/UserProfileSchema';

export const getUserProfileIsLoading = (state: UserProfileSchema): boolean => {
  return state?.isLoading || false;
}
