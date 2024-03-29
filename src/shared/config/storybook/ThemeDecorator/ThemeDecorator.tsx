import { type Story } from '@storybook/react';
import { type Theme } from '../../../../app/providers/ThemeProvider';
import { ThemeProvider } from 'app/providers/ThemeProvider';

// eslint-disable-next-line react/display-name
export const ThemeDecorator = (theme: Theme): any => (StoryComponent: Story): any => {
  return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
  );
};
