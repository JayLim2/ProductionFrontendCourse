import { createContext } from 'react';

export enum Theme {
  DEFAULT = 'default',
  DARK = 'dark'
}

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const THEME_PROPERTY: string = 'theme';

export const ThemeContext = createContext<ThemeContextProps>({});
