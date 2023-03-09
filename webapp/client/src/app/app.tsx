import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Dashboard from '../pages/Dashboard';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import {
  authSelector,
  login,
  login_failed,
} from '../store/reducers/auth/auth.reducer';

const App = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, loading } = useSelector(authSelector);
  const { isLoading, getAccessTokenSilently } = useAuth0();

  const fetchAccessToken = useCallback(async () => {
    try {
      if (!isLoggedIn) {
        const token = await getAccessTokenSilently();
        if (token) {
          console.log(token);
          // store the token in local storage for that, create a hook
          await dispatch(login());
        }
      }
    } catch (error) {
      await dispatch(login_failed());
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchAccessToken();
  }, []);

  if (isLoading || loading === 'idle') {
    return <p>Loading....</p>;
  }

  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<PrivateRoute element={<Dashboard />} to="/" />}
      />
      <Route
        path="/"
        element={<PublicRoute element={<Welcome />} to="/dashboard" />}
      />
    </Routes>
  );
};

export default App;
