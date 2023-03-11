import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { TestBugButton } from 'app/providers/ErrorBoundary';

const MainPage: FC<any> = () => {
  const { t } = useTranslation('mainPage')

  return (
        <div>
            <TestBugButton />
            <br/>
            {t('mainPageContent')}
        </div>
  )
}

export default MainPage
