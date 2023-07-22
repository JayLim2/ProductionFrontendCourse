import { type FC, lazy } from 'react'

const ArticlePageLazy = lazy<FC<any>>(async () => await import('./ArticlePage'));

export default ArticlePageLazy
