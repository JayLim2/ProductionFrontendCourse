import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsIsLoading = (state: StateSchema): boolean => {
  return Boolean(state?.article?.isLoading);
}
