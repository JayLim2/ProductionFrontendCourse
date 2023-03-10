import { classNames } from 'shared/lib/classNames/classNames'
import styles from './UxButton.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
}

interface UxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: ThemeButton
}

export const UxButton: FC<UxButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props

  return (
        <button className={classNames(styles.UxButton, {}, [className, styles[theme]])}
                {...otherProps}
        >
            {children}
        </button>
  )
}
