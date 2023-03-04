import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig'

const AppRouter: FC<any> = () => {
  return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {
                    Object.values(routeConfig).map(({ path, element }) => {
                      return (
                            <Route key={path}
                                   path={path}
                                   element={element}
                            />
                      )
                    })
                }
            </Routes>
        </Suspense>
  )
}

export default AppRouter
