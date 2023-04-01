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
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { UxPage } from 'shared/ui/UxPage/UxPage';
import { fetchNextArticlesPage } from '../../model/services/FetchNextArticlesPage/FetchNextArticlesPage';
import { initListArticlesPage } from 'pages/ListArticlesPage/model/services/InitListArticlesPage/InitListArticlesPage';

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
    void dispatch(initListArticlesPage());
  });

  const onChangeView = useCallback((view: ArticleView) => {
    dispatch(listArticlesPageActions.setView(view));
  }, [dispatch]);

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage());
  }, [dispatch]);

  return (
      <DynamicModuleLoader reducers={reducersList}>
        <UxPage className={classNames(styles.ListArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
        >
          <ArticleViewSelector
              view={view}
              onViewClick={onChangeView}
          />
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
