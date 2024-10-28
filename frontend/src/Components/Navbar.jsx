import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    const navbarItems = [
        { name: "Home", path: "/" },
        { name: "Login", path: "/login" },
        { name: "Dashboard", path: "/dashboard" },
    ];

    return (
        <nav className="bg-gray-800 p-4 mb-16">
            <ul className="flex justify-end">
                {navbarItems.map((navbarItem) => (
                    <li
                        key={navbarItem.name}
                        className="text-white ml-16 hover:text-sky-400"
                    >
                        <div bg-gray-800>
                            <Link to={navbarItem.path}>{navbarItem.name}</Link>
                        </div>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
