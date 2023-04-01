import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { UxCard } from 'shared/ui/UxCard/UxCard';
import { UxSkeleton } from 'shared/ui/UxSkeleton/UxSkeleton';
import styles from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/types/ArticleViewTypes';

interface ArticleListItemSkeletonProps {
  className?: string
  view: ArticleView
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
  const { className, view } = props;

  if (view === ArticleView.BIG) {
    return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
                <UxCard className={styles.card}>
                    <div className={styles.header}>
                        <UxSkeleton border="50%" height={30} width={30} />
                        <UxSkeleton width={150} height={16} className={styles.username} />
                        <UxSkeleton width={150} height={16} className={styles.date} />
                    </div>
                    <UxSkeleton width={250} height={24} className={styles.title} />
                    <UxSkeleton height={200} className={styles.img} />
                    <div className={styles.footer}>
                        <UxSkeleton height={36} width={200} />
                    </div>
                </UxCard>
            </div>
    );
  }

  return (
        <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
            <UxCard className={styles.card}>
                <div className={styles.imageWrapper}>
                    <UxSkeleton width={200} height={200} className={styles.img} />
                </div>
                <div className={styles.infoWrapper}>
                    <UxSkeleton width={130} height={16} />
                </div>
                <UxSkeleton width={150} height={16} className={styles.title} />
            </UxCard>
        </div>
  );
});
