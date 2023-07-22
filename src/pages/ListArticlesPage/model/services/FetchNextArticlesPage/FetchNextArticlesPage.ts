import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNum
} from '../../selectors/ListArticlesPageSelectors';
import { listArticlesPageActions } from '../../slice/ListArticlesPageSlice';
import { fetchListArticles } from '../FetchListArticles/FetchListArticles';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfiguration<string>>(
  'listArticlesPage/fetchNextArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const hasMore = getArticlesPageHasMore(getState());
    const page = getArticlesPageNum(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (hasMore && !isLoading) {
      const nextPage = page + 1;
      dispatch(listArticlesPageActions.setPage(nextPage));
      void dispatch(fetchListArticles({}));
    }
  }
);
