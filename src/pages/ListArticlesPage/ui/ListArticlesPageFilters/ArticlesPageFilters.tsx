import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import {
  type ArticleSortField,
  ArticleSortSelector,
  ArticleTypeTabs,
  type ArticleView,
  ArticleViewSelector
} from 'entities/Article';
import { useSelector } from 'react-redux';
import { UxCard } from 'shared/ui/UxCard/UxCard';
import { UxInput } from 'shared/ui/UxInput/UxInput';
import { type SortOrder } from 'shared/types/FilterPanelTypes';
import { useDebounce } from 'shared/lib/hooks/useDebounce/useDebounce';
import { type ArticleType } from 'entities/Article/model/types/ArticleTypes';
import { fetchListArticles } from '../../model/services/FetchListArticles/FetchListArticles';
import styles from './ArticlesPageFilters.module.scss';
import {
  getArticlesPageSortOrder, getArticlesPageSearchQuery,
  getArticlesPageSortField, getArticlesPageArticleType,
  getArticlesPageView
} from '../../model/selectors/ListArticlesPageSelectors';
import { listArticlesPageActions } from '../../model/slice/ListArticlesPageSlice';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters = memo((props: ArticlesPageFiltersProps) => {
  const { className } = props;
  const { t } = useTranslation('filterPanel');

  const dispatch = useTypedDispatch();
  const view = useSelector(getArticlesPageView);
  const sortField = useSelector(getArticlesPageSortField);
  const sortOrder = useSelector(getArticlesPageSortOrder);
  const searchQuery = useSelector(getArticlesPageSearchQuery);
  const articleType = useSelector(getArticlesPageArticleType);

  const fetchData = useCallback(() => {
    void dispatch(fetchListArticles({
      replace: true
    }));
  }, [dispatch]);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback((newView: ArticleView) => {
    dispatch(listArticlesPageActions.setView(newView));
  }, [dispatch]);

  const onChangeSortField = useCallback((newSortField: ArticleSortField) => {
    dispatch(listArticlesPageActions.setSortField(newSortField));
    dispatch(listArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSortOrder = useCallback((newSortOrder: SortOrder) => {
    dispatch(listArticlesPageActions.setSortOrder(newSortOrder));
    dispatch(listArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const onChangeSearchQuery = useCallback((newSearchQuery: string) => {
    dispatch(listArticlesPageActions.setSearchQuery(newSearchQuery));
    dispatch(listArticlesPageActions.setPage(1));
    debouncedFetchData();
  }, [dispatch, debouncedFetchData]);

  const onChangeArticleType = useCallback((newArticleType: ArticleType) => {
    dispatch(listArticlesPageActions.setArticleType(newArticleType));
    dispatch(listArticlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
        <div className={classNames(styles.ArticlesPageFilters, {}, [className])}>
            <div className={styles.sortWrapper}>
                <ArticleSortSelector
                    order={sortOrder}
                    field={sortField}
                    onChangeOrder={onChangeSortOrder}
                    onChangeSort={onChangeSortField}
                />
                <ArticleViewSelector
                    view={view}
                    onViewClick={onChangeView}
                />
            </div>
            <UxCard className={styles.search}>
                <UxInput
                    onChange={onChangeSearchQuery}
                    value={searchQuery}
                    placeholder={t('search.control.article')}
                />
            </UxCard>
            <ArticleTypeTabs
                value={articleType}
                onChangeType={onChangeArticleType}
                className={styles.tabs}
            />
        </div>
  );
});
