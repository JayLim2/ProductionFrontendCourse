import { StyleDecorator } from 'shared/config/storybook/StyleDecorator/StyleDecorator'
import { addDecorator } from '@storybook/react'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import { RouteDecorator } from 'shared/config/storybook/RouteDecorator/RouteDecorator'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.DEFAULT))
addDecorator(RouteDecorator)
