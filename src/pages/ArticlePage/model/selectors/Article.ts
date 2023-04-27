import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/UserEntity';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
  getArticleDetailsData,
  getUserAuthData,
  (article, user) => {
    if (!article || !user) {
      return false;
    }

    return article.user.id === user.id;
  }
);
