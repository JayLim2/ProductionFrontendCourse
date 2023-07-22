import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ListArticlesPage.module.scss';
import { type FC, memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { useSelector } from 'react-redux';
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/ListArticlesPageSelectors';
import { getArticles, listArticlesPageReducer } from '../../model/slice/ListArticlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { UxPage } from 'widgets/UxPage/UxPage';
import { fetchNextArticlesPage } from '../../model/services/FetchNextArticlesPage/FetchNextArticlesPage';
import { initListArticlesPage } from '../../model/services/InitListArticlesPage/InitListArticlesPage';
import { ArticlesPageFilters } from '../ListArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';

interface ListArticlesPageProps {
  className?: string
}

const reducersList: ReducersList = {
  listArticles: listArticlesPageReducer
}

const ListArticlesPage: FC<ListArticlesPageProps> = (props: ListArticlesPageProps) => {
  const { className } = props;

  const dispatch = useTypedDispatch();
  const articlesList = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);
  // const error = useSelector(getArticlesPageError);

  const [searchParams] = useSearchParams();

  console.warn(searchParams.get('searchQuery'));

  useInitialEffect(() => {
    void dispatch(initListArticlesPage(searchParams));
  });

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={false}>
        <UxPage className={classNames(styles.ListArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
        >
          <ArticlesPageFilters />
          <ArticleList
              isLoading={isLoading}
              view={view}
              articles={articlesList}
          />
        </UxPage>
      </DynamicModuleLoader>
  );
};

export default memo(ListArticlesPage);
