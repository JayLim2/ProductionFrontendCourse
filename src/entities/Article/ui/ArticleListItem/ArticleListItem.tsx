import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { type HTMLAttributeAnchorTarget, memo, useCallback } from 'react';
import { UxText } from 'shared/ui/UxText/UxText';
import { UxIcon } from 'shared/ui/UxIcon/UxIcon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { UxCard } from 'shared/ui/UxCard/UxCard';
import { UxAvatar } from 'shared/ui/UxAvatar/UxAvatar';
import { UxButton, ButtonTheme } from 'shared/ui/UxButton/UxButton';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/config/routeConfig';
import styles from './ArticleListItem.module.scss';
import { type Article } from '../../model/types/ArticleTypes';
import {
  ArticleBlockType, type ArticleTextBlock
} from '../../model/types/ArticleBlockTypes';
import {
  ArticleView
} from '../../model/types/ArticleViewTypes';
import {
  ArticleTextBlockComponent
} from '../ArticleBlockComponents/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { UxLink } from 'shared/ui/UxLink/UxLink';

interface ArticleListItemProps {
  className?: string
  article: Article
  view: ArticleView
  target?: HTMLAttributeAnchorTarget
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
  const { className, article, view, target } = props;
  const { t } = useTranslation('article');
  const navigate = useNavigate();

  const onOpenArticle = useCallback(() => {
    navigate(RoutePath.article + article.id);
  }, [article.id, navigate]);

  const types = <UxText text={article.type.join(', ')} className={styles.types} />;
  const views = (
        <>
            <UxText text={String(article.views)} className={styles.views} />
            <UxIcon SVG={EyeIcon} />
        </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockType.TEXT
    ) as ArticleTextBlock;

    return (
            <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
                <UxCard className={styles.card}>
                    <div className={styles.header}>
                        <UxAvatar size={30}
                                  src={article.user?.avatar}
                                  alt={article.user?.username}
                        />
                        <UxText text={article.user?.username} className={styles.username} />
                        <UxText text={article.createdAt} className={styles.date} />
                    </div>
                    <UxText title={article.title} className={styles.title} />
                    {types}
                    <img src={article.img} className={styles.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                    )}
                    <div className={styles.footer}>
                        <UxLink
                            to={RoutePath.article + article.id}
                            target={target}
                        >
                            <UxButton theme={ButtonTheme.OUTLINE}>
                                {t('readMoreButton')}
                            </UxButton>
                        </UxLink>
                        {views}
                    </div>
                </UxCard>
            </div>
    );
  }

  return (
        <UxLink
            to={RoutePath.article + article.id}
            target={target}
            className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}
        >
            <UxCard className={styles.card} onClick={onOpenArticle}>
                <div className={styles.imageWrapper}>
                    <img alt={article.title} src={article.img} className={styles.img} />
                    <UxText text={article.createdAt} className={styles.date} />
                </div>
                <div className={styles.infoWrapper}>
                    {types}
                    {views}
                </div>
                <UxText text={article.title} className={styles.title} />
            </UxCard>
        </UxLink>
  );
});
