import { type ArticleBlock } from './ArticleBlockTypes';

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export interface Article {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
