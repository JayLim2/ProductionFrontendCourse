import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema): boolean | undefined => {
  return state.articleComments?.isLoading;
};
export const getArticleCommentsError = (state: StateSchema): string | undefined => {
  return state.articleComments?.error;
};
