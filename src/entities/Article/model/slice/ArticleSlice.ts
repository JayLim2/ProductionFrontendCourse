import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/FetchArticleById/FetchArticleById';
import { type Article } from '../types/ArticleTypes';
import { type ArticleSchema } from '../types/ArticleSchema';

const initialState: ArticleSchema = {
  isLoading: false,
  error: undefined,
  data: undefined
};

export const articleSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (
        state,
        action: PayloadAction<Article>
      ) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const { actions: articleActions } = articleSlice;
export const { reducer: articleReducer } = articleSlice;
