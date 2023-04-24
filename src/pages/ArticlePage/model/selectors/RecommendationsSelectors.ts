import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema): boolean => {
  return Boolean(state.articlePage?.recommendations?.isLoading);
};

export const getArticleRecommendationsError = (state: StateSchema): string | undefined => {
  return state.articlePage?.recommendations?.error;
};
