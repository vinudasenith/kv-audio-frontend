import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavPanel from "./mobileNavPanel";
import { useState } from "react";
export default function Header() {
    const [navPanelOpen, setNavPanelOpen] = useState(false);
    return (
        <header className="w-full h-[70px] shadow-md flex justify-center items-center relative bg-gradient-to-r from-accent to-[#ff7f50] text-white px-4 md:px-8">
            <img
                src="/logo.png"
                alt="logo"
                className="w-[55px] h-[55px] object-cover border-[3px] border-white absolute left-1 md:left-4 rounded-full shadow-md"
            />
            <Link to="/home" className="hidden md:block text-[22px] font-semibold mx-3 hover:text-gray-100 transition duration-200">
                Home
            </Link>
            <Link to="/contact" className="hidden md:block text-[22px] font-semibold mx-3 hover:text-gray-100 transition duration-200">
                Contact
            </Link>
            <Link to="/gallery" className="hidden md:block text-[22px] font-semibold mx-3 hover:text-gray-100 transition duration-200">
                Gallery
            </Link>
            <Link to="/items" className="hidden md:block text-[22px] font-semibold mx-3 hover:text-gray-100 transition duration-200">
                Items
            </Link>
            <Link to="/booking" className="hidden md:block text-[22px] font-semibold absolute right-10 hover:text-gray-100 transition duration-200">
                <FaCartShopping />
            </Link>
            <GiHamburgerMenu
                className="text-[28px] font-bold absolute right-4 md:hidden cursor-pointer hover:text-gray-200 transition duration-200"
                onClick={() => setNavPanelOpen(true)}
            />
            <MobileNavPanel isOpen={navPanelOpen} setOpen={setNavPanelOpen} />
        </header>




    )
}