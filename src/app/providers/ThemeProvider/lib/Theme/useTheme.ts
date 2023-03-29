import { Theme, THEME_PROPERTY, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export interface UseTheme {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.DEFAULT:
        newTheme = Theme.DARK;
        break;
      case Theme.DARK:
        newTheme = Theme.RED;
        break;
      case Theme.RED:
        newTheme = Theme.DEFAULT;
        break;
      default:
        newTheme = Theme.DEFAULT;
    }
    localStorage.setItem(THEME_PROPERTY, newTheme)
    setTheme?.(newTheme)
  }

  return {
    theme: theme || Theme.DEFAULT,
    toggleTheme
  }
}
