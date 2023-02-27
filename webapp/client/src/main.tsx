import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

import store from './store';
import router from './app/router';

const RenderApp = () => {
  return (
    <StrictMode>
      <Auth0Provider
        domain="future-reads.us.auth0.com"
        clientId="RuL2JMlNZ6mT0F3cturMLxuF74rFCXjO"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </Auth0Provider>
    </StrictMode>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<RenderApp />);
