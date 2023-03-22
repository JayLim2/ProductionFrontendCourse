import { classNames } from 'shared/lib/classNames/classNames';
import styles from './UxText.module.scss';
import { type FC, memo } from 'react';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error'
}

interface UxTextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
}

export const UxText: FC<UxTextProps> = memo((props: UxTextProps) => {
  const { className, title, text, theme } = props;

  return (
      <div className={classNames(styles.UxText, {
        [styles[theme]]: true
      }, [className])}>
        {title && (
          <p className={styles.title}>{title}</p>
        )}
        {text && (
          <p className={styles.text}>{text}</p>
        )}
      </div>
  );
});
