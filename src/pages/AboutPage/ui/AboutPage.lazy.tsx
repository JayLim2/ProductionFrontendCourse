import { type FC, lazy } from 'react'

const AboutPageLazy = lazy<FC<any>>(async () => await new Promise(
  (resolve) => {
    // FIXME ONLY FOR LEARNING
    setTimeout(() => {
      resolve(import('./AboutPage'))
    }, 1000)
  }
))

export default AboutPageLazy
