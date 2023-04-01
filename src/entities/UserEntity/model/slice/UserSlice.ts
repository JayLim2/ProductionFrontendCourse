import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserSchema } from '../types/UserSchema';
import { type User } from '../types/User';
import { USER_LOCAL_STORAGE_KEY } from 'shared/consts/global';

const initialState: UserSchema = {
  _initialized: false
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },
    initAuthData: (state: UserSchema) => {
      const user = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (user) {
        state.authData = JSON.parse(user);
      }
      state._initialized = true;
    },
    logout: (state) => {
      delete state.authData;
      localStorage.removeItem(USER_LOCAL_STORAGE_KEY);
    }
  }
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
