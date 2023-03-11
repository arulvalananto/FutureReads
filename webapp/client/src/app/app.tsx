import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { useCallback, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Welcome from '../pages/Welcome';
import Loader from 'src/components/Loader';
import Dashboard from '../pages/Dashboard';
import PublicRoute from '../components/PublicRoute';
import PrivateRoute from '../components/PrivateRoute';
import {
  authSelector,
  login,
  login_failed,
} from '../store/reducers/auth/auth.reducer';
import useLocalStorage from 'src/hooks/useLocalStorage';
import constants from 'src/common/constants';

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, getAccessTokenSilently } = useAuth0();
  const { isLoggedIn, loading } = useSelector(authSelector);
  const { setLocalStorageValue } = useLocalStorage(constants.TOKEN_NAME);

  const fetchAccessToken = useCallback(async () => {
    try {
      if (!isLoggedIn) {
        const newToken = await getAccessTokenSilently();
        if (newToken) {
          setLocalStorageValue(newToken);
          await dispatch(login());
        }
      }
    } catch (error) {
      await dispatch(login_failed());
      console.error(error);
    }
  }, [dispatch, getAccessTokenSilently, isLoggedIn, setLocalStorageValue]);

  useEffect(() => {
    fetchAccessToken();
  }, [fetchAccessToken]);

  if (isLoading || loading === 'idle') {
    return <Loader />;
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
