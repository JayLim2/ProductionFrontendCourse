import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { UxAvatar } from 'shared/ui/UxAvatar/UxAvatar';
import { UxText } from 'shared/ui/UxText/UxText';
import { UxSkeleton } from 'shared/ui/UxSkeleton/UxSkeleton';
import styles from './CommentCard.module.scss';
import { type Comment } from '../../model/types/Comment';
import { useTranslation } from 'react-i18next';
import { UxLink } from 'shared/ui/UxLink/UxLink';
import { RoutePath } from 'app/providers/router/config/routeConfig';

interface CommentCardProps {
  className?: string
  comment?: Comment
  isLoading?: boolean
}

export const CommentCard = memo((props: CommentCardProps) => {
  const { className, comment, isLoading } = props;

  const { t } = useTranslation('userProfilePage')

  if (isLoading) {
    return (
            <div className={classNames(styles.CommentCard, {}, [className, styles.loading])}>
                <div className={styles.header}>
                    <UxSkeleton width={30} height={30} border="50%" />
                    <UxSkeleton height={16} width={100} className={styles.username} />
                </div>
                <UxSkeleton className={styles.text} width="100%" height={50} />
            </div>
    );
  }

  const userAvatar = (
    comment?.user?.avatar
      ? (
        <UxAvatar size={30}
                  src={comment.user.avatar}
                  alt={t('avatarAltText')}
        />
        )
      : null
  );

  return (
        <div className={classNames(styles.CommentCard, {}, [className])}>
            <UxLink to={`${RoutePath.userProfile}${comment?.user?.id}`}
                    className={styles.header}
            >
                {userAvatar}
                <UxText className={styles.username}
                        title={comment?.user?.username}
                />
            </UxLink>
            <UxText className={styles.text}
                    text={comment?.text}
            />
        </div>
  );
});
