import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../Redux/Slices/authSlice";
import Navbar from "../Components/Navbar";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            {/*Navbar Items*/}
            <Navbar />
            <div className="max-w-md mx-auto p-4">
                <h2 className="text-2xl mb-4">Register</h2>
                <form onSubmit={handleRegister} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white p-2 w-full"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
