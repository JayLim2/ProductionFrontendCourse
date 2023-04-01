import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleTextBlockComponent.module.scss';
import { type FC } from 'react';
import { useTranslation } from 'react-i18next';
import { type ArticleTextBlock } from '../../../model/types/ArticleBlockTypes';
import { UxText } from 'shared/ui/UxText/UxText';

interface ArticleTextBlockComponentProps {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent: FC<ArticleTextBlockComponentProps> = (props: ArticleTextBlockComponentProps) => {
  const { className, block } = props;
  const { t } = useTranslation();

  return (
        <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
            {block.title && (
                <UxText title={block.title} className={styles.title} />
            )}
            {block.paragraphs.map((paragraph, index) => (
                <UxText key={paragraph} text={paragraph} className={styles.paragraph} />
            ))}
        </div>
  );
};
