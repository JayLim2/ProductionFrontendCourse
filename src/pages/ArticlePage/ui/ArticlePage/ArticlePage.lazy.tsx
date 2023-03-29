import { type FC, lazy } from 'react'

const ArticlePageLazy = lazy<FC<any>>(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    resolve(import('./ArticlePage'))
  }, 1000)
}))

export default ArticlePageLazy
