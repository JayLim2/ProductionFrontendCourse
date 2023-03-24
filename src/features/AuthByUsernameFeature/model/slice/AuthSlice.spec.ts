import { authActions, type AuthSchema } from 'features/AuthByUsernameFeature';
import { authReducer } from 'features/AuthByUsernameFeature/model/slice/AuthSlice';

describe('Test for AuthSlice', () => {
  test('Set "username"', () => {
    const state: DeepPartial<AuthSchema> = {
      username: 'admin'
    };
    expect(authReducer(
      state as AuthSchema,
      authActions.setUsername('admin123')
    )).toEqual({
      username: 'admin123'
    });
  });

  test('Set "password"', () => {
    const state: DeepPartial<AuthSchema> = {
      password: '111'
    };
    expect(authReducer(
      state as AuthSchema,
      authActions.setPassword('123456')
    )).toEqual({
      password: '123456'
    });
  });

  test('Set "isLoading"', () => {
    // TODO expect something
  });

  test('Set "error"', () => {
    // TODO expect something
  });
});
