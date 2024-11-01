import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, logout } from "../Redux/Slices/authSlice";
import Navbar from "../Components/Navbar";
import LoginImage from "../Assets/login.svg";
import { FaArrowRight } from "react-icons/fa";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { success, error } = useSelector((state) => state.auth);

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    useEffect(() => {
        // Reset notifications on component mount
        if (success || error) {
            setTimeout(() => {
                dispatch(logout());
            }, 3000); // Clear after 3 seconds
        }
    }, [success, error, dispatch]);

    return (
        <div className="bg-white min-h-screen">
            {/*Navbar Items*/}
            <Navbar />
            {/* Form */}
            <div className="flex justify-between pt-20 m-4">
                <div className="max-w-md px-4 p-4 ">
                    <h2 className="text-4xl text-sky-900 font-bold">Login</h2>
                    <p className="mb-8 text-sm text-sky-900">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorem, itaque.
                    </p>
                    {success && (
                        <div className="bg-green-200 p-2 mb-4 text-green-800">
                            {success}
                        </div>
                    )}
                    {error && (
                        <div className="bg-red-200 p2 mb-4 text-red-800">
                            {error}
                        </div>
                    )}
                    <form onSubmit={handleLogin} className="">
                        <h3 className="mb-2">Email</h3>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="border mb-4 p-2 w-full rounded-md"
                        />
                        <h3 className="mb-2">Password</h3>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border mb-6 p-2 w-full rounded-md"
                        />
                        <div className="flex justify-between text-gray-500 text-sm mb-2">
                            <p className="flex items-center">
                                <input className="mr-2" type="checkbox"></input>
                                Keep me logged in
                            </p>
                            <a href="/">Forgot Password?</a>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center bg-sky-900 text-white p-2 rounded-md w-full h-12 hover:bg-sky-700"
                        >
                            Login
                            <FaArrowRight className="ml-4" />
                        </button>
                        <p className="text-sm text-gray-500 text-center">
                            Don't have an account?
                            <span className="text-sky-700"> Sign up</span>
                        </p>
                    </form>
                </div>
                <img
                    className="max-w-md hidden lg:block"
                    src={LoginImage}
                    alt="login-image"
                />
            </div>
        </div>
    );
}

export default Login;
