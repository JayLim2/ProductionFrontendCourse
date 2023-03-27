import { type UserProfile } from './UserProfile';

export interface UserProfileSchema {
  data?: UserProfile
  newData?: UserProfile
  isLoading: boolean
  error?: string
  isReadonly: boolean
}
