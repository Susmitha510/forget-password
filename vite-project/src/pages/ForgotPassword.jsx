import axios from 'axios';
import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        'https://forget-password-server-70vw.onrender.com/api/auth/forgot-password',
        { email }
      );

      alert('If user exists, reset email sent');
      setEmail('');
    } catch (error) {
      console.error('Forgot Password Error:', error);
      alert('Something went wrong');
    }
  };

  return (
    <div className="fp-container">
      <form className="fp-form" onSubmit={handleForgot}>
        <h2 className="fp-title">Forgot Password</h2>

        <input
          type="email"
          className="fp-input"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          className="fp-btn"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;