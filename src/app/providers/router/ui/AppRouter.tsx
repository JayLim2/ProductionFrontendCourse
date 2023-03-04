import { type FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from 'app/providers/router/config/routeConfig'
import { useTranslation } from 'react-i18next';

const AppRouter: FC<any> = () => {
  const { t } = useTranslation();

  return (
        <Suspense fallback={<div>{t('loadingText')}</div>}>
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
