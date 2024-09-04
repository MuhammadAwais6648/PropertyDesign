import React, { useState } from 'react';
import './loginForm.css';
import { Counter } from '../Counter';
import logo from "./img2.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Define navigate


  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);

    navigate('/landing');
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='containers'>
       <header className="navbar">
  <div className="logo">
    <img src={logo} alt=" " />
  </div>
  <a href="/register" className="register-link">Register</a>
</header>

    <div className="signin-container">
      
      <div className="signin-form">
        <div className='signin-form1'>
        <h2>Let's Sign In</h2>
        <p>Enter your details to sign in to your account</p>
        <form onSubmit={handleSignIn}>
        <div className="input-field">
            {/* <label htmlFor="email">Enter Email</label> */}
            <div className="input-wrapper">
              <i className="fas fa-envelope"></i>
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="input-field">
            {/* <label htmlFor="password">Password</label> */}
            <div className="input-wrapper">
              <i className="fas fa-lock"></i>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
             
            </div>
          </div>
          <a href="/forgot-password" className="forgot-password-link">Forgot Password</a>
          <button type="submit">Sign In</button>
        </form>
        </div>
        <p>Don't have an account? <a href="/register">Register Now</a></p>
      </div>
    </div>
    </div>
  );
}

export default SignInForm;
