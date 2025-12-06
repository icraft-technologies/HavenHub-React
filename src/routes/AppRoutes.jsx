import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgotPasswordPage from '../pages/ForgotPassword';
import Contact from '../pages/Contact';
import Blogs from '../pages/Blog';
import Properties from '../pages/Properties';
import About from '../pages/About';
import Profile from '../pages/Profile';
import PropertyDetail from '../pages/PropertyDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:slug" element={<PropertyDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
      {/* Add more routes easily here */}
    </Routes>
  );
};

export default AppRoutes;
