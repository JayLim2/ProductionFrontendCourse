import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ReactNode, useCallback } from 'react';
import { UxCard, UxCardTheme } from 'shared/ui/UxCard/UxCard';
import styles from './UxTabsPanel.module.scss';

export interface UxTabItem {
  value: string
  content: ReactNode
}

interface UxTabsProps {
  className?: string
  tabs: UxTabItem[]
  value: string
  onTabClick: (tab: UxTabItem) => void
}

export const UxTabsPanel = memo((props: UxTabsProps) => {
  const {
    className, tabs, onTabClick, value
  } = props;

  const clickHandle = useCallback((tab: UxTabItem) => () => {
    onTabClick(tab);
  }, [onTabClick]);

  return (
        <div className={classNames(styles.Tabs, {}, [className])}>
            {tabs.map((tab) => (
                <UxCard
                    theme={tab.value === value ? UxCardTheme.ACTIVE : UxCardTheme.DEFAULT}
                    className={styles.tab}
                    key={tab.value}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </UxCard>
            ))}
        </div>
  );
});
