import { type FC, lazy } from 'react';

const ArticleEditPageLazy = lazy<FC<any>>(async () => await import('./ArticleEditPage'));

export default ArticleEditPageLazy;
