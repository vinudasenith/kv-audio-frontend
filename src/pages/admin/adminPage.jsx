
import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
export default function AdminPage() {
    return (
        <div className="w-full h-screen flex">
            {/* Sidebar on the left */}
            <div className="w-[400px] h-full bg-green-500 flex flex-col items-start p-4">
                <Link to="/admin" className="w-full h-[40px] text-[20px] font-bold flex items-center gap-2">
                    <ImParagraphJustify /> Dashboard
                </Link>
                <Link to="/admin/booking" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <BsFillSaveFill /> Bookings
                </Link>
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <RiAlignItemBottomLine /> Items
                </Link>
                <Link to="/admin/user" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <FaUser /> Users
                </Link>
            </div>

            {/* Main content on the right */}
            <div className="w-[calc(100vw-400px)] bg-blue-900">
                {/* Main content goes here */}
                <Routes path="/*">
                    <Route path="/booking" element={<h1>Booking</h1>} />
                    <Route path="/items" element={<h1>Items</h1>} />
                    <Route path="/user" element={<h1>User</h1>} />




                </Routes>
            </div>
        </div>
    );


}