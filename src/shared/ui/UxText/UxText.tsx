import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import styles from './UxText.module.scss';
import { type FC, memo } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

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
  const {
    className,
    title,
    text,
    theme = Theme.DEFAULT
  } = props;

  const modifiers: Modifiers = {
    [styles[theme]]: true
  };

  return (
      <div className={classNames(styles.UxText, modifiers, [className])}>
        {title && (
          <p className={styles.title}>{title}</p>
        )}
        {text && (
          <p className={styles.text}>{text}</p>
        )}
      </div>
  );
});
