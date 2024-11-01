import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";

function Navbar() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.user);
    const handleLogout = () => {
        dispatch(logout());
    };
    const navbarItems = [
        { name: "Home", path: "/" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex justify-end">
                {navbarItems.map((navbarItem) => (
                    <li
                        key={navbarItem.name}
                        className="font-inter text-white ml-16 hover:scale-101 hover:text-sky-400 transition duration-200 ease-out cursor-pointer"
                    >
                        <div className="bg-gray-800">
                            <Link to={navbarItem.path}>{navbarItem.name}</Link>
                        </div>
                    </li>
                ))}
                {user ? (
                    <>
                        <li className="text-white ml-16">{user.email}</li>
                        <li>
                            <button
                                onClick={handleLogout}
                                className="text-white ml-16"
                            >
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to="/login" className="text-white ml-16">
                                Login
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="text-white ml-16">
                                Register
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
