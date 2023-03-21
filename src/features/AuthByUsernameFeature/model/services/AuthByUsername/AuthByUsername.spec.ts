import axios from 'axios';
import { authByUsername } from './AuthByUsername';
import { userActions } from 'entities/UserEntity';
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

describe('Tests for AuthByUsername', () => {
  test('success authorization', async () => {
    const userValue = {
      id: '123-123-123456-1234',
      username: 'mockUser'
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({
      data: userValue
    }));

    const asyncThunk = new TestAsyncThunk(authByUsername);
    const result = await asyncThunk.callThunk({
      username: 'mockUser',
      password: '101010'
    });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(3);
    expect(asyncThunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(userValue);
  });

  test('failed authorization', async () => {
    const userValue = {
      id: '123-123-123456-1234',
      username: 'mockUser'
    };

    mockedAxios.post.mockReturnValue(Promise.resolve({
      status: 403
    }));

    const asyncThunk = new TestAsyncThunk(authByUsername);
    const result = await asyncThunk.callThunk({
      username: 'mockUser',
      password: '101010'
    });

    expect(asyncThunk.dispatch).toHaveBeenCalledTimes(2);
    expect(asyncThunk.dispatch).not.toHaveBeenCalledWith(userActions.setAuthData(userValue));
    expect(mockedAxios.post).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('ERROR_CODE');
  });
});
