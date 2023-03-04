import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

const AboutPage: FC<any> = () => {
  const { t } = useTranslation('aboutPage')

  return (
        <div>
            {t('aboutPageContent')}
        </div>
  )
}

export default AboutPage
