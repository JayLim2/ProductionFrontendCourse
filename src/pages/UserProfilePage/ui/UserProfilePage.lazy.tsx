import { type FC, lazy } from 'react'
import { type UserProfilePageProps } from './UserProfilePage'

// UserProfilePage.lazy

const UserProfilePageLazy = lazy<FC<UserProfilePageProps>>(async () => await import('./UserProfilePage'));

export {
  UserProfilePageLazy as UserProfilePage
}
