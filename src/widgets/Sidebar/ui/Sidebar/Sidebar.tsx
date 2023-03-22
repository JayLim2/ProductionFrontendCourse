import { classNames } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { SidebarItemsList } from '../../model/SidebarItemType';
import { SidebarItem } from '../SidebarItem/SidebarItem';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [isCollapsed, setCollapsed] = useState(false)

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
                {SidebarItemsList.map(sidebarItem => (
                    <SidebarItem
                        key={sidebarItem.path}
                        item={sidebarItem}
                        isCollapsed={isCollapsed}
                    />
                ))}
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
});
