import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';
import PrivateRoute from '../components/PrivateRoute';
import PublicRoute from '../components/PublicRoute';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <PrivateRoute element={<Dashboard />} to="/" />,
  },
  {
    path: '/',
    element: <PublicRoute element={<Welcome />} to="/dashboard" />,
  },
]);

export default router;
