import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => {
  return state.articlePage?.comments?.isLoading;
};
export const getArticleCommentsError = (state: StateSchema): string | undefined => {
  return state.articlePage?.comments?.error;
};
