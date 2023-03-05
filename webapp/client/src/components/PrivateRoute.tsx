import { ReactElement } from 'react';
import { useNavigate } from 'react-router';

interface PrivateRouteProps {
  element: ReactElement;
  to: string;
}

const PrivateRoute = ({ element, to }: PrivateRouteProps) => {
  const navigate = useNavigate();

  if (!localStorage.getItem('fr_token')) {
    navigate(to);
    return null;
  }

  return <div>{element}</div>;
};

export default PrivateRoute;
