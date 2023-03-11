import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { type FC, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { UxLink, UxLinkTheme } from 'shared/ui/UxLink/UxLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'app/providers/router/config/routeConfig';

import MainPageIcon from 'shared/assets/icons/main-20-20.svg'
import AboutPageIcon from 'shared/assets/icons/about-20-20.svg'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [isCollapsed, setCollapsed] = useState(false)
  const { t } = useTranslation();

  const onToggleCollapsed = (): void => {
    setCollapsed(prevIsCollapsed => !prevIsCollapsed)
  }

  return (
        <div data-testid='sidebar'
             className={classNames(styles.Sidebar, {
               [styles.isCollapsed]: isCollapsed
             }, [className])}
        >
            <div className={styles.sidebarLinksContainer}>
                <UxLink
                    theme={UxLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={styles.sidebarLinkWrapper}
                >
                    <MainPageIcon className={styles.sidebarIcon}/>
                    <span className={styles.sidebarLink}>
                        {t('mainPageLinkTitle')}
                    </span>
                </UxLink>
                <UxLink
                    theme={UxLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={styles.sidebarLinkWrapper}
                >
                    <AboutPageIcon className={styles.sidebarIcon}/>
                    <span className={styles.sidebarLink}>
                        {t('aboutPageLinkTitle')}
                    </span>
                </UxLink>
            </div>

            <UxButton
                data-testid='sidebar-toggle'
                theme={ButtonTheme.BACKGROUND_INVERTED}
                className={styles.collapseButton}
                onClick={onToggleCollapsed}
                isSquare={true}
                size={ButtonSize.L}
            >
                {isCollapsed ? '>' : '<'}
            </UxButton>
            <div className={styles.switchersContainer}>
                <ThemeSwitcher/>
                <LanguageSwitcher
                    className={styles.indentLanguageSwitcher}
                    isShort={isCollapsed}
                />
            </div>
        </div>
  )
}
