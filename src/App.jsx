import './App.css';
import { MdOutlineBluetoothAudio } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';
import Testing from './components/testing';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';


function App() {
  return (
    <BrowserRouter>
      <Toaster position='top-right' />
      <Routes path="/*">

        <Route path="/testing" element={<Testing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
