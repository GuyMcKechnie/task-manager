import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const navbarItems = [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
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
            </ul>
        </nav>
    );
}

export default Navbar;
