import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ListArticlesPage.module.scss';
import { type FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

interface ListArticlesPageProps {
  className?: string
}

const ListArticlesPage: FC<ListArticlesPageProps> = (props: ListArticlesPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article');

  return (
        <div className={classNames(styles.ListArticlesPage, {}, [className])}>
          CATALOGUE OF ARTICLES HERE
        </div>
  );
};

export default memo(ListArticlesPage);
