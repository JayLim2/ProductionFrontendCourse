import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';
import { type FC } from 'react';
import { type ArticleCodeBlock } from '../../../model/types/ArticleBlockTypes';
import { UxCode } from 'shared/ui/UxCode/UxCode';

interface ArticleCodeBlockComponentProps {
  block: ArticleCodeBlock
  className?: string
}

export const ArticleCodeBlockComponent: FC<ArticleCodeBlockComponentProps> = (props: ArticleCodeBlockComponentProps) => {
  const { className, block } = props;

  return (
        <div className={classNames(styles.ArticleCodeBlockComponent, {}, [className])}>
            <UxCode text={block.code} />
        </div>
  );
};
