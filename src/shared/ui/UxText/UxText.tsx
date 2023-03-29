import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import styles from './UxText.module.scss';
import { type FC, memo } from 'react';
import { Theme } from 'app/providers/ThemeProvider';

export enum TextTheme {
  DEFAULT = 'default',
  ERROR = 'error'
}

type AlignText = 'left' | 'center' | 'right';

interface UxTextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  alignTitle?: AlignText
  alignText?: AlignText
}

export const UxText: FC<UxTextProps> = memo((props: UxTextProps) => {
  const {
    className,
    title,
    text,
    theme = Theme.DEFAULT,
    alignTitle = 'left',
    alignText = 'left'
  } = props;

  const modifiers: Modifiers = {
    [styles[theme]]: true
  };

  return (
      <div className={classNames(styles.UxText, modifiers, [className])}>
        {title && (
          <p className={styles.title}
             style={{
               textAlign: alignTitle
             }}
          >{title}</p>
        )}
        {text && (
          <p className={styles.text}
             style={{
               textAlign: alignText
             }}
          >{text}</p>
        )}
      </div>
  );
});
