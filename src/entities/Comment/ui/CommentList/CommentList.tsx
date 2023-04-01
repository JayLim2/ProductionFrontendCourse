import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { UxText } from 'shared/ui/UxText/UxText';
import { useTranslation } from 'react-i18next';
import styles from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { type Comment } from '../../model/types/Comment';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: CommentListProps) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation('comment');

  if (isLoading) {
    return (
        <div className={classNames(styles.CommentList, {}, [className, styles.loading])}>
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </div>
    );
  }

  return (
        <div className={classNames(styles.CommentList, {}, [className])}>
            {comments?.length
              ? comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        isLoading={isLoading}
                        className={styles.comment}
                        comment={comment}
                    />
              ))
              : <UxText text={t('commentsListEmpty')} />}
        </div>
  );
});
