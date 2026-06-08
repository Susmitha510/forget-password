import './RegisterPage.css';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault(); // Prevent page refresh

    try {
      await axios.post(
        'http://localhost:5000/api/auth/register',
        { email, password }
      );

      alert('User registered successfully!');

      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error);

      alert(
        error.response?.data ||
        'Registration failed'
      );
    }
  };

  return (
    <div className="reg-container">
      <form className="reg-form" onSubmit={handleRegister}>
        <h2 className="reg-title">Register</h2>

        <input
          type="email"
          className="reg-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="reg-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="reg-btn"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;