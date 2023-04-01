import { classNames } from 'shared/lib/classNames/classNames';
import { type CSSProperties, memo } from 'react';
import styles from './UxSkeleton.module.scss';

interface UxSkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const UxSkeleton = memo((props: UxSkeletonProps) => {
  const {
    className,
    height,
    width,
    border
  } = props;

  const localStyles: CSSProperties = {
    width,
    height,
    borderRadius: border
  };

  return (
        <div
            className={classNames(styles.UxSkeleton, {}, [className])}
            style={localStyles}
        />
  );
});
