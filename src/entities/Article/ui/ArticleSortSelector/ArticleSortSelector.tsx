import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback, useMemo } from 'react';
import { UxSelect, type UxSelectOptions } from 'shared/ui/UxSelect/UxSelect';
import { ArticleSortField } from 'entities/Article/model/types/ArticleFilterPanelTypes';
import { SortOrder } from 'shared/types/FilterPanelTypes';
import styles from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
  className?: string
  field: ArticleSortField
  order: SortOrder
  onChangeOrder: (newOrder: SortOrder) => void
  onChangeSort: (newSort: ArticleSortField) => void
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const {
    className, onChangeOrder, onChangeSort, order, field
  } = props;
  const { t } = useTranslation('filterPanel');

  const orderOptions = useMemo<UxSelectOptions[]>(() => [
    {
      value: SortOrder.ASC,
      content: t('sort.order.ascOption')
    },
    {
      value: SortOrder.DESC,
      content: t('sort.order.descOption')
    }
  ], [t]);

  const sortFieldOptions = useMemo<UxSelectOptions[]>(() => [
    {
      value: ArticleSortField.CREATED,
      content: t('sort.field.articleCreatedAt')
    },
    {
      value: ArticleSortField.TITLE,
      content: t('sort.field.articleTitle')
    },
    {
      value: ArticleSortField.VIEWS,
      content: t('sort.field.articleViewsAmount')
    }
  ], [t]);

  // TODO add generics
  const changeSortHandler = useCallback((newSort: string) => {
    onChangeSort(newSort as ArticleSortField);
  }, [onChangeSort]);

  // TODO add generics
  const changeOrderHandler = useCallback((newOrder: string) => {
    onChangeOrder(newOrder as SortOrder);
  }, [onChangeOrder]);

  return (
        <div className={classNames(styles.ArticleSortSelector, {}, [className])}>
            <UxSelect
                options={sortFieldOptions}
                label={t('sort.control.sortField')}
                value={field}
                onChange={changeSortHandler}
            />
            <UxSelect
                options={orderOptions}
                label={t('sort.control.sortOrder')}
                value={order}
                onChange={changeOrderHandler}
                className={styles.order}
            />
        </div>
  );
});
