import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { UxPage } from 'widgets/UxPage/UxPage';
import { useParams } from 'react-router-dom';
import styles from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string }>();
  const isEditMode = Boolean(id);

  return (
        <UxPage className={classNames(styles.ArticleEditPage, {}, [className])}>
            {isEditMode
              ? `${t('editArticleById')}${id}`
              : t('createArticle')}
        </UxPage>
  );
});

export default ArticleEditPage;
