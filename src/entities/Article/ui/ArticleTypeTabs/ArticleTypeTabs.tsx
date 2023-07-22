import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { type UxTabItem, UxTabsPanel } from 'shared/ui/UxTabsPanel/UxTabsPanel';
import { ArticleType } from 'entities/Article';

interface ArticleTypeTabsProps {
  className?: string
  value: ArticleType
  onChangeType: (type: ArticleType) => void
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
  const { className, value, onChangeType } = props;
  const { t } = useTranslation('tabPanel');

  // TODO 03.04.2023 refactor it?
  const typeTabs = useMemo<UxTabItem[]>(() => [
    {
      value: ArticleType.ALL,
      content: t('tabs.articleType.all')
    },
    {
      value: ArticleType.IT,
      content: t('tabs.articleType.it')
    },
    {
      value: ArticleType.ECONOMICS,
      content: t('tabs.articleType.economics')
    },
    {
      value: ArticleType.SCIENCE,
      content: t('tabs.articleType.science')
    }
  ], [t]);

  const onTabClick = useCallback((tab: UxTabItem) => {
    onChangeType(tab.value as ArticleType);
  }, [onChangeType]);

  return (
        <UxTabsPanel
            tabs={typeTabs}
            value={value}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
  );
});
