import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavigationBar.module.scss'
import { UxLink, UxLinkTheme } from 'shared/ui/UxLink/UxLink'
import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

interface NavigationBarProps {
  className?: string
}

export const NavigationBar: FC<NavigationBarProps> = (props) => {
  const { className } = props
  const { t } = useTranslation()

  return (
        <div className={classNames(styles.NavigationBar, {}, [className])}>
            <div className={styles.links}>

            </div>
        </div>
  )
}
