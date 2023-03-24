export type { UserProfile } from './model/types/UserProfile';
export type { UserProfileSchema } from './model/types/UserProfileSchema';

export {
  userProfileActions,
  userProfileReducer
} from './model/slice/UserProfileSlice';

export {
  fetchUserProfileData
} from './model/services/FetchUserProfileData/FetchUserProfileData';

export {
  UserProfileCard
} from '../UserProfileEntity/ui/UserProfileCard';
