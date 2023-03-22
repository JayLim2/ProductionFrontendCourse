import { type FC, lazy } from 'react'
import { type UserProfilePageProps } from './UserProfilePage'

// UserProfilePage.lazy

const UserProfilePageLazy = lazy<FC<UserProfilePageProps>>(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    resolve(import('./UserProfilePage'))
  }, 1000)
}))

export {
  UserProfilePageLazy as UserProfilePage
}
