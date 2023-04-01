import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { getArticlesPageInitialized } from '../../selectors/ListArticlesPageSelectors';
import { listArticlesPageActions } from '../../slice/ListArticlesPageSlice';
import { fetchListArticles } from '../FetchListArticles/FetchListArticles';

export const initListArticlesPage = createAsyncThunk<void, void, ThunkConfiguration<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const initialized = getArticlesPageInitialized(getState());

    if (!initialized) {
      dispatch(listArticlesPageActions.initState());
      void dispatch(fetchListArticles({
        page: 1
      }));
    }
  }
);
