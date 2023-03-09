import { useAuth0 } from '@auth0/auth0-react';

const Dashboard = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={() => logout()}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
