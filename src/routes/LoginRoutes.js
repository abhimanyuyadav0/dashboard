import { lazy } from 'react';
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';
import CommingSoon from 'components/common/commingSoon';

const AuthLogin = Loadable(lazy(() => import('pages/authentication/Login')));
const AuthRegister = Loadable(lazy(() => import('pages/authentication/Register')));

const LoginRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'login',
      element: <CommingSoon />
    },
    {
      path: 'register',
      element: <CommingSoon />
    }
  ]
};

export default LoginRoutes;
