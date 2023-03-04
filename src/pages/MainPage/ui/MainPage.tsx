import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

const MainPage: FC<any> = () => {
  const { t } = useTranslation('mainPage')

  return (
        <div>
            {t('mainPageContent')}
        </div>
  )
}

export default MainPage
