import { type FC, lazy } from 'react'

const AboutPageLazy = lazy<FC<any>>(async () => await import('./AboutPage'))

export default AboutPageLazy
