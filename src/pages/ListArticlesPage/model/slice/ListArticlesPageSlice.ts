import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article, ArticleView } from 'entities/Article';
import { type ListArticlesSchema } from 'pages/ListArticlesPage';
import { LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/global';
import { fetchListArticles } from '../../model/services/FetchListArticles/FetchListArticles';

const listArticlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = listArticlesAdapter.getSelectors<StateSchema>(
  (state) => state.listArticles || listArticlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: listArticlesAdapter.getInitialState<ListArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchListArticles.fulfilled, (
        state,
        action: PayloadAction<Article[]>
      ) => {
        state.isLoading = false;
        listArticlesAdapter.setAll(state, action.payload);
      })
      .addCase(fetchListArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  }
});

export const {
  reducer: listArticlesPageReducer,
  actions: listArticlesPageActions
} = articlesPageSlice;
