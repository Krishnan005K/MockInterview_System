import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { useAuth } from './AuthContext'; // Import the useAuth hook

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure the login function from useAuth

  const ADMIN_EMAIL = 'admin@example.com'; // Replace with your admin email
  const ADMIN_PASSWORD = 'Admin@1234'; // Replace with your admin password
  const INTERVIEW_EMAIL = 'interview@example.com'; // Replace with your interview email
  const INTERVIEW_PASSWORD = 'Interview@1234'; // Replace with your interview password

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  };

  const validateUsername = (name) => {
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    return usernameRegex.test(name);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (!validateUsername(signUpData.name)) {
      setError('Username must not contain spaces or special characters.');
      return;
    }
    if (!validatePassword(signUpData.password)) {
      setError('Password must be at least 8 characters long and contain at least one digit, one lowercase letter, one uppercase letter, and one special character.');
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setUsers([...users, { name: signUpData.name, email: signUpData.email, password: signUpData.password }]);
    setSignUpData({ name: '', email: '', password: '', confirmPassword: '' });
    setIsSignUp(false);
    setError('');
    console.log('User signed up successfully:', signUpData);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    if (loginData.email === ADMIN_EMAIL && loginData.password === ADMIN_PASSWORD) {
      login({ name: 'Admin', email: ADMIN_EMAIL }); // Use login function from context
      setError('');
      navigate('/admin'); // Redirect to the admin page
      console.log('Admin signed in successfully');
    } else if (loginData.email === INTERVIEW_EMAIL && loginData.password === INTERVIEW_PASSWORD) {
      login({ name: 'Interviewer', email: INTERVIEW_EMAIL }); // Use login function from context
      setError('');
      navigate('/interviewdash'); // Redirect to the interview dashboard
      console.log('Interviewer signed in successfully');
    } else {
      const user = users.find(user => user.email === loginData.email && user.password === loginData.password);
      if (user) {
        login(user); // Use login function from context
        setError('');
        navigate('/user', { state: { user } }); // Pass user data to UserDashboard
        console.log('User signed in successfully:', loginData);
      } else {
        setError('Invalid credentials. Please try again.');
      }
    }
  };

  const handleChange = (e, setData) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleToggle = (signUp) => {
    setIsSignUp(signUp);
    setError(''); // Reset error when switching between forms
  };

  return (
    <div className='lbody'>
      <div className={`container ${isSignUp ? 'right-panel-active' : ''}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
              <a href="https://accounts.google.com/servicelogin?hl=en-gb" className="social"><i className="fab fa-google" style={{ color: '#db4437' }}></i></a>
              <a href="https://www.linkedin.com/login" className="social"><i className="fab fa-linkedin-in" style={{ color: '#0077b5' }}></i></a>
            </div>
            <span>or use your email for registration</span>
            <input type="text" placeholder="Name" name="name" value={signUpData.name} onChange={(e) => handleChange(e, setSignUpData)} required />
            <input type="email" placeholder="Email" name="email" value={signUpData.email} onChange={(e) => handleChange(e, setSignUpData)} required />
            <input type="password" placeholder="Password" name="password" value={signUpData.password} onChange={(e) => handleChange(e, setSignUpData)} required />
            <input type="password" placeholder="Confirm Password" name="confirmPassword" value={signUpData.confirmPassword} onChange={(e) => handleChange(e, setSignUpData)} required />
            <button type="submit">Sign Up</button>
            {isSignUp && error && <p className="error">{error}</p>} {/* Show error only on sign-up page */}
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSignIn}>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#" className="social"><i className="fab fa-facebook-f" style={{ color: '#3b5998' }}></i></a>
              <a href="https://accounts.google.com/servicelogin?hl=en-gb" className="social"><i className="fab fa-google" style={{ color: '#db4437' }}></i></a>
              <a href="https://www.linkedin.com/login" className="social"><i className="fab fa-linkedin-in" style={{ color: '#0077b5' }}></i></a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" name="email" value={loginData.email} onChange={(e) => handleChange(e, setLoginData)} required />
            <input type="password" placeholder="Password" name="password" value={loginData.password} onChange={(e) => handleChange(e, setLoginData)} required />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
            {!isSignUp && error && <p className="error">{error}</p>} {/* Show error only on sign-in page */}
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className="ghost" onClick={() => handleToggle(false)}>Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className="ghost" onClick={() => handleToggle(true)}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
      <div className="blur" style={{ background: "#C1F5FF", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
    </div>
  );
}

export default Login;
