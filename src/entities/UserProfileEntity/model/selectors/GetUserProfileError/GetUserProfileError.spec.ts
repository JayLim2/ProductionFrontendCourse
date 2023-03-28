import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserProfileError } from './GetUserProfileError';

describe('Test for GetUserProfileError.spec', () => {
  test('should return user profile error message from state if it is present', () => {
    const expectedData = 'ErrorMessage';
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        error: expectedData
      }
    };
    expect(getUserProfileError(state as StateSchema)).toEqual(expectedData);
  });

  test('should return empty string by default when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileError(state as StateSchema)).toBe('');
  });
});
