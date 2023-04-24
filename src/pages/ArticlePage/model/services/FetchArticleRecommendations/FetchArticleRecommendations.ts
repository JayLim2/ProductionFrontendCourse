import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfiguration<string>>(
  'articlePage/fetchArticleRecommendations',
  async (props, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4
        }
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('ERROR_CODE');
    }
  }
);
