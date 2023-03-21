import { type DeepPartial } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { getAuthError } from './GetAuthError';

describe('Test for GetAuthError', () => {
  test('should return error', () => {
    const expectedError = 'Expected Error';
    const partialState: DeepPartial<StateSchema> = {
      authForm: {
        error: expectedError
      }
    };
    expect(getAuthError(partialState as StateSchema)).toEqual(expectedError);
  });

  test('should return empty string if state is empty', () => {
    const partialState: DeepPartial<StateSchema> = {};
    expect(getAuthError(partialState as StateSchema)).toEqual('');
  });

  test('should return empty string if field "error" is empty', () => {
    const partialState: DeepPartial<StateSchema> = {
      authForm: {}
    };
    expect(getAuthError(partialState as StateSchema)).toEqual('');
  });
});
