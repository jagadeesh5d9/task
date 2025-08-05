import { useNavigate } from 'react-router-dom';
import Header from './Header'; // Import the new Header component
import '../styles/Login.css';

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header /> {/* Add the Header here */}
      <div className="login-container">
        <div className="login-card">
          <h2 className="login-title">Intern Portal</h2>
          <input
            type="text"
            placeholder="Enter Email"
            className="login-input"
          />
          <button
            onClick={() => navigate('/dashboard')}
            className="login-button"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;