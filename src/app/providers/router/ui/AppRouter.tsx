import { type FC, memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig'
import { PageLoader } from 'widgets/PageLoader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/UserEntity';

const AppRouter: FC<any> = () => {
  const isAuth = useSelector(getUserAuthData);

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter(route => {
      if (route.isProtected && !isAuth) {
        return false;
      }
      return true;
    })
  }, [isAuth]);

  return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {
                    routes.map(({ path, element }) => {
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

export default memo(AppRouter)
