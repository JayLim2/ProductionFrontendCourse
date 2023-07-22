import { type FC, lazy } from 'react';
import { type LoginFormProps } from 'features/AuthByUsernameFeature/ui/LoginForm/LoginForm';

const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => await import('./LoginForm'));

export {
  LoginFormLazy as LoginForm
}
