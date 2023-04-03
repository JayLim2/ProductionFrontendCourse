import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { type Article, ArticleType } from 'entities/Article';
import { getArticlesPageLimit, getArticlesPageNum, getArticlesPageSortOrder, getArticlesPageSearchQuery, getArticlesPageSortField, getArticlesPageArticleType } from '../../selectors/ListArticlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchListArticlesProps {
  replace?: boolean
}

export const fetchListArticles = createAsyncThunk<Article[], FetchListArticlesProps, ThunkConfiguration<string>>(
  'listArticlesPage/fetchListArticles',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const page = getArticlesPageNum(getState());
    const limit = getArticlesPageLimit(getState());

    const sortField = getArticlesPageSortField(getState());
    const sortOrder = getArticlesPageSortOrder(getState());
    const searchQuery = getArticlesPageSearchQuery(getState());
    const articleType = getArticlesPageArticleType(getState());

    try {
      addQueryParams({
        sortField, sortOrder, searchQuery, articleType
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _page: page,
          _limit: limit,
          _sort: sortField,
          _order: sortOrder,
          q: searchQuery,
          type: articleType === ArticleType.ALL ? undefined : articleType
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
