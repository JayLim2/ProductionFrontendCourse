import { type StateSchema } from 'app/providers/StoreProvider';
import { type UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';

export const getUserProfileDataValidationError =
    (state: StateSchema): UserProfileValidationError[] | undefined => {
      return state?.userProfile?.validationError;
    }
