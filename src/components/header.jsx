import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavPanel from "./mobileNavPanel";
import { useState } from "react";

export default function Header() {
    const [navPanelOpen, setNavPanelOpen] = useState(false);
    const token = localStorage.getItem("token");

    return (
        <header className="w-full h-[110px] shadow-lg flex items-center justify-between px-6 md:px-12 bg-gradient-to-r from-black via-[#1a1a1a] to-yellow-500 text-white relative z-50">

            {/* Logo Section */}
            <div className="flex items-center gap-4">
                <img
                    src="/logo.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-cover rounded-full border-[3px] border-yellow-400 shadow-md"
                />
                <span className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">
                    KV-AUDIO
                </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-10 font-medium text-lg">
                <Link to="/home" className="hover:text-yellow-250 transition">
                    Home
                </Link>
                <Link to="/items" className="hover:text-yellow-250 transition">
                    Rentals
                </Link>
                <Link to="/gallery" className="hover:text-yellow-250 transition">
                    Gallery
                </Link>
                <Link to="/contact" className="hover:text-yellow-300 transition">
                    Contact Us
                </Link>
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 md:gap-6">

                {/* Cart Icon */}
                <Link to="/booking" className="text-2xl hover:text-yellow-300 transition">
                    <FaCartShopping />
                </Link>

                {/* Auth Buttons */}
                {token ? (
                    <button
                        className="hidden md:inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded transition-colors"
                        onClick={() => {
                            localStorage.removeItem("token");
                            window.location.href = "/login";
                        }}
                    >
                        Logout
                    </button>
                ) : (

                    <div className="hidden md:flex gap-3">
                        <Link
                            to="/login"
                            className="bg-transparent border border-yellow-400 hover:bg-yellow-400 hover:text-black text-yellow-400 font-semibold px-4 py-2 rounded transition-colors"
                        >
                            Login
                        </Link>
                        <Link
                            to="/register"
                            className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-4 py-2 rounded transition-colors"
                        >
                            Sign Up
                        </Link>
                    </div>
                )}


                <GiHamburgerMenu
                    className="md:hidden text-2xl cursor-pointer"
                    onClick={() => setNavPanelOpen(true)}
                />
            </div>




            <MobileNavPanel isOpen={navPanelOpen} setOpen={setNavPanelOpen} />
        </header>
    );
}
