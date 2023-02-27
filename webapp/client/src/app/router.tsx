import { createBrowserRouter } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Welcome from '../pages/Welcome';

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/',
    element: <Welcome />,
  },
]);

export default router;
