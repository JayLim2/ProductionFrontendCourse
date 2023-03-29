import { type UserProfile } from './UserProfile';
import { type UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';

export interface UserProfileSchema {
  data?: UserProfile
  newData?: UserProfile
  isLoading: boolean
  error?: string
  isReadonly: boolean
  validationError?: UserProfileValidationError[]
}
