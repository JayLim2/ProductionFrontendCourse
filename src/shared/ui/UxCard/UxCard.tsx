import { classNames } from 'shared/lib/classNames/classNames';
import { type HTMLAttributes, memo, type ReactNode } from 'react';
import styles from './UxCard.module.scss';

interface UxCardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const UxCard = memo((props: UxCardProps) => {
  const { className, children, ...otherProps } = props;

  return (
        <div className={classNames(styles.UxCard, {}, [className])}
             {...otherProps}
        >
            {children}
        </div>
  );
});
