import './App.css';
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import { GoogleOAuthProvider } from '@react-oauth/google';
import VerifyEmail from './pages/verifyEmail/verifyEmail';


function App() {
  return (
    <GoogleOAuthProvider clientId="625303778806-1gldea682tl2nhsal45qnqvsh06mckmj.apps.googleusercontent.com">
      <BrowserRouter>
        <Toaster position='top-right' />
        <Routes path="/*">

          <Route path="/testing" element={<Testing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/*" element={<AdminPage />} />
          <Route path="/*" element={<HomePage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />

          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
