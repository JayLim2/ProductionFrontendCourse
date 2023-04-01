import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Article } from '../../types/ArticleTypes';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfiguration<string>>(
  'article/fetchArticleById',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`);
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('ERROR_CODE');
    }
  }
);
