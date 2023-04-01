import { type FC, memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader';
import { type AppRoutesProps, routeConfig } from '../config/routeConfig';
import { RequireAuth } from '../ui/RequireAuth';

const AppRouter: FC<any> = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const routeElement = route.isProtected
      ? <RequireAuth><>{route.element}</></RequireAuth>
      : route.element;
    return (
        <Route key={route.path}
               path={route.path}
               element={routeElement}
        />
    );
  }, []);

  return (
        <Suspense fallback={<PageLoader/>}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrapper)}
            </Routes>
        </Suspense>
  )
}

export default memo(AppRouter)
