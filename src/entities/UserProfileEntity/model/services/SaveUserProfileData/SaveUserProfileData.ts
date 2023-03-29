import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfileNewData } from '../../selectors/GetUserProfileNewData/GetUserProfileNewData';
import { type UserProfile } from '../../types/UserProfile';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { UserProfileValidationError } from '../../types/UserProfileValidationError';
import { validateUserProfileData } from '../ValidateUserProfileData/ValidateUserProfileData';

export const saveUserProfileData = createAsyncThunk<UserProfile, void, ThunkConfiguration<UserProfileValidationError[]>>(
  'userProfile/saveUserProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const newData = getUserProfileNewData(getState());
    const validationErrors: UserProfileValidationError[] =
        validateUserProfileData(newData as UserProfile);

    if (validationErrors.length) {
      return rejectWithValue(validationErrors);
    }

    try {
      const response = await extra.api.put<UserProfile>('/profile', newData);
      if (!response.data) {
        throw new Error('Empty response.');
      }
      return response.data
    } catch (e) {
      console.log('Error occurred in service "SaveUserProfileData": ', e);
      return rejectWithValue([
        UserProfileValidationError.INTERNAL_SERVER_ERROR
      ]);
    }
  }
)
