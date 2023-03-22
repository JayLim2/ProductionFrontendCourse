import { createSlice } from '@reduxjs/toolkit'
import { type UserProfileSchema } from '../types/UserProfileSchema';

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

  }
})

export const { actions: userProfileActions } = userProfileSlice
export const { reducer: userProfileReducer } = userProfileSlice
