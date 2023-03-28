import { userProfileActions, userProfileReducer } from './UserProfileSlice';

import { type UserProfileSchema } from '../types/UserProfileSchema';
import { saveUserProfileData, type UserProfile } from 'entities/UserProfileEntity';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';

const data: UserProfile = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  age: 35,
  country: Country.RUS,
  city: 'Ekaterinburg',
  currency: Currency.RUB
}
const newData: UserProfile = {
  ...data,
  firstName: 'Peter',
  lastName: 'Impossible'
}

describe('Test for UserProfileSlice', () => {
  test('Test "setReadOnly"', () => {
    const state: DeepPartial<UserProfileSchema> = {
      isReadonly: false
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      userProfileActions.setReadOnly(true)
    )).toEqual({
      isReadonly: true
    });
  });

  test('Test "cancelEditingUserProfile"', () => {
    const state: DeepPartial<UserProfileSchema> = {
      isReadonly: false,
      newData,
      data
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      userProfileActions.cancelEditingUserProfile()
    )).toEqual({
      isReadonly: true,
      newData: data,
      data
    });
  });

  test('Test "updateUserProfile"', () => {
    const reallyNewData = {
      ...newData,
      username: 'MR_IMPOSSIBLE'
    };
    const state: DeepPartial<UserProfileSchema> = {
      isReadonly: false,
      newData
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      userProfileActions.updateUserProfile({
        username: 'MR_IMPOSSIBLE'
      })
    )).toEqual({
      isReadonly: false,
      newData: reallyNewData
    });
  });

  test('Test "saveUserProfile"', () => {
    const state: DeepPartial<UserProfileSchema> = {
      isReadonly: false,
      newData,
      data
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      userProfileActions.saveUserProfile()
    )).toEqual({
      isReadonly: true,
      newData,
      data: newData
    });
  });

  /* Testing extra-reducers */

  test('Test "saveUserProfile" (pending state)', () => {
    const state: DeepPartial<UserProfileSchema> = {
      isLoading: false,
      validationError: [
        UserProfileValidationError.INTERNAL_SERVER_ERROR
      ]
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      saveUserProfileData.pending
    )).toEqual({
      isLoading: true,
      validationError: undefined
    });
  });

  test('Test "saveUserProfile" (fulfilled state)', () => {
    const state: DeepPartial<UserProfileSchema> = {
      isLoading: true
    };
    expect(userProfileReducer(
      state as UserProfileSchema,
      saveUserProfileData.fulfilled(data, '')
    )).toEqual({
      isLoading: false,
      isReadonly: true,
      validationError: undefined,
      data,
      newData: data
    });
  });
});
