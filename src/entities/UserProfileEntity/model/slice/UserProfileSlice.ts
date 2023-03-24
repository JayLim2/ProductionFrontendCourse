import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserProfileSchema } from '../types/UserProfileSchema';
import { fetchUserProfileData } from '../services/FetchUserProfileData/FetchUserProfileData';
import { type UserProfile } from 'entities/UserProfileEntity';

const initialState: UserProfileSchema = {
  isReadonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}
export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfileData.pending, (state, action) => {
        delete state.error;
        state.isLoading = true;
      })
      .addCase(
        fetchUserProfileData.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchUserProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  }
})

export const { actions: userProfileActions } = userProfileSlice
export const { reducer: userProfileReducer } = userProfileSlice
