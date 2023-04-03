import { createEntityAdapter, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article, ArticleSortField, ArticleType, ArticleView } from 'entities/Article';
import { type ListArticlesSchema } from 'pages/ListArticlesPage';
import { LIST_ARTICLES_VIEW_LOCAL_STORAGE_KEY } from 'shared/consts/global';
import { fetchListArticles } from '../../model/services/FetchListArticles/FetchListArticles';
import { SortOrder } from 'shared/types/FilterPanelTypes';

const listArticlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
});

export const getArticles = listArticlesAdapter.getSelectors<StateSchema>(
  (state) => state.listArticles || listArticlesAdapter.getInitialState()
);

const listArticlesPageSlice = createSlice({
  name: 'listArticlesPageSlice',
  initialState: listArticlesAdapter.getInitialState<ListArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.SMALL,
    // Pagination
    limit: 9,
    page: 1,
    hasMore: true,
    // Filters
    searchQuery: '',
    sortField: ArticleSortField.CREATED,
    sortOrder: SortOrder.ASC,
    articleType: ArticleType.ALL,
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
    setSortField: (state, action: PayloadAction<ArticleSortField>) => {
      state.sortField = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setArticleType: (state, action: PayloadAction<ArticleType>) => {
      state.articleType = action.payload;
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
      .addCase(fetchListArticles.pending, (state, action) => {
        delete state.error;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          listArticlesAdapter.removeAll(state);
        }
      })
      .addCase(fetchListArticles.fulfilled, (
        state,
        action
      ) => {
        state.isLoading = false;
        // TODO 03.04.2023 fix default limit
        state.hasMore = action.payload.length >= (state?.limit || 1);

        if (action.meta.arg.replace) {
          listArticlesAdapter.setAll(state, action.payload);
        } else {
          listArticlesAdapter.addMany(state, action.payload);
        }
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
} = listArticlesPageSlice;
