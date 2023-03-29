import { classNames, type Modifiers } from 'shared/lib/classNames/classNames'
import styles from './UxButton.module.scss'
import { type ButtonHTMLAttributes, type FC, memo, type ReactNode } from 'react'
import { Theme } from 'app/providers/ThemeProvider';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  OUTLINE_RED = 'outline_red',
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
    theme = Theme.DEFAULT,
    isSquare,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
  } = props

  const modifiers: Modifiers = {
    [styles[theme]]: true,
    [styles.square]: isSquare,
    [styles[size]]: true,
    [styles.disabled]: disabled
  };

  const effectiveClassName: string = classNames(
    styles.UxButton,
    modifiers,
    [className, styles[theme]]
  );

  return (
    <button className={effectiveClassName}
            {...otherProps}
            disabled={disabled}
    >
      {children}
    </button>
  )
});
