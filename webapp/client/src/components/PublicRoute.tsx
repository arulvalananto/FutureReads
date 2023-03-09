import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { authSelector } from '../store/reducers/auth/auth.reducer';

interface PublicRouteProps {
  element: ReactElement;
  to: string;
}

const PublicRoute = ({ element, to }: PublicRouteProps) => {
  const { isLoggedIn } = useSelector(authSelector);

  return !isLoggedIn ? <div>{element}</div> : <Navigate to={to} replace />;
};

export default PublicRoute;
