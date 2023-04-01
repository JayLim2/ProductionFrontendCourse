import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfiguration<string>>(
  'article/fetchCommentsByArticleId',
  async (articleId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!articleId) {
      return rejectWithValue('PARAMS_ERROR_CODE');
    }

    try {
      const response = await extra.api.get<Comment[]>('/comments', {
        params: {
          articleId,
          _expand: 'user'
        }
      });
      if (!response.data) {
        throw new Error();
      }
      return response.data;
    } catch (e) {
      return rejectWithValue('FETCHING_ERROR_CODE');
    }
  }
);
