import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePage.module.scss';
import { type FC, memo, useCallback } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleCommentsReducer, getArticleComments } from '../../model/slice/ArticleCommentsSlice';
import { useSelector } from 'react-redux';
import {
  // getArticleCommentsError,
  getArticleCommentsIsLoading
} from '../../model/selectors/CommentsSelectors';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  fetchCommentsByArticleId
} from '../../model/services/FetchCommentsByArticleId/FetchCommentsByArticleId';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { AddCommentForm } from 'features/AddCommentForm';
import { addCommentForArticle } from '../../model/services/AddCommentForArticle/AddCommentForArticle';
import { ButtonTheme, UxButton } from 'shared/ui/UxButton/UxButton';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import { UxPage } from 'widgets/UxPage/UxPage';

interface ArticlePageProps {
  className?: string
}

const reducersList: ReducersList = {
  articleComments: articleCommentsReducer
}

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

  const dispatch = useTypedDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);
  // const error = useSelector(getArticleCommentsError);
  const navigate = useNavigate();

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id));
  });

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onSendComment = useCallback((text: string) => {
    void dispatch(addCommentForArticle(text));
  }, [dispatch]);

  if (!id) {
    // TODO never happens
    return (
          <div className={classNames(styles.ArticlePage, {}, [className])}>
              <UxText theme={TextTheme.ERROR}
                      text={t('articleIdNotDefined')}
              />
          </div>
    )
  }

  return (
        <DynamicModuleLoader reducers={reducersList} removeAfterUnmount={false}>
            <UxPage className={classNames(styles.ArticlePage, {}, [className])}>
                <UxButton theme={ButtonTheme.OUTLINE}
                          onClick={onBackToList}
                >
                    {t('backToArticlesCatalogue')}
                </UxButton>
                <ArticleDetails id={id}/>
                <UxText className={styles.commentTitle} title={t('commentsSectionHeader')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoading}
                    comments={comments}
                />
            </UxPage>
        </DynamicModuleLoader>
  );
};

export default memo(ArticlePage);
