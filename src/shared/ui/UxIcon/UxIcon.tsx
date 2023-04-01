import { classNames } from 'shared/lib/classNames/classNames';
import type React from 'react';
import { memo } from 'react';
import styles from './UxIcon.module.scss';

interface UxIconProps {
  className?: string
  SVG: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const UxIcon = memo((props: UxIconProps) => {
  const { className, SVG } = props;

  return (
        <SVG className={classNames(styles.UxIcon, {}, [className])} />
  );
});
