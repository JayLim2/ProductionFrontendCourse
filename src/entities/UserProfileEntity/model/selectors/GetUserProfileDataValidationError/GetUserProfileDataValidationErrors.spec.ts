import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserProfileDataValidationError } from './GetUserProfileDataValidationError';
import { UserProfileValidationError } from 'entities/UserProfileEntity/model/types/UserProfileValidationError';

// TODO add more variations for this test suite
describe('Test for GetUserProfileDataValidationErrors.spec', () => {
  test('should return user profile editing form data from state if it is present', () => {
    const expectedData = [
      UserProfileValidationError.EMPTY_FIRST_NAME,
      UserProfileValidationError.EMPTY_LAST_NAME
    ];
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        validationError: expectedData
      }
    };
    expect(getUserProfileDataValidationError(state as StateSchema)).toEqual(expectedData);
  });

  test('should return undefined when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileDataValidationError(state as StateSchema)).toBe(undefined);
  });
});
