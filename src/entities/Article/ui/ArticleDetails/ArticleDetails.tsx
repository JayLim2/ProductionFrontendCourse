import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleDetails.module.scss';
import { type FC, memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from '../../model/slice/ArticleSlice';
import { TextSize, TextTheme, UxText } from 'shared/ui/UxText/UxText';
import { UxAvatar } from 'shared/ui/UxAvatar/UxAvatar';
import { fetchArticleById } from '../../model/services/FetchArticleById/FetchArticleById';
import {
  ArticleTextBlockComponent
} from '../../ui/ArticleBlockComponents/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { type ArticleBlock, ArticleBlockType } from '../../model/types/ArticleBlockTypes';
import {
  ArticleImageBlockComponent
} from '../ArticleBlockComponents/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from '../ArticleBlockComponents/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { useSelector } from 'react-redux';
import { useTypedDispatch } from 'shared/lib/hooks/useTypedDispatch/useTypedDispatch';
import { getArticleDetailsIsLoading } from '../../model/selectors/GetArticleDetailsIsLoading/GetArticleDetailsIsLoading';
import { getArticleDetailsData } from '../../model/selectors/GetArticleDetailsData/GetArticleDetailsData';
import { getArticleDetailsError } from '../../model/selectors/GetArticleDetailsError/GetArticleDetailsError';
import { UxSkeleton } from 'shared/ui/UxSkeleton/UxSkeleton';
import { UxIcon } from 'shared/ui/UxIcon/UxIcon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';

interface ArticleDetailsProps {
  id: string
  className?: string
}

const reducers: ReducersList = {
  article: articleReducer
}

export const ArticleDetails: FC<ArticleDetailsProps> = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation('article');
  const dispatch = useTypedDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
            <ArticleCodeBlockComponent
                key={block.id}
                block={block}
                className={styles.block}
            />
        );
      case ArticleBlockType.IMAGE:
        return (
            <ArticleImageBlockComponent
                key={block.id}
                block={block}
                className={styles.block}
            />
        );
      case ArticleBlockType.TEXT:
        return (
            <ArticleTextBlockComponent
                key={block.id}
                className={styles.block}
                block={block}
            />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      void dispatch(fetchArticleById(String(id)));
    }
  }, [dispatch, id]);

  let content;
  if (isLoading) {
    content = (
        <>
          <UxSkeleton className={styles.avatar} width={200} height={200} border="50%" />
          <UxSkeleton className={styles.title} width={300} height={32} />
          <UxSkeleton className={styles.skeleton} width={600} height={24} />
          <UxSkeleton className={styles.skeleton} width="100%" height={200} />
          <UxSkeleton className={styles.skeleton} width="100%" height={200} />
        </>
    );
  } else if (error) {
    content = (
        <UxText
            alignTitle='center'
            alignText='center'
            title={t('articleLoadingErrorTitle')}
            theme={TextTheme.ERROR}
        />
    );
  } else {
    content = (
        <>
          <div className={styles.avatarWrapper}>
            <UxAvatar
                size={200}
                src={article?.img}
                className={styles.avatar}
                alt={t('articleAvatarAltText')}
            />
          </div>
          <UxText
              className={styles.title}
              title={article?.title}
              text={article?.subtitle}
              size={TextSize.L}
          />
          <div className={styles.articleInfo}>
            <UxIcon className={styles.icon}
                    SVG={EyeIcon}
            />
            <UxText text={String(article?.views)} />
          </div>
          <div className={styles.articleInfo}>
            <UxIcon className={styles.icon}
                    SVG={CalendarIcon}
            />
            <UxText text={article?.createdAt} />
          </div>
          {article?.blocks.map(renderBlock)}
        </>
    );
  }

  return (
        <DynamicModuleLoader reducers={reducers}
                             removeAfterUnmount={true}
        >
          <div className={classNames(styles.ArticleDetails, {}, [className])}>
              {content}
          </div>
        </DynamicModuleLoader>
  );
});
