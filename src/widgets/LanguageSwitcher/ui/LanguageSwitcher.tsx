import { classNames } from 'shared/lib/classNames/classNames'
import styles from './LanguageSwitcher.module.scss'
import { useTranslation } from 'react-i18next'
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton'
import { type FC } from 'react'

interface LanguageSwitcherProps {
  className?: string
  isShort?: boolean
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = (props) => {
  const { className, isShort } = props
  const { t, i18n } = useTranslation()

  const switchLanguage = (): void => {
    void i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
        <UxButton
            className={classNames(styles.LanguageSwitcher, {}, [className])}
            theme={ButtonTheme.CLEAR_INVERTED}
            onClick={switchLanguage}
        >
            {t(isShort ? 'shortSwitchLanguageButton' : 'switchLanguageButton')}
        </UxButton>
  )
}
