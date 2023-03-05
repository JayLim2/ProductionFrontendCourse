import { type FC, Suspense } from 'react'
import 'app/styles/index.scss'
import { useTheme } from 'app/providers/ThemeProvider/lib/Theme/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavigationBar } from 'widgets/NavigationBar'
import { Sidebar } from 'widgets/Sidebar'

const App: FC<any> = () => {
  const { theme } = useTheme()

  return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <NavigationBar/>
                <div className="content-page">
                    <Sidebar />
                    <div className="page-wrapper">
                        <AppRouter/>
                    </div>
                </div>
            </Suspense>
        </div>
  )
}

export default App
