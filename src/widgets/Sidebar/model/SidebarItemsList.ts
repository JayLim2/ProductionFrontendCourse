import { RoutePath } from 'app/providers/router/config/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg';
import UserProfilePageIcon from 'shared/assets/icons/userProfile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg';
import { type SidebarItemType } from 'widgets/Sidebar/model/SidebarItemType';

export const SidebarItemsList: SidebarItemType[] = [
  {
    path: RoutePath.main,
    icon: MainPageIcon,
    text: 'mainPageLinkTitle'
  },
  {
    path: RoutePath.about,
    icon: AboutPageIcon,
    text: 'aboutPageLinkTitle'
  },
  {
    path: RoutePath.userProfile,
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
]
