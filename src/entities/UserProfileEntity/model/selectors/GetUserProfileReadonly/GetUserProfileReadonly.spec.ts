import { type StateSchema } from 'app/providers/StoreProvider';
import { getUserProfileReadonly } from './GetUserProfileReadonly';

describe('Test for GetUserProfileIsReadOnly', () => {
  test('should return user profile "isReadOnly" = true flag from state if it is present & true', () => {
    const expectedData = true;
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        isReadonly: expectedData
      }
    };
    expect(getUserProfileReadonly(state as StateSchema)).toBe(expectedData);
  });

  test('should return user profile "isReadOnly" = false flag from state if it is present & false', () => {
    const expectedData = false;
    const state: DeepPartial<StateSchema> = {
      userProfile: {
        isReadonly: expectedData
      }
    };
    expect(getUserProfileReadonly(state as StateSchema)).toBe(expectedData);
  });

  test('should return "false" by default when state is empty', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getUserProfileReadonly(state as StateSchema)).toBe(false);
  });
});
