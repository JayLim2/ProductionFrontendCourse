import { classNames } from 'shared/lib/classNames/classNames'
import styles from './UxLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC, memo, type ReactNode } from 'react'

export enum UxLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface UxLinkProps extends LinkProps {
  className?: string
  theme?: UxLinkTheme
  children?: ReactNode
}

export const UxLink: FC<UxLinkProps> = memo((props: UxLinkProps) => {
  const {
    to,
    children,
    className,
    theme = UxLinkTheme.PRIMARY,
    ...otherProps
  } = props

  return (
        <Link to={to}
              className={classNames(
                styles.UxLink,
                {},
                [className, styles[theme]]
              )}
              {...otherProps}
        >
            {children}
        </Link>
  )
});
