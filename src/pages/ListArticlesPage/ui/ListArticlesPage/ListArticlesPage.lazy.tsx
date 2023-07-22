import { type FC, lazy, memo } from 'react'

const ListArticlesPageLazy = lazy<FC<any>>(async () => await import('./ListArticlesPage'));

export default memo(ListArticlesPageLazy);
