import { lazy } from 'react'

const MainPageLazy = lazy(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    // @ts-expect-error Because I don't know another way to do it
    resolve(import('./MainPage'))
  }, 1000)
}))

export default MainPageLazy
