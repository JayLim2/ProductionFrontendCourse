import { classNames, type Modifiers } from 'shared/lib/classNames/classNames';
import styles from './UxAvatar.module.scss';
import { type CSSProperties, type FC, useMemo } from 'react';

interface UxAvatarProps {
  className?: string
  src?: string
  alt: string
  size?: number
}

export const UxAvatar: FC<UxAvatarProps> = (props: UxAvatarProps) => {
  const { className, src, alt, size } = props;

  const modifiers: Modifiers = {};
  const inlineStyles = useMemo<CSSProperties>(() => {
    let styles = {};
    if (size) {
      styles = {
        width: size,
        height: size
      }
    }
    return styles;
  }, [size]);

  return (
      <img className={classNames(styles.UxAvatar, modifiers, [className])}
           src={src}
           alt={alt}
           style={inlineStyles}
      />
  );
};
