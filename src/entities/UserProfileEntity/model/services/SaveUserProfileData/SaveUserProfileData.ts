import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfileNewData } from '../../selectors/GetUserProfileNewData/GetUserProfileNewData';
import { type UserProfile } from '../../types/UserProfile';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';

export const saveUserProfileData = createAsyncThunk<UserProfile, void, ThunkConfiguration<string>>(
  'userProfile/saveUserProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const newData = getUserProfileNewData(getState());
    try {
      const response = await extra.api.put<UserProfile>('/profile', newData);
      if (!response.data) {
        throw new Error('Empty response.');
      }
      return response.data
    } catch (e) {
      console.log('Error in service "SaveUserProfileData": ', e);
      return rejectWithValue('ERROR_CODE');
    }
  }
)
