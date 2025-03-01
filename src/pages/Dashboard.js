import { useAuth } from '../hooks/useAuth';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="container dashboard-page">
      <h1>Dashboard</h1>
      <div className="welcome-card">
        <h2>Welcome, {user?.name || user?.email}!</h2>
        <p>You have successfully logged in to the protected dashboard.</p>
      </div>
      
      <div className="dashboard-content">
        <div className="dashboard-card">
          <h3>Your Profile</h3>
          <p><strong>Email:</strong> {user?.email}</p>
          {user?.name && <p><strong>Name:</strong> {user?.name}</p>}
          <p><strong>Last Login:</strong> {new Date().toLocaleString()}</p>
        </div>
        
        <div className="dashboard-card">
          <h3>Account Security</h3>
          <p>Your account is secure and uses localStorage for authentication.</p>
          <p>In a real application, this would use JWT tokens and a proper backend.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;