import { createAsyncThunk } from '@reduxjs/toolkit';
import { type User, userActions } from 'entities/UserEntity';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/global';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';

interface AuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, ThunkConfiguration<string>>(
  'auth/byUsername',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>('/login', authData);
      if (!response.data) {
        throw new Error('Empty response.');
      }
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));
      return response.data
    } catch (e) {
      console.log('Error in service "AuthByUsername": ', e);
      return rejectWithValue('ERROR_CODE');
    }
  }
)
