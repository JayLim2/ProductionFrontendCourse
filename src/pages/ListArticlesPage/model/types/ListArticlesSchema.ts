import { type EntityState } from '@reduxjs/toolkit';
import { type ArticleSortField, type ArticleType, type Article, type ArticleView } from 'entities/Article';
import { type SortOrder } from 'shared/types/FilterPanelTypes';

export interface ListArticlesSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // Pagination
  page: number
  limit?: number
  hasMore: boolean

  // Filters
  view: ArticleView
  sortOrder: SortOrder
  sortField: ArticleSortField
  searchQuery: string
  articleType: ArticleType

  // Other
  _initialized: boolean
}
