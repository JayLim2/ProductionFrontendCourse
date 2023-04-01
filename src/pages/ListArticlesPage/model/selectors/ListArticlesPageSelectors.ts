import { type StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article';

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
