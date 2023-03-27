import type React from 'react';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import MainPageIcon from 'shared/assets/icons/main-20-20.svg';
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg'
import UserProfilePageIcon from 'shared/assets/icons/userProfile-20-20.svg'

export interface SidebarItemType {
  path: string
  text: string
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  isProtected?: boolean
}

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
  }
]
