import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialSignUp from '../components/SocialSignIn'
import Loader from "../components/Loader";
import logoPath from '../assets/media/logo-2.png'
import { Toaster, toast } from "react-hot-toast";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import { useAuth } from '../contexts/AuthContext';

const SignUp = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    // Validation functions
    const validateName = (name) => {
        if (!name.trim()) return "Name is required";
        if (!/^[a-zA-Z\s]{3,}$/.test(name)) return "Name must be at least 3 characters and contain only letters";
        return "";
    };

    const validateEmail = (email) => {
        if (!email.trim()) return "Email is required";
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) return "Enter a valid email address";
        return "";
    };

    const validatePassword = (password) => {
        if (!password.trim()) return "Password is required";
        if (password.length < 6) return "Password must be at least 6 characters";
        return "";
    };

    const validatePasswordConfirmation = (password_confirmation) => {
        if (!password_confirmation.trim()) return "Confirm Password is required";
        if (password_confirmation !== formData.password) return "Passwords do not match";
        return "";
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Validate on change
        setErrors((prev) => ({
            ...prev,
            [name]:
                name === "name"
                    ? validateName(value)
                    : name === "email"
                        ? validateEmail(value)
                        : name === "password"
                            ? validatePassword(value)
                            : validatePasswordConfirmation(value), // handle password_confirmation
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate all fields before submitting
        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        const passwordConfirmError = validatePasswordConfirmation(formData.password_confirmation);

        setErrors({
            name: nameError,
            email: emailError,
            password: passwordError,
            password_confirmation: passwordConfirmError,
        });

        if (nameError || emailError || passwordError || passwordConfirmError) return;
        if (nameError || emailError || passwordError) return;

        setLoading(true);

        try {
            // Call your register API
            const response = await axios.post(`${API_BASE_URL}/register`, {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                password_confirmation: formData.password_confirmation,
            });

            // Assuming API returns user info and token
            const { user, token } = response.data;

            login(user, token);

            toast.success("Registration successful!");
            navigate("/"); // Redirect after successful registration
        } catch (error) {
            console.error("Registration error:", error);
            toast.error(
                error.response?.data?.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="pt-40 pb-32 bg-light dark:bg-darkmode">
            <div className="pt-11 flex justify-center items-center text-center">
                <div className="max-w-lg w-full bg-white dark:bg-semidark px-8 py-14 sm:px-12 md:px-16 rounded-lg">
                    <div className="mb-10 text-center mx-auto inline-block max-w-[160px]">
                        <a href="/">
                            <img
                                src={logoPath}
                                alt="logo"
                                width={160}
                                height={50}
                                style={{ width: 'auto', height: 'auto' }}
                                quality={100}
                                className='dark:hidden'
                            />
                            <img
                                src={logoPath}
                                alt="logo"
                                width={160}
                                height={50}
                                style={{ width: 'auto', height: 'auto' }}
                                quality={100}
                                className='dark:block hidden'
                            />
                        </a>
                    </div>

                    <SocialSignUp />

                    <span className="z-1 relative my-8 block text-center">
                        <span className="-z-1 absolute left-0 top-1/2 block h-px w-full bg-border dark:bg-dark_border"></span>
                        <span className="text-primary/40 dark:text-border relative z-10 inline-block bg-white px-3 text-base dark:bg-semidark">
                            OR
                        </span>
                    </span>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-border dark:border-darkborder  bg-transparent px-5 py-3 text-base text-midnight_text outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-border dark:border-darkborder  bg-transparent px-5 py-3 text-base text-midnight_text outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-border dark:border-darkborder border-solid bg-transparent px-5 py-3 text-base text-midnight_text outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                name="password_confirmation"
                                value={formData.password_confirmation}
                                onChange={handleChange}
                                required
                                className="w-full rounded-md border border-border dark:border-darkborder bg-transparent px-5 py-3 text-base text-midnight_text outline-none transition placeholder:text-gray-300 focus:border-primary focus-visible:shadow-none dark:text-white dark:focus:border-primary"
                            />
                        </div>

                        <div className="mb-9">
                            <button
                                type="submit"
                                className="flex w-full cursor-pointer items-center justify-center rounded-md bg-primary hover:bg-DarkPrimary px-5 py-3 text-base text-white transition duration-300 ease-in-out hover:!bg-darkprimary dark:hover:!bg-darkprimary"
                            >
                                Sign Up {loading && <Loader />}
                            </button>
                        </div>
                    </form>

                    <p className="text-midnight_text dark:text-white mb-4 text-base">
                        By creating an account you agree with our{" "}
                        <a href="/#" className="text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary">
                            Privacy
                        </a>{" "}
                        and{" "}
                        <a href="/#" className="text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary">
                            Policy
                        </a>
                    </p>

                    <p className="text-midnight_text dark:text-white text-base">
                        Already have an account?
                        <Link
                            to="/signin"
                            className="pl-2 text-midnight_text dark:text-white hover:text-primary dark:hover:text-primary"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
