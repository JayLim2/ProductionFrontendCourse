import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/ListArticlesPageSelectors';

interface FetchListArticlesProps {
  page?: number
}

export const fetchListArticles = createAsyncThunk<Article[], FetchListArticlesProps, ThunkConfiguration<string>>(
  'listArticlesPage/fetchListArticles',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const { page = 1 } = props;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit
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
