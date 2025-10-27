import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signin from '../pages/Signin';
import Signup from '../pages/Signup';
import ForgotPasswordPage from '../pages/ForgotPassword'; // example new page
import Contact from '../pages/Contact'; // example new page
import Blogs from '../pages/Blog'; // example new page
import Properties from '../pages/Properties'; // example new page
import About from '../pages/About'; // example new page

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
      <Route path="/about" element={<About />} />
      {/* Add more routes easily here */}
    </Routes>
  );
};

export default AppRoutes;
