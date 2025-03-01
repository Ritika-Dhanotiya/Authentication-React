const Home = () => {
    return (
      <div className="container home-page">
        <h1>Welcome to Auth System</h1>
        <p>This is a simple authentication system built with React and Context API.</p>
        <div className="features">
          <div className="feature">
            <h3>User Authentication</h3>
            <p>Login and signup functionality with form validation</p>
          </div>
          <div className="feature">
            <h3>Protected Routes</h3>
            <p>Secure your routes and redirect unauthenticated users</p>
          </div>
          <div className="feature">
            <h3>Context API</h3>
            <p>Manage global state using React's Context API</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Home;