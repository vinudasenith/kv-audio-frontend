import './App.css';
import { MdOutlineBluetoothAudio } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import AdminPage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/homePage';


function App() {
  return (
    <BrowserRouter>
      <Routes path="/*">
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
