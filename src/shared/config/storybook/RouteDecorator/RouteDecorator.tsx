import { type Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// eslint-disable-next-line react/display-name
export const RouteDecorator = (story: () => Story): any => {
  return (
        <BrowserRouter>
            {story()}
        </BrowserRouter>
  );
};
