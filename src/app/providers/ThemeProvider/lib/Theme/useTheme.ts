import { Theme, THEME_PROPERTY, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export interface UseTheme {
  toggleTheme: () => void
  theme: Theme
}

export function useTheme (): UseTheme {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.DEFAULT ? Theme.DARK : Theme.DEFAULT
    localStorage.setItem(THEME_PROPERTY, newTheme)
    setTheme(newTheme)
  }

  return { theme, toggleTheme }
}
