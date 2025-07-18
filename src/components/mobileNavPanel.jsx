import { IoMdClose } from "react-icons/io";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CiHome, CiSpeaker } from "react-icons/ci";
import { MdPhotoLibrary, MdContacts, MdInfoOutline } from "react-icons/md";
import { GiClothes } from "react-icons/gi"; // For Items
import { FaCalendarCheck } from "react-icons/fa"; // For Booking

export default function MobileNavPanel({ isOpen, setOpen }) {
    const [showPanel, setShowPanel] = useState(false);
    const [renderPanel, setRenderPanel] = useState(false);
    const navigate = useNavigate();

    function goTo(route) {
        setOpen(false);
        navigate(route);
    }

    useEffect(() => {
        if (isOpen) {
            setRenderPanel(true);
            setTimeout(() => setShowPanel(true), 10);
        } else {
            setShowPanel(false);
            setTimeout(() => setRenderPanel(false), 300);
        }
    }, [isOpen]);

    return (
        <>
            {renderPanel && (
                <div className="w-full h-screen bg-[#00000070] fixed top-0 left-0 z-50 transition-opacity duration-300">
                    <div className={`h-full bg-white w-[300px] shadow-lg transform transition-transform duration-300 ease-in-out ${showPanel ? "translate-x-0" : "-translate-x-full"}`}>
                        <div className="bg-accent w-full h-[70px] flex items-center justify-center relative">
                            <img
                                src="/logo.png"
                                alt="logo"
                                className="w-[60px] h-[60px] object-cover border-[3px] rounded-full absolute left-1"
                            />
                            <IoMdClose
                                className="absolute right-3 text-3xl cursor-pointer"
                                onClick={() => setOpen(false)}
                            />
                        </div>

                        {/* Navigation Links */}
                        <div onClick={() => goTo("/")} className="text-[20px] text-accent font-semibold px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                            <CiHome className="text-2xl" /> Home
                        </div>

                        <div onClick={() => goTo("/gallery")} className="text-[20px] text-accent font-semibold px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                            <MdPhotoLibrary className="text-2xl" /> Gallery
                        </div>

                        <div onClick={() => goTo("/items")} className="text-[20px] text-accent font-semibold px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                            <GiClothes className="text-2xl" /> Items
                        </div>

                        <div onClick={() => goTo("/booking")} className="text-[20px] text-accent font-semibold px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                            <FaCalendarCheck className="text-2xl" /> Booking
                        </div>

                        <div onClick={() => goTo("/contact")} className="text-[20px] text-accent font-semibold px-4 py-3 flex items-center gap-3 hover:bg-gray-100 cursor-pointer">
                            <MdContacts className="text-2xl" /> Contact
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
