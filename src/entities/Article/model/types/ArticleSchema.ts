import { type Article } from './ArticleTypes';

export interface ArticleSchema {
  isLoading: boolean
  error?: string
  data?: Article
}
