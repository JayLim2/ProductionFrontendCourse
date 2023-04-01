import { classNames, type Modifiers } from 'shared/lib/classNames/classNames'
import styles from './Sidebar.module.scss'
import { memo, useState } from 'react'
import { ButtonSize, ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarItemsList } from 'widgets/Sidebar/model/SidebarItemsList';

interface SidebarProps {
  className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
  const { className } = props
  const [isCollapsed, setCollapsed] = useState(false)

  const onToggleCollapsed = (): void => {
    setCollapsed(prevIsCollapsed => !prevIsCollapsed)
  }

  const modifiers: Modifiers = {
    [styles.isCollapsed]: isCollapsed
  };

  return (
        <div data-testid='sidebar'
             className={classNames(styles.Sidebar, modifiers, [className])}
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
