import { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

import { authSelector } from '../store/reducers/auth/auth.reducer';

interface PrivateRouteProps {
  element: ReactElement;
  to: string;
}

const PrivateRoute = ({ element, to }: PrivateRouteProps) => {
  const { isLoggedIn } = useSelector(authSelector);

  return isLoggedIn ? <div>{element}</div> : <Navigate to={to} replace />;
};

export default PrivateRoute;
