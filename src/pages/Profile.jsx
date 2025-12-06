import React, { useEffect, useState } from "react";
import HeroSub from "../components/shared/HeroSub";
import { Icon } from "@iconify/react";
import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function Profile() {
    const [activeTab, setActiveTab] = useState("Profile Info");
    const token = localStorage.getItem("token");

    const [user, setUser] = useState(null);
    const [name, setName] = useState("");
    const [profilePhoto, setProfilePhoto] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);

    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [loading, setLoading] = useState(true);
    const [loader, setLoader] = useState(false);

    // Fetch logged-in user data
    useEffect(() => {
        axios
            .get(`${API_BASE_URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                setUser(res.data.user);
                setName(res.data.user.name);
                setPreviewImage(res.data.user.profile_photo);
            })
            .catch((err) => console.error(err))
            .finally(() => setLoading(false));
    }, []);

    // Update Profile Info
    const handleSaveProfile = async (e) => {
        e.preventDefault();
        setLoader(true);

        const formData = new FormData();
        formData.append("name", name);
        formData.append("_method", "PUT");

        if (profilePhoto) {
            formData.append("profile_photo", profilePhoto);
        }

        try {
            const res = await axios.post(`${API_BASE_URL}/profile`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Profile updated successfully!");
            setUser(res.data.user);

            localStorage.setItem("user", JSON.stringify(res.data.user));

        } catch (error) {
            console.error("Profile update error:", error);
            alert("Error updating profile");
        } finally {
            setLoader(false);
        }
    };

    // Change password
    const handlePasswordChange = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            await axios.post(
                `${API_BASE_URL}/change-password`,
                {
                    current_password: currentPassword,
                    new_password: newPassword,
                    new_password_confirmation: confirmPassword,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            alert("Password updated successfully");
            setCurrentPassword("");
            setNewPassword("");
            setConfirmPassword("");
        } catch (error) {
            console.error("Password update error:", error);
            alert("Error updating password");
        }
    };

    // Delete Account
    const handleDeleteAccount = async () => {
        if (!confirm("Are you sure you want to delete your account?")) return;

        try {
            await axios.delete(`${API_BASE_URL}/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            localStorage.clear();
            window.location.href = "/";
        } catch (error) {
            console.error("Delete error:", error);
            alert("Error deleting account");
        }
    };

    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/profile", text: "Profile" },
    ];

    if (loading) {
        return <div className="text-center py-20">Loading...</div>;
    }
    const tabItems = [
        { label: "Profile Info", icon: "mdi:account-circle" },
        { label: "Change Password", icon: "mdi:lock-reset" },
        { label: "Delete Account", icon: "mdi:account-remove" },
    ];
    return (
        <>
            <section className="text-center bg-cover pt-36 pb-20 relative bg-gradient-to-b from-white from-10% dark:from-darkmode to-herobg to-90% dark:to-darklight">
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8 absolute" style={{ 'zIndex': '49' }}>
                    <div className="flex items-center justify-center relative mb-2.5">
                        <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full object-cover" />
                    </div>
                </div>
            </section>
            <section className="relative pt-36 pb-24">
                {/* Cover Background */}


                <div className="w-full max-w-5xl mx-auto px-6 md:px-8 relative z-10">

                    {/* Name + Bio */}
                    <h3 className="text-center font-bold text-3xl text-gray-900 mb-2" style={{ 'color': '#000' }}>
                        {user?.name}
                    </h3>
                    <p className="text-center text-gray-500 mb-8">
                        <a href={`mailto:${user?.email}`} className="text-primary">{user?.email}</a>
                    </p>

                    {/* Vertical Tabs Layout */}
                    <div className="flex flex-col md:flex-row gap-6">

                        {/* Tabs Left Side */}
                        <div
                            className="flex md:flex-col flex-row md:w-1/4 w-full md:border-r border-gray-200 
               items-center justify-center"
                            style={{ width: "300px", border: "none" }}
                        >
                            {tabItems.map((tab) => (
                                <button
                                    key={tab.label}
                                    onClick={() => setActiveTab(tab.label)}
                                    className={`px-4 py-3 text-left text-lg w-full flex items-center gap-2
            ${activeTab === tab.label
                                            ? "text-primary border-l-4 border-primary bg-gray-100"
                                            : "text-gray-600 hover:text-primary"
                                        }`}
                                >
                                    <Icon icon={tab.icon} className="text-xl" />
                                    {tab.label}
                                </button>
                            ))}

                        </div>

                        {/* Right Side Content */}
                        <div className="md:w-3/4 w-full" style={{ 'paddingLeft': '150px', 'height': '500px' }}>

                            {/* ---------- TAB 1: PROFILE INFO ---------- */}
                            {activeTab === "Profile Info" && (
                                <div>
                                    <h2 className="max-w-72 text-[40px] leading-[1.2] font-bold mb-9">
                                        Edit Profile
                                    </h2>
                                    <form
                                        onSubmit={handleSaveProfile}
                                        className="flex flex-wrap w-full m-auto justify-between"
                                    >
                                        <div className="w-full mx-0 my-2.5">
                                            <label className="pb-3 inline-block text-17">Full Name</label>
                                            <input
                                                type="text"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full text-17 px-4 py-2.5 rounded-lg border-border border"
                                            />
                                        </div>

                                        <div className="w-full mx-0 my-2.5">
                                            <label className="pb-3 inline-block text-17">Email</label>
                                            <input
                                                type="text"
                                                value={user?.email}
                                                readOnly
                                                className="w-full text-17 px-4 py-2.5 rounded-lg border-border border"
                                            />
                                        </div>

                                        <div className="mx-0 my-2.5 w-full">
                                            <button
                                                type="submit"
                                                className={`bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block 
            hover:bg-blue-700 transition ${loader ? "opacity-70 cursor-not-allowed" : ""
                                                    }`}
                                            >
                                                {loader ? "Saving..." : "Save Changes"}
                                            </button>
                                        </div>
                                    </form>

                                </div>
                            )}

                            {/* ---------- TAB 2: CHANGE PASSWORD ---------- */}
                            {activeTab === "Change Password" && (
                                <div>
                                    <h2 className="max-w-70 text-[40px] leading-[1.2] font-bold mb-9">Update Password</h2>
                                    <form
                                        className="flex flex-wrap w-full m-auto justify-between"
                                    >
                                        <div className="w-full mx-0 my-2.5">
                                            <label className="pb-3 inline-block text-17">
                                                Current Password
                                            </label>
                                            <input
                                                type="password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                                className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                                            />
                                        </div>

                                        <div className="w-full mx-0 my-2.5">
                                            <label className="pb-3 inline-block text-17">New Password</label>
                                            <input
                                                type="password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                                className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                                            />
                                        </div>

                                        <div className="w-full mx-0 my-2.5">
                                            <label className="pb-3 inline-block text-17">
                                                Confirm Password
                                            </label>
                                            <input
                                                type="password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                className="w-full text-17 px-4 py-2.5 rounded-lg border-border border dark:border-dark_border dark:text-white dark:bg-darkmode transition-all duration-500 focus:border-primary dark:focus:border-primary focus:outline-0"
                                            />
                                        </div>
                                        <div className="mx-0 my-2.5 w-full">
                                            <button
                                                onClick={handlePasswordChange}
                                                className={`bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 transition ${loader ? "opacity-70 cursor-not-allowed" : ""
                                                    }`}
                                            >
                                                {loader ? "Saving..." : "Save Password"}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}

                            {/* ---------- TAB 3: DELETE ACCOUNT ---------- */}
                            {activeTab === "Delete Account" && (
                                <div>
                                    <h2 className="max-w-70 text-[40px] leading-[1.2] font-bold mb-9">Delete Account</h2>
                                    <p className="text-gray-500 mb-6">
                                        This action is permanent. Your data will be lost.
                                    </p>
                                    <div className="mx-0 my-2.5 w-full">
                                        <button
                                            onClick={handleDeleteAccount}
                                            className={`bg-primary rounded-lg text-white py-4 px-8 mt-4 inline-block hover:bg-blue-700 transition ${loader ? "opacity-70 cursor-not-allowed" : ""
                                                }`}
                                        >
                                            Delete My Account
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
