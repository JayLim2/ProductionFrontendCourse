import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss';
import { type FC } from 'react';
import { type ArticleImageBlock } from '../../../model/types/ArticleBlockTypes';
import { AlignText, UxText } from 'shared/ui/UxText/UxText';

interface ArticleImageBlockComponentProps {
  block: ArticleImageBlock
  className?: string
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> = (props: ArticleImageBlockComponentProps) => {
  const { className, block } = props;

  return (
        <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
            <img src={block.src} alt={block.title} className={styles.img} />
            {block.title && (
                <UxText text={block.title}
                        alignText={AlignText.CENTER}
                />
            )}
        </div>
  );
};
