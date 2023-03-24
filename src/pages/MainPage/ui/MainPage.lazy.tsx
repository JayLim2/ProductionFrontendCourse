import { type FC, lazy } from 'react'

const MainPageLazy = lazy<FC<any>>(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    resolve(import('./MainPage'))
  }, 1000)
}))

export default MainPageLazy
