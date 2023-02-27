import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Welcome = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <h5>Welcome</h5>
      <button type="button" onClick={() => loginWithRedirect()}>
        Sign In
      </button>
    </div>
  );
};

export default Welcome;
