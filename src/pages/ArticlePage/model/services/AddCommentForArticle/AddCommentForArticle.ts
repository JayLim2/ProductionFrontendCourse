import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/UserEntity';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article/model/selectors/GetArticleDetailsData/GetArticleDetailsData';
import {
  fetchCommentsByArticleId
} from '../../services/FetchCommentsByArticleId/FetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfiguration<string>>(
  'article/addCommentForArticle',
  async (text, thunkApi) => {
    const {
      extra, dispatch, rejectWithValue, getState
    } = thunkApi;

    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text
      });

      if (!response.data) {
        throw new Error();
      }

      void dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  }
);
