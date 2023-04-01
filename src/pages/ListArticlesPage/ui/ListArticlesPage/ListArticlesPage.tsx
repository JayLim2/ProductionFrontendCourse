import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ListArticlesPage.module.scss';
import { type FC, memo, useCallback } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { type ArticleView } from 'entities/Article/model/types/ArticleViewTypes';
import { ArticleViewSelector } from 'entities/Article/ui/ArticleViewSelector/ArticleViewSelector';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { useSelector } from 'react-redux';
import {
  // getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView
} from '../../model/selectors/ListArticlesPageSelectors';
import { getArticles, listArticlesPageActions, listArticlesPageReducer } from '../../model/slice/ListArticlesPageSlice';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchListArticles } from 'pages/ListArticlesPage/model/services/FetchListArticles/FetchListArticles';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

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

  useInitialEffect(() => {
    void dispatch(fetchListArticles());
    dispatch(listArticlesPageActions.initState());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(listArticlesPageActions.setView(view));
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducersList}>
        <div className={classNames(styles.ListArticlesPage, {}, [className])}>
          <ArticleViewSelector
              view={view}
              onViewClick={onChangeView}
          />
          <ArticleList
              isLoading={isLoading}
              view={view}
              articles={articlesList}
          />
        </div>
      </DynamicModuleLoader>
  );
};

export default memo(ListArticlesPage);
