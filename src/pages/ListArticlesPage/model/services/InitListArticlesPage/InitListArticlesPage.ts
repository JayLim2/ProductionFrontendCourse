import { createAsyncThunk } from '@reduxjs/toolkit';
import { type ThunkConfiguration } from 'app/providers/StoreProvider';
import { getArticlesPageInitialized } from '../../selectors/ListArticlesPageSelectors';
import { listArticlesPageActions } from '../../slice/ListArticlesPageSlice';
import { fetchListArticles } from '../FetchListArticles/FetchListArticles';
import { type SortOrder } from 'shared/types/FilterPanelTypes';
import { type ArticleSortField, type ArticleType } from 'entities/Article';

export const initListArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfiguration<string>>(
  'articlesPage/initArticlesPage',
  async (urlSearchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;
    const initialized = getArticlesPageInitialized(getState());

    if (!initialized) {
      const parsedSortField = urlSearchParams.get('sortField') as ArticleSortField;
      const parsedSortOrder = urlSearchParams.get('sortOrder') as SortOrder;
      const parsedSearchQuery = urlSearchParams.get('searchQuery');
      const parsedArticleType = urlSearchParams.get('articleType') as ArticleType;

      const debug = `sortField="${parsedSortField}" sortOrder="${parsedSortOrder}" searchQuery="${parsedSearchQuery}" type="${parsedArticleType}"`
      console.warn(debug);

      // TODO 03.04.2023 how to improve?
      if (parsedSortField) {
        dispatch(listArticlesPageActions.setSortField(parsedSortField));
      }

      if (parsedSortOrder) {
        dispatch(listArticlesPageActions.setSortOrder(parsedSortOrder));
      }

      if (parsedSearchQuery) {
        dispatch(listArticlesPageActions.setSearchQuery(parsedSearchQuery));
      }

      if (parsedArticleType) {
        dispatch(listArticlesPageActions.setArticleType(parsedArticleType));
      }

      dispatch(listArticlesPageActions.initState());
      void dispatch(fetchListArticles({})); // TODO why empty?
    }
  }
);
