import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AuthSchema } from '../types/AuthSchema';
import { authByUsername } from '../services/AuthByUsername/AuthByUsername';

const initialState: AuthSchema = {
  isLoading: false,
  username: '',
  password: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authByUsername.pending, (state, action) => {
        delete state.error;
        state.isLoading = true;
      })
      .addCase(authByUsername.fulfilled, (state, action) => {
        state.isLoading = false;
        state.username = action.payload.username;
      })
      .addCase(authByUsername.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: authActions } = authSlice
export const { reducer: authReducer } = authSlice
