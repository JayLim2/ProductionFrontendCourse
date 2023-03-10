import { type FC, useMemo, useState } from 'react'
import { Theme, THEME_PROPERTY, ThemeContext } from '../lib/Theme/ThemeContext'

// eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
const defaultTheme = localStorage.getItem(THEME_PROPERTY) as Theme || Theme.DEFAULT

const ThemeProvider: FC<any> = (props) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const defaultProps = useMemo(() => {
    return { theme, setTheme }
  }, [theme])

  return (
        <ThemeContext.Provider value={defaultProps}>
            {props.children}
        </ThemeContext.Provider>
  )
}

export default ThemeProvider
