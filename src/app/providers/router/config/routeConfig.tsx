import { type RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage';
import { UserProfilePage } from 'pages/UserProfilePage/ui/UserProfilePage.lazy';
import { ListArticlesPage } from 'pages/ListArticlesPage';
import { ArticlePage } from 'pages/ArticlePage';

export type AppRoutesProps = RouteProps & {
  isProtected?: boolean
};
export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  USER_PROFILE = 'userProfile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article',
  // Should be last
  NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.USER_PROFILE]: '/profile',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/article/', // :id
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },
  [AppRoutes.USER_PROFILE]: {
    path: RoutePath.userProfile,
    element: <UserProfilePage />,
    isProtected: true
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ListArticlesPage />,
    isProtected: true
  },
  [AppRoutes.ARTICLE_DETAILS]: {
    path: `${RoutePath.article}:id`,
    element: <ArticlePage />,
    isProtected: true
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.notFound,
    element: <NotFoundPage />
  }
}
