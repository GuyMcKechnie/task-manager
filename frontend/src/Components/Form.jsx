import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Form = (onSubmit) => {
    return (
        <div>
            <div>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border p-2 w-full rounded-md"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2 w-full rounded-md"
                    />
                    <div className="flex justify-between text-gray-500 text-sm">
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
        </div>
    );
};

export default Form;
