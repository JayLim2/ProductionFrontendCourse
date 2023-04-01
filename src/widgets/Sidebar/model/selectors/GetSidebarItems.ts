import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from 'entities/UserEntity';
import { type SidebarItemType } from 'widgets/Sidebar/model/types/SidebarItemType';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import UserProfilePageIcon from 'shared/assets/icons/userProfile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';

export const getSidebarItems = createSelector(
  getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        icon: MainPageIcon,
        text: 'mainPageLinkTitle'
      },
      {
        path: RoutePath.about,
        icon: AboutPageIcon,
        text: 'aboutPageLinkTitle'
      }
    ];

    if (userData) {
      sidebarItemsList.push(
        {
          path: `${RoutePath.userProfile}${userData.id}`,
          icon: UserProfilePageIcon,
          text: 'userProfilePageLinkTitle',
          isProtected: true
        },
        {
          path: RoutePath.articles,
          icon: ArticleIcon,
          text: 'listArticlesPageLinkTitle',
          isProtected: true
        }
      );
    }

    return sidebarItemsList;
  }
)
