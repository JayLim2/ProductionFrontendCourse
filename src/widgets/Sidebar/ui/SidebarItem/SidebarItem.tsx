import styles from './SidebarItem.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { UxLink, UxLinkTheme } from 'shared/ui/UxLink/UxLink';
import { type SidebarItemType } from 'widgets/Sidebar/model/SidebarItemType';
import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';

interface SidebarItemProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = memo((props: SidebarItemProps) => {
  const { item, isCollapsed } = props;
  const { t } = useTranslation();

  const modifiers: Modifiers = {
    [styles.isCollapsed]: isCollapsed
  };

  return (
        <UxLink
            theme={UxLinkTheme.SECONDARY}
            to={item.path}
            className={classNames(styles.sidebarLinkWrapper, modifiers, [])}
        >
            <item.icon className={styles.sidebarIcon}/>
            <span className={styles.sidebarLink}>
                {t(item.text)}
            </span>
        </UxLink>
  );
});
