import { type FC, lazy, memo } from 'react'

const ListArticlesPageLazy = lazy<FC<any>>(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    resolve(import('./ListArticlesPage'))
  }, 1000)
}))

export default memo(ListArticlesPageLazy);
