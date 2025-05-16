import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password, firstName, lastName, address, phone });
        axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/`, {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName,
            address: address,
            phone: phone


        }).then((res) => {
            toast.success("Account created successfully");
            navigate("/login");
        }).catch((err) => {
            toast.error(err?.response?.data?.error || "Something went wrong");
        })
    };


    return (
        <div className="bg-picture w-full h-screen flex justify-center items-center">
            <form
                onSubmit={handleOnSubmit}
                className="w-full max-w-xl bg-white/20 backdrop-blur-xl px-8 py-10 rounded-xl shadow-md space-y-4"
            >
                <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                        type="text"
                        placeholder="First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />

                    <input
                        type="text"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        required
                    />
                </div>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    required
                />

                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <div className="flex space-x-4 pt-4">
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Register
                    </button>

                </div>
            </form>
        </div>
    );
};


