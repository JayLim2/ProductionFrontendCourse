import { type StateSchema } from 'app/providers/StoreProvider';
import { getAuthIsLoading } from './GetAuthIsLoading';

describe('Test for GetAuthLoading', () => {
  test('should return true if it is set to "true"', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {
        isLoading: true
      }
    };
    expect(getAuthIsLoading(partialState as StateSchema)).toBe(true);
  });

  test('should return false if it is set to "false"', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {
        isLoading: false
      }
    };
    expect(getAuthIsLoading(partialState as StateSchema)).toBe(false);
  });

  test('should return "false" by default if state is empty', () => {
    const partialState: DeepPartial<StateSchema> = {};
    expect(getAuthIsLoading(partialState as StateSchema)).toBe(false);
  });

  test('should return "false" by default if field "error" is empty', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {}
    };
    expect(getAuthIsLoading(partialState as StateSchema)).toBe(false);
  });
});
