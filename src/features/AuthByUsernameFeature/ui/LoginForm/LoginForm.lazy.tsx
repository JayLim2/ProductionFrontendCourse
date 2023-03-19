import { type FC, lazy } from 'react';
import { type LoginFormProps } from 'features/AuthByUsernameFeature/ui/LoginForm/LoginForm';

// const LoginFormLazy = lazy(async () => await import('./LoginForm'));
//
// export {
//   LoginFormLazy as LoginForm
// }

const LoginFormLazy = lazy<FC<LoginFormProps>>(async () => await new Promise((resolve) => {
  // FIXME ONLY FOR LEARNING
  setTimeout(() => {
    resolve(import('./LoginForm'))
  }, 1000)
}))

export {
  LoginFormLazy as LoginForm
}
