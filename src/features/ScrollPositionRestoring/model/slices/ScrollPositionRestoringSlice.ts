import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import {
  type ScrollPositionAction,
  type ScrollPositionSchema
} from '../types/ScrollPositionSchema';

const initialState: ScrollPositionSchema = {
  scroll: {}
};

export const scrollPositionRestoringSlice = createSlice({
  name: 'scrollPositionRestoring',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      { payload }: PayloadAction<ScrollPositionAction>
    ) => {
      state.scroll[payload.path] = payload.position;
    }
  }
});

// Action creators are generated for each case reducer function
export const { actions: scrollPositionActions } = scrollPositionRestoringSlice;
export const { reducer: scrollPositionReducer } = scrollPositionRestoringSlice;
