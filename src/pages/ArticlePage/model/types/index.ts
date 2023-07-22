import { type ArticleCommentsSchema } from './ArticleCommentsSchema';
import { type ArticleRecommendationsSchema } from './ArticleRecommendationsSchema';

export interface ArticlePageSchema {
  comments: ArticleCommentsSchema
  recommendations: ArticleRecommendationsSchema
}
