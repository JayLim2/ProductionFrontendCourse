import { I18nextProvider } from 'react-i18next';
import i18nTests from 'shared/config/i18n/i18n.tests';
import { type ReactNode } from 'react';
import { render, type RenderResult } from '@testing-library/react';

const RenderWithTranslation = (component: ReactNode): RenderResult => {
  return render(
        <I18nextProvider i18n={i18nTests}>
          {component}
        </I18nextProvider>
  );
};

export default RenderWithTranslation;
