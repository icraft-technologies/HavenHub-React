import React from 'react';
import ForgotPassword from '../components/auth/ForgotPassword'; // adjust path as needed

const ForgotPasswordPage = () => {
  return (
    <div className="pt-48 pb-20 px-4 bg-light dark:bg-darkmode">
      <div className="container mx-auto max-w-lg overflow-hidden rounded-lg bg-white dark:bg-semidark text-center px-8 py-14 sm:px-12 md:px-16">
        <ForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
