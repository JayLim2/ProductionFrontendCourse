import { type StateSchema } from 'app/providers/StoreProvider';
import { type Article } from 'entities/Article';

export const getArticleDetailsData = (state: StateSchema): Article | undefined => {
  return state?.article?.data;
}
