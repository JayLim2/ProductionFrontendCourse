import { type FC, Suspense, useEffect } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/Theme/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavigationBar } from 'widgets/NavigationBar'
import { Sidebar } from 'widgets/Sidebar'
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthDataInitialized, userActions } from 'entities/UserEntity';

const App: FC<any> = () => {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const authDataInitialized = useSelector(getUserAuthDataInitialized);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <NavigationBar/>
        <div className="content-page">
          <Sidebar/>
          <div className="page-wrapper">
            {authDataInitialized && <AppRouter/>}
          </div>
        </div>
      </Suspense>
    </div>
  )
}

export default App
