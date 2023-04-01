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
    view: ArticleView.SMALL,
    // Pagination
    page: 1,
    hasMore: true,
    // Other
    _initialized: false
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    initState: (state) => {
      const articleView = localStorage.getItem(LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY) as ArticleView;
      state.view = articleView;
      state.limit = articleView === ArticleView.BIG ? 4 : 9;
      state._initialized = true;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListArticles.pending, (state) => {
        delete state.error;
        state.isLoading = true;
      })
      .addCase(fetchListArticles.fulfilled, (
        state,
        action: PayloadAction<Article[]>
      ) => {
        state.isLoading = false;
        listArticlesAdapter.addMany(state, action.payload);
        state.hasMore = action.payload.length > 0;
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
