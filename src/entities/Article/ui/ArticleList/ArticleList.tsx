import { classNames } from 'shared/lib/classNames/classNames';
import { memo, type ReactNode } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import styles from './ArticleList.module.scss';
import { type Article } from '../../model/types/ArticleTypes';
import { ArticleView } from 'entities/Article/model/types/ArticleViewTypes';

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode[] =>
  new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((item, index) => (
            <ArticleListItemSkeleton key={index}
                                     className={styles.card}
                                     view={view}/>
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    view = ArticleView.SMALL,
    isLoading
  } = props;

  if (isLoading) {
    return (
            <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
                {getSkeletons(view)}
            </div>
    );
  }

  const renderArticle = (article: Article): ReactNode => (
        <ArticleListItem
            article={article}
            view={view}
            className={styles.card}
            key={article.id}
        />
  );

  return (
        <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
            {articles.length > 0
              ? articles.map(renderArticle)
              : null}
        </div>
  );
});
