import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, logout } from "../Redux/Slices/authSlice";
import Navbar from "../Components/Navbar";
import { FaArrowRight } from "react-icons/fa";
import LoginImage from "../Assets/login.svg";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const { success, error } = useSelector((state) => state.auth);

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(registerUser({ email, password }));
    };

    useEffect(() => {
        // Reset the notifcation after 3 seconds
        if (success || error) {
            setTimeout(() => {
                dispatch(logout());
            }, 3000);
        }
    }, [success, error, dispatch]);

    return (
        <div className="bg-white min-h-screen">
            {/*Navbar Items*/}
            <Navbar />
            {/* Form */}
            <div className="flex justify-between pt-20 m-4">
                <div className="max-w-md px-4 p-4 ">
                    <h2 className="text-4xl text-sky-900 font-bold">
                        Register
                    </h2>
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
                    <form onSubmit={handleRegister} className="">
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
                        <div className="flex text-gray-500 text-sm mb-2">
                            <div className="flex items-center">
                                <input className="mr-2" type="checkbox"></input>
                                <p>
                                    By hitting the register button, you agree to
                                    the{" "}
                                    <span className="text-sky-700">
                                        Terms & Conditions
                                    </span>{" "}
                                    &{" "}
                                    <span className="text-sky-700">
                                        Privacy Policy
                                    </span>
                                </p>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="flex items-center justify-center bg-sky-900 text-white p-2 rounded-md w-full h-12 hover:bg-sky-700"
                        >
                            Register
                            <FaArrowRight className="ml-4" />
                        </button>
                        <p className="text-sm text-gray-500 text-center">
                            Already have an account?{" "}
                            <span className="text-sky-700">Login</span>
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

export default Register;
