
import { ImParagraphJustify } from "react-icons/im";
import { BsFillSaveFill } from "react-icons/bs";
import { RiAlignItemBottomLine } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link, Route, Routes } from "react-router-dom";
import AdminItemsPage from "./adminItemsPage";
import AddItemPage from "./addItemPage";
import UpdateItemPage from "./updateItemPage";
import AdminUsersPage from "./adminUsersPage";
import AdminOrdersPage from "./adminOrdersPage";
import { useEffect, useState } from "react";
import axios from "axios";

export default function AdminPage() {
    const [userValidated, setUserValidated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            window.location.href = "/login";
        }
        axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((res) => {
            console.log(res.data);
            const user = res.data;
            if (user.role == "admin") {
                setUserValidated(true);
            } else {
                window.location.href = "/";
            }

        }).catch((err) => {
            console.error(err);
            setUserValidated(false);
        })
    }, [])
    return (
        <div className="w-full h-screen flex">
            {/* Sidebar on the left */}
            <div className="w-[200px] h-full bg-green-500 flex flex-col items-start p-4">
                <Link to="/admin" className="w-full h-[40px] text-[20px] font-bold flex items-center gap-2">
                    <ImParagraphJustify /> Dashboard
                </Link>
                <Link to="/admin/orders" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <BsFillSaveFill /> Orders
                </Link>
                <Link to="/admin/items" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <RiAlignItemBottomLine /> Items
                </Link>
                <Link to="/admin/users" className="w-full h-[40px] text-[25px] font-bold flex items-center gap-2">
                    <FaUser /> Users
                </Link>
            </div>

            {/* Main content on the right */}
            <div className="w-[calc(100vw-200px)] bg-white">
                {/* Main content goes here */}
                <Routes path="/*">
                    <Route path="/orders" element={<AdminOrdersPage />} />
                    <Route path="/users" element={<AdminUsersPage />} />
                    <Route path="/items" element={<AdminItemsPage />} />
                    <Route path="/items/add" element={<AddItemPage />} />
                    <Route path="/user" element={<h1>User</h1>} />
                    <Route path="/items/edit" element={<UpdateItemPage />} />




                </Routes>
            </div>
        </div>
    );


}