import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticlePage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ArticlePageProps {
  className?: string
}

const ArticlePage: FC<ArticlePageProps> = (props: ArticlePageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
        <div className={classNames(styles.ArticlePage, {}, [className])}>
          ARTICLE DETAILS HERE
        </div>
  );
};

export default memo(ArticlePage);
