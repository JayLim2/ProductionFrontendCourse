import { type StateSchema } from 'app/providers/StoreProvider';
import { getAuthUsername } from './GetAuthUsername';

describe('Test for GetAuthUsername', () => {
  test('should return username from state if it is present', () => {
    const expectedUsername = 'admin';
    const partialState: DeepPartial<StateSchema> = {
      authForm: {
        username: expectedUsername
      }
    };
    expect(getAuthUsername(partialState as StateSchema)).toEqual(expectedUsername);
  });

  test('should return empty string by default if state is empty', () => {
    const partialState: DeepPartial<StateSchema> = {};
    expect(getAuthUsername(partialState as StateSchema)).toEqual('');
  });

  test('should return empty string by default if field "error" is empty', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {}
    };
    expect(getAuthUsername(partialState as StateSchema)).toEqual('');
  });
});
