import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { UxButton } from 'shared/ui/UxButton/UxButton'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [isCollapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const onToggleCollapsed = (): void => {
    setCollapsed(prevIsCollapsed => !prevIsCollapsed)
  }

  return (
        <div className={classNames(styles.Sidebar, {
          [styles.isCollapsed]: isCollapsed
        }, [className])}>
            <UxButton onClick={onToggleCollapsed}>
                {t('toggleSidebarButton')}
            </UxButton>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher/>
                <LanguageSwitcher className={styles.indentLanguageSwitcher}/>
            </div>
        </div>
  )
}
