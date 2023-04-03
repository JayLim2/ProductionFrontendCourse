import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import { type HTMLAttributes, memo, type ReactNode } from 'react';
import styles from './UxCard.module.scss';

export enum UxCardTheme {
  DEFAULT = 'default',
  ACTIVE = 'active',
}
interface UxCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
  theme?: UxCardTheme
}

export const UxCard = memo((props: UxCardProps) => {
  const {
    className,
    children,
    theme = UxCardTheme.DEFAULT,
    ...otherProps
  } = props;

  const modifiers: Modifiers = {
    [styles[theme]]: theme
  }

  return (
        <div className={classNames(styles.UxCard, modifiers, [className])}
             {...otherProps}
        >
            {children}
        </div>
  );
});
