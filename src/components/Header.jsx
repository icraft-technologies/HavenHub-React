import React, { useEffect, useState } from 'react';
import logoPath from '/assets/media/logo-2.png'
import Avatar from '/assets/images/avatar/avatar_1.jpg'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import HeaderLink from "./HeaderLink";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;


export default function Header() {
    const navLinks = [
        { label: "Home", href: "/" },
        {
            label: "Properties",
            href: "/properties",
            // submenu: [
            //     { label: "Buy", href: "/properties/buy" },
            //     { label: "Rent", href: "/properties/rent" },
            // ],
        },
        { label: "Blogs", href: "/blogs" },
        { label: "About Us", href: "/about" },
        { label: "Contact Us", href: "/contact" },
    ];
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
        setSticky(window.scrollY >= 80); // 80px scroll triggers sticky
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const updateUser = () => {
            const storedUser = localStorage.getItem('user');
            setUser(storedUser ? JSON.parse(storedUser) : null);
        };

        updateUser(); // Initialize on mount

        // Listen to custom login event
        window.addEventListener("login", updateUser);

        // Optional: listen to storage events (works across tabs)
        window.addEventListener("storage", updateUser);

        return () => {
            window.removeEventListener("login", updateUser);
            window.removeEventListener("storage", updateUser);
        };
    }, []);


    const handleSignOut = async () => {
        try {
            const token = localStorage.getItem('token');

            // Call Laravel API to logout
            await axios.post(
                `${API_BASE_URL}/logout`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Send token if your API uses Bearer auth
                    },
                }
            );

            // Clear local storage
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(null);

            // Redirect to Sign In page
            navigate('/signin');
        } catch (error) {
            console.error('Logout error:', error);
            // Optionally clear local storage anyway
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            setUser(null);
            navigate('/signin');
        }
    };
    return (
        <header className={`fixed h-24 top-0 py-1 z-50 w-full transition-all 
            ${sticky
                ? "shadow-lg dark:shadow-darkmd bg-white dark:bg-semidark"
                : "bg-transparent shadow-none"
            }`}>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md flex items-center justify-between px-4 py-6">
                <Link to="/">
                    <img alt="logo" loading="lazy" width={160} height={50} decoding="async" className="dark:hidden" style={{ color: 'transparent', width: 'auto', height: 'auto' }} src={logoPath} />
                    <img alt="logo" loading="lazy" width={160} height={50} decoding="async" className="dark:block hidden" style={{ color: 'transparent', width: 'auto', height: 'auto' }} src={logoPath} />
                </Link>

                <nav className="hidden lg:flex flex-grow items-center justify-center space-x-6">
                    {navLinks.map((item, index) => (
                        <HeaderLink key={index} item={item} />
                    ))}
                </nav>

                <div className="flex items-center space-x-4">

                    {user ? (
                        <>
                            {/* User Avatar */}
                            <div className="relative group">
                                <img
                                    src={Avatar} // Replace with user avatar if available
                                    alt="avatar"
                                    className="w-9 h-9 rounded-full"
                                />
                                <p className="absolute w-fit text-sm font-medium text-center z-10 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity duration-200 bg-primary text-white py-1 px-2 rounded-lg shadow-2xl top-full left-1/2 transform -translate-x-1/2 mt-3">
                                    {user.name || user.email}
                                </p>
                            </div>

                            {/* Sign Out Button */}
                            <button
                                onClick={handleSignOut}
                                className="hidden lg:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white"
                            >
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <>
                            <Link className="hidden lg:block bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white" to="/signin">
                                Sign In
                            </Link>
                            <Link className="hidden lg:block bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700" to="/signup">
                                Sign Up
                            </Link>
                        </>
                    )}

                    <button className="block lg:hidden p-2 rounded-lg" aria-label="Toggle mobile menu">
                        <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
                        <span className="block w-6 h-0.5 bg-black dark:bg-white mt-1.5"></span>
                    </button>
                </div>

                {/* mobile menu (kept markup structure) */}
                <div className="lg:hidden fixed top-0 z-50 right-0 h-full w-full bg-white dark:bg-darkmode shadow-lg transform transition-transform duration-300 max-w-xs translate-x-full">
                    <div className="flex items-center justify-between p-4">
                        <h2 className="text-lg font-bold text-midnight_text dark:text-white">Menu</h2>
                        <button aria-label="Close mobile menu">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="dark:text-white">
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="flex flex-col items-start p-4">
                        <div className="mt-4 flex flex-col space-y-4 w-full">
                            <Link className="bg-transparent border border-primary text-primary px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white" href="/signin">Sign In</Link>
                            <Link className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-blue-700" href="/signup">Sign Up</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
