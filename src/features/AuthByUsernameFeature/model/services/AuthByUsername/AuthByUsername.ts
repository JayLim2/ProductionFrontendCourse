import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type User, userActions } from 'entities/UserEntity';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/global';

interface AuthByUsernameProps {
  username: string
  password: string
}

export const authByUsername = createAsyncThunk<User, AuthByUsernameProps, { rejectValue: string }>(
  'auth/byUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData);
      if (!response.data) {
        throw new Error('Empty response.');
      }
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));
      return response.data
    } catch (e) {
      console.log('Error in service "AuthByUsername": ', e);
      return thunkAPI.rejectWithValue('ERROR_CODE');
    }
  }
)
