import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type UserProfileSchema } from '../types/UserProfileSchema';
import { type UserProfile } from 'entities/UserProfileEntity';
import { fetchUserProfileData } from '../services/FetchUserProfileData/FetchUserProfileData';
import { saveUserProfileData } from '../services/SaveUserProfileData/SaveUserProfileData';

const initialState: UserProfileSchema = {
  isReadonly: true,
  isLoading: false,
  error: undefined,
  data: undefined
}
export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    setReadOnly: (state: UserProfileSchema, action: PayloadAction<boolean>) => {
      state.isReadonly = action.payload;
    },
    updateUserProfile: (state: UserProfileSchema, action: PayloadAction<UserProfile>) => {
      state.newData = {
        ...state.newData,
        ...action.payload
      };
    },
    cancelEditingUserProfile: (state: UserProfileSchema) => {
      state.isReadonly = true;
      state.newData = state.data;
      delete state.validationError;
    },
    saveUserProfile: (state: UserProfileSchema) => {
      state.isReadonly = true;
      state.data = state.newData;
    }
  },
  extraReducers: (builder) => {
    builder // Fetch User Profile Data
      .addCase(fetchUserProfileData.pending, (state) => {
        delete state.error;
        state.isLoading = true;
      })
      .addCase(
        fetchUserProfileData.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.newData = action.payload;
        }
      )
      .addCase(fetchUserProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }) // Save User Profile Data
      .addCase(saveUserProfileData.pending, (state) => {
        delete state.validationError;
        state.isLoading = true;
      })
      .addCase(
        saveUserProfileData.fulfilled,
        (state, action: PayloadAction<UserProfile>) => {
          delete state.validationError;
          state.isLoading = false;
          state.data = action.payload;
          state.newData = action.payload;
          state.isReadonly = true;
        }
      )
      .addCase(saveUserProfileData.rejected, (state, action) => {
        state.isLoading = false;
        state.validationError = action.payload;
      })
  }
})

export const { actions: userProfileActions } = userProfileSlice
export const { reducer: userProfileReducer } = userProfileSlice
