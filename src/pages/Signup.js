import { Link } from 'react-router-dom';
import SignupForm from '../components/SignupForm';

const Signup = () => {
  return (
    <div className="container auth-page">
      <SignupForm />
      <p className="auth-redirect">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;