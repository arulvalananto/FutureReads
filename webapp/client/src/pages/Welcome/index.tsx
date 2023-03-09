import { useAuth0 } from '@auth0/auth0-react';

import image from '../../assets/hero.jpg';
import logo from '../../assets/logo-large-transparent.png';

const Welcome = () => {
  const { loginWithRedirect, isLoading, isAuthenticated } = useAuth0();

  console.log(isAuthenticated);

  if (isLoading) {
    return <p>loading..............................</p>;
  }

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1 hidden lg:flex">
        <img src={image} alt="welcome" className="object-cover w-full h-full" />
      </div>
      <div className="flex-1 bg-primary flex flex-col items-center justify-center gap-5">
        <div className="w-60 h-28 flex">
          <img
            src={logo}
            alt="Future Reads"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-center gap-8 ">
          <p className="text-xl">
            Let's get started{' '}
            <span role="img" aria-label="rocket">
              🚀🚀
            </span>
          </p>
          <button
            type="button"
            onClick={() => loginWithRedirect()}
            className="btn-primary w-full text-center bg-black"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
