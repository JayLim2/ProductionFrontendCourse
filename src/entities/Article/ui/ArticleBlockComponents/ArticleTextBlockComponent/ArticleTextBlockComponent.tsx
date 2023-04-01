import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleTextBlockComponent.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { type ArticleBlock } from '../../../model/types/ArticleBlockTypes';

interface ArticleTextBlockComponentProps {
  block: ArticleBlock
  className?: string
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props: ArticleTextBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
          ArticleTextBlockComponent
        </div>
  );
};
