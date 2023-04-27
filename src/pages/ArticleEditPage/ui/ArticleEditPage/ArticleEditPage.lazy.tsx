import { type FC, lazy } from 'react';

const ArticleEditPageLazy = lazy<FC<any>>(async () => await new Promise((resolve) => {
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => {
    resolve(import('./ArticleEditPage'));
  }, 400);
}));

export default ArticleEditPageLazy;
