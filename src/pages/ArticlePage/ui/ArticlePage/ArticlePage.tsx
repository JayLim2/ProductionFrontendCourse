import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePage.module.scss';
import { type FC, memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { useTranslation } from 'react-i18next';

interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('article');

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
        <div className={classNames(styles.ArticlePage, {}, [className])}>
          <ArticleDetails id={id}/>
        </div>
  );
};

export default memo(ArticlePage);
