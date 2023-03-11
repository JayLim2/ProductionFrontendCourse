import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTests from 'shared/config/i18n/i18n.tests';
import { MemoryRouter } from 'react-router-dom';

export interface RenderWithRouterOptions {
  route?: string
}

export const renderComponent = (
  component: ReactNode,
  options: RenderWithRouterOptions = {}
): ReactNode => {
  const {
    route = '/'
  } = options;

  return render(
        <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
  );
}
