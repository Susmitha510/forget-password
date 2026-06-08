//App.jsx
import './App.css';

import {
  Route,
  Routes,
} from 'react-router-dom';

import ForgotPassword from './pages/ForgotPassword.jsx';
import RegisterPage from './pages/RegisterPage.jsx';
import ResetPasswordPage from './pages/ResetPasswordPage.jsx';
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password/:token"
          element={<ResetPasswordPage />}
        />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;