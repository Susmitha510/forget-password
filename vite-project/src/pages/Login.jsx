import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'http://localhost:5000/api/auth/login',
        { email, password }
      );

      alert('Login successful');
      navigate('/home');
    } catch (error) {
      console.error('Login failed', error);
      alert('Failed to login');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2 className="login-title">Login</h2>

        <input
          type="email"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="login-btn"
        >
          Login
        </button>

        <Link
          to="/forgot-password"
          className="login-forgot"
        >
          Forgot Password?
        </Link>
      </form>
    </div>
  );
};

export default Login;