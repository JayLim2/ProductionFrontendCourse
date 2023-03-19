import { type ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTests from 'shared/config/i18n/i18n.tests';
import { MemoryRouter } from 'react-router-dom';
import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { type DeepPartial } from '@reduxjs/toolkit';

export interface RenderWithRouterOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
}

export const renderComponent = (
  component: ReactNode,
  options: RenderWithRouterOptions = {}
): ReactNode => {
  const {
    route = '/',
    initialState
  } = options;

  return render(
        <StoreProvider initialState={initialState as StateSchema}>
          <MemoryRouter initialEntries={[route]}>
            <I18nextProvider i18n={i18nTests}>
              {component}
            </I18nextProvider>
          </MemoryRouter>
        </StoreProvider>
  );
}
