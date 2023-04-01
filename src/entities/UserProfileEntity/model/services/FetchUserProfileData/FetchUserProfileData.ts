import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type UserProfile } from '../../types/UserProfile';

export const fetchUserProfileData = createAsyncThunk<UserProfile, string, ThunkConfiguration<string>>(
  'userProfile/fetchUserProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.get<UserProfile>(`/profiles/${profileId}`);
      if (!response.data) {
        throw new Error('Empty response.');
      }
      return response.data
    } catch (e) {
      console.log('Error in service "FetchUserProfileData": ', e);
      return rejectWithValue('ERROR_CODE');
    }
  }
)
