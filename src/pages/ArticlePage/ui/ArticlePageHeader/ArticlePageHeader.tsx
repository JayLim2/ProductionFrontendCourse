import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { UxButton, ButtonTheme } from 'shared/ui/UxButton/UxButton';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article/model/selectors/GetArticleDetailsData/GetArticleDetailsData';
import { getCanEditArticle } from 'pages/ArticlePage/model/selectors/article';
import styles from './ArticlePageHeader.module.scss';
import { RoutePath } from 'app/providers/router/config/routeConfig';

interface ArticleDetailsPageHeaderProps {
  className?: string
}

export const ArticlePageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();
  const canEdit = useSelector(getCanEditArticle);
  const article = useSelector(getArticleDetailsData);

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [navigate]);

  const onEditArticle = useCallback(() => {
    navigate(`${RoutePath.article}${article?.id}/edit`);
  }, [article?.id, navigate]);

  return (
        <div className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
            <UxButton theme={ButtonTheme.OUTLINE}
                      onClick={onBackToList}
            >
                {t('backToArticlesCatalogue')}
            </UxButton>
            {canEdit && (
                <UxButton
                    className={styles.editBtn}
                    theme={ButtonTheme.OUTLINE}
                    onClick={onEditArticle}
                >
                    {t('editArticleButton')}
                </UxButton>
            )}
        </div>
  );
});
