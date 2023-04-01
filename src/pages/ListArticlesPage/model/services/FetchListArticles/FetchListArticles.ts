import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const fetchListArticles = createAsyncThunk<Article[], void, ThunkConfiguration<string>>(
  'listArticlesPage/fetchListArticles',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user'
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
