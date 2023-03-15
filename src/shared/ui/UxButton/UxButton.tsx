import { classNames } from 'shared/lib/classNames/classNames'
import styles from './UxButton.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  S = 'size-s', /* Unsupported */
  M = 'size-m',
  L = 'size-l',
  XL = 'size-xl'
}

interface UxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ButtonTheme
  isSquare?: boolean
  size?: ButtonSize
}

export const UxButton: FC<UxButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    isSquare,
    size = ButtonSize.M,
    ...otherProps
  } = props

  const mods = {
    [styles[theme]]: true,
    [styles.square]: isSquare,
    [styles[size]]: true
  };

  return (
        <button className={classNames(styles.UxButton, mods, [className, styles[theme]])}
                {...otherProps}
        >
            {children}
        </button>
  )
}
