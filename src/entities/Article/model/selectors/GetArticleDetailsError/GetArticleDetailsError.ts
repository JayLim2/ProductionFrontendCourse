import { type StateSchema } from 'app/providers/StoreProvider';

export const getArticleDetailsError = (state: StateSchema): string | undefined => {
  return state?.article?.error;
}
