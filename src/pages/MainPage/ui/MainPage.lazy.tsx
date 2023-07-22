import { type FC, lazy } from 'react'

const MainPageLazy = lazy<FC<any>>(async () => await import('./MainPage'));

export default MainPageLazy
