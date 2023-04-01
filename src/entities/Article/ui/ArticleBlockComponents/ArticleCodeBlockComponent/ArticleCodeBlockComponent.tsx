import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { type ArticleBlock } from '../../../model/types/ArticleBlockTypes';

interface ArticleCodeBlockComponentProps {
  block: ArticleBlock
  className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props: ArticleCodeBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
          ArticleCodeBlockComponent
        </div>
  );
};
