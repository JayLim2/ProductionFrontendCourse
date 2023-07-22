import { type StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';
import { type ScrollSchema } from '../../model/types/ScrollPositionSchema';

export const getUIScroll = (state: StateSchema): ScrollSchema => {
  return state.scrollPosition.scroll;
};

export const getUIScrollByPath = createSelector(
  getUIScroll,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0
);
