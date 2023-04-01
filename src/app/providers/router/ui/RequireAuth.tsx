import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/UserEntity';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'app/providers/router/config/routeConfig';

interface RequireAuthProps {
  children: JSX.Element
}

export const RequireAuth = (props: RequireAuthProps): JSX.Element => {
  const { children } = props;

  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth) {
    return (
        <Navigate to={RoutePath.main}
                  state={{ from: location }}
                  replace
        />
    );
  }

  return children;
}
