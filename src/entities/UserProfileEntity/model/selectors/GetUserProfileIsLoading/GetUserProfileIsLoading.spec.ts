import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserProfileIsLoading } from './GetUserProfileIsLoading';

describe('Test for GetUserProfileIsLoading', () => {
  test('should return user profile "isLoading" = true flag from state if it is present & true', () => {
    const expectedData = true;
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        isLoading: expectedData
      }
    };
    expect(getUserProfileIsLoading(state as StateSchema)).toBe(expectedData);
  });

  test('should return user profile "isLoading" = false flag from state if it is present & false', () => {
    const expectedData = false;
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        isLoading: expectedData
      }
    };
    expect(getUserProfileIsLoading(state as StateSchema)).toBe(expectedData);
  });

  test('should return "false" by default when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileIsLoading(state as StateSchema)).toBe(false);
  });
});
