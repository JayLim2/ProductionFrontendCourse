import { combineReducers } from '@reduxjs/toolkit';
import { type ArticlePageSchema } from '../types';

import {
  articlePageRecommendationsReducer
} from './ArticleRecommendationsSlice';
import {
  articlePageCommentsReducer
} from './ArticleCommentsSlice';

export const articlePageReducer = combineReducers<ArticlePageSchema>({
  recommendations: articlePageRecommendationsReducer,
  comments: articlePageCommentsReducer
});
