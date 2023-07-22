import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleType, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types/FilterPanelTypes';
import { ArticleSortField } from 'entities/Article/model/types/ArticleFilterPanelTypes';

export const getArticlesPageIsLoading = (state: StateSchema): boolean => {
  return state.listArticles?.isLoading || false;
};
export const getArticlesPageError = (state: StateSchema): string => {
  return state.listArticles?.error || 'ARTICLES_PAGE_ERROR';
};
export const getArticlesPageView = (state: StateSchema): ArticleView => {
  return state.listArticles?.view || ArticleView.SMALL;
};

// Pagination

export const getArticlesPageNum = (state: StateSchema): number => {
  return state.listArticles?.page || 1;
};
export const getArticlesPageLimit = (state: StateSchema): number => {
  return state.listArticles?.limit || 9;
};
export const getArticlesPageHasMore = (state: StateSchema): boolean => {
  return state.listArticles?.hasMore || false;
};

// Initializing

export const getArticlesPageInitialized = (state: StateSchema): boolean => {
  return state.listArticles?._initialized || false;
}

// Filters panel

export const getArticlesPageSortOrder = (state: StateSchema): SortOrder => {
  return state.listArticles?.sortOrder ?? SortOrder.ASC;
};
export const getArticlesPageSortField = (state: StateSchema): ArticleSortField => {
  return state.listArticles?.sortField ?? ArticleSortField.CREATED;
};
export const getArticlesPageSearchQuery = (state: StateSchema): string => {
  return state.listArticles?.searchQuery ?? '';
};
export const getArticlesPageArticleType = (state: StateSchema): ArticleType => {
  return state.listArticles?.articleType ?? ArticleType.ALL;
};
