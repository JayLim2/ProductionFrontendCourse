import { lazy } from 'react'

const AboutPageLazy = lazy(async () => await new Promise(
  (resolve) => {
    // FIXME ONLY FOR LEARNING
    setTimeout(() => {
      // @ts-expect-error Because I don't know another way to do it
      resolve(import('./AboutPage'))
    }, 1000)
  }
))

export default AboutPageLazy
