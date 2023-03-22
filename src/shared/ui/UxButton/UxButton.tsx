import { classNames } from 'shared/lib/classNames/classNames'
import styles from './UxButton.module.scss'
import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'

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
  disabled?: boolean
  children?: ReactNode
}

export const UxButton: FC<UxButtonProps> = memo((props: UxButtonProps) => {
  const {
    className,
    children,
    theme,
    isSquare,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props

  const mods = {
    [styles[theme]]: true,
    [styles.square]: isSquare,
    [styles[size]]: true,
    [styles.disabled]: disabled
  };

  return (
    <button className={classNames(styles.UxButton, mods, [className, styles[theme]])}
            {...otherProps}
            disabled={disabled}
    >
      {children}
    </button>
  )
});
