import './App.css';
import { MdOutlineBluetoothAudio } from "react-icons/md";
import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[400px] h-full bg-green-500">
        <button className="w-full h-[40px] text-[20px] font-bold  flex justify-center items-center"><ImParagraphJustify />Dashboard</button>
        <button className="w-full h-[40px] text-[25px] font-bold  flex justify-center"><BsFillSaveFill /> Bookings</button>
        <button className="w-full h-[40px] text-[25px] font-bold  flex justify-center "><RiAlignItemBottomLine /> Items</button>
        <button className="w-full h-[40px] text-[25px] font-bold  flex justify-center "><FaUser />Users</button>
      </div>

      <div className="w-full bg-red-900">
        <MdOutlineBluetoothAudio className="text-[300px] text-white" />
      </div>


    </div>
  )
}

export default App;
