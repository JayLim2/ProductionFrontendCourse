import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { type ArticleBlock } from '../../../model/types/ArticleBlockTypes';

interface ArticleImageBlockComponentProps {
  block: ArticleBlock
  className?: string
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props: ArticleImageBlockComponentProps) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
          ArticleImageBlockComponent
        </div>
  );
};
