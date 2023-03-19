import { type FC, useMemo, useState } from 'react'
import { Theme, THEME_PROPERTY, ThemeContext } from '../lib/Theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme = localStorage.getItem(THEME_PROPERTY) as Theme || Theme.DEFAULT

interface ThemeProviderProps {
  initialTheme?: Theme
}

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
  const {
    children,
    initialTheme
  } = props;

  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
