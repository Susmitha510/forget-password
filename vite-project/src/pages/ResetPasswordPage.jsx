//ResetPasswordPage.jsx
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './ResetPasswordPage.css';

const ResetPasswordPage = () => {

    const { token } = useParams();
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        try {

            await axios.post(
                `https://forget-password-server-70vw.onrender.com/api/auth/reset-password/${token}`,
                { password }
            );

            alert('Password reset successful');
            navigate('/login');

        } catch (error) {
            console.error('error resetting password', error);
            alert('failed to reset password');
        }
    };

    return (
        <div className='reset-container'>
            <h2 className='reset-title'>Reset Password</h2>

            <input
                className='reset-input'
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br />

            <button
                className='reset-btn'
                onClick={handleResetPassword}
            >
                Reset Password
            </button>
        </div>
    );
};

export default ResetPasswordPage;