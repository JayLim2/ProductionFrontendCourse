import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getAuthPassword } from './GetAuthPassword';

describe('Test for GetAuthPassword', () => {
  test('should return password from state if it is present', () => {
    const expectedPassword = '123456';
    const partialState: DeepPartial<StateSchema> = {
      authForm: {
        password: expectedPassword
      }
    };
    expect(getAuthPassword(partialState as StateSchema)).toEqual(expectedPassword);
  });

  test('should return empty string by default if state is empty', () => {
    const partialState: DeepPartial<StateSchema> = {};
    expect(getAuthPassword(partialState as StateSchema)).toEqual('');
  });

  test('should return empty string by default if field "error" is empty', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {}
    };
    expect(getAuthPassword(partialState as StateSchema)).toEqual('');
  });
});
