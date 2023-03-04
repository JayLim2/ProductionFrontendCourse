import { classNames } from 'shared/lib/classNames/classNames'
import styles from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import ThemeDark from 'shared/assets/icons/theme-dark.svg'
import ThemeLight from 'shared/assets/icons/theme-light.svg'
import { ThemeButton, UxButton } from 'shared/ui/UxButton/UxButton'
import { type FC } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props
  const { theme, toggleTheme } = useTheme()

  return (
        <UxButton theme={ThemeButton.CLEAR}
                  onClick={toggleTheme}
                  className={classNames(styles.ThemeSwitcher, {}, [className])}
        >
            {theme === Theme.DEFAULT ? <ThemeLight/> : <ThemeDark/>}
        </UxButton>
  )
}
