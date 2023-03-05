import { ReactElement } from 'react';
import { useNavigate } from 'react-router';

interface PublicRouteProps {
  element: ReactElement;
  to: string;
}

const PublicRoute = ({ element, to }: PublicRouteProps) => {
  const navigate = useNavigate();

  if (localStorage.getItem('fr_token')) {
    navigate(to);
    return null;
  }

  return <div>{element}</div>;
};

export default PublicRoute;
