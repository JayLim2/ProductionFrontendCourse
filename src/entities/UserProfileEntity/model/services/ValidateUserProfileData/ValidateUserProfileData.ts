import { type UserProfile } from '../../types/UserProfile';
import { UserProfileValidationError } from '../../types/UserProfileValidationError';

export const validateUserProfileData = (userProfile?: UserProfile): UserProfileValidationError[] => {
  if (!userProfile) {
    return [UserProfileValidationError.NO_USER_PROFILE_DATA];
  }

  const {
    firstName,
    lastName,
    username,
    age,
    country,
    city,
    currency
  } = userProfile;

  const validationErrors: UserProfileValidationError[] = [];

  if (!firstName) {
    validationErrors.push(UserProfileValidationError.EMPTY_FIRST_NAME);
  }

  if (!lastName) {
    validationErrors.push(UserProfileValidationError.EMPTY_LAST_NAME);
  }

  if (!username) {
    validationErrors.push(UserProfileValidationError.EMPTY_USERNAME);
  }

  if (Number.isNaN(age)) {
    validationErrors.push(UserProfileValidationError.AGE_IS_NOT_A_NUMBER);
  }

  if (!country) {
    validationErrors.push(UserProfileValidationError.EMPTY_COUNTRY);
  }

  if (!city) {
    validationErrors.push(UserProfileValidationError.EMPTY_CITY);
  }

  if (!currency) {
    validationErrors.push(UserProfileValidationError.EMPTY_CURRENCY);
  }

  return validationErrors;
}
