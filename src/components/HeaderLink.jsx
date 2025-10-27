import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const location = useLocation();

  const handleMouseEnter = () => {
    if (item.submenu) setSubmenuOpen(true);
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  const isActive =
    location.pathname === item.href ||
    location.pathname.startsWith(`/${item.label.toLowerCase()}`);

  return (
    <div
      className={`${item.submenu ? "relative" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={item.href}
        className={`text-base flex py-3 font-normal text-midnight_text hover:text-primary dark:text-white dark:hover:text-primary ${
          isActive ? "!text-primary" : "text-black dark:text-white"
        }`}
      >
        {item.label}
        {item.submenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.5em"
            height="1.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {submenuOpen && item.submenu && (
        <div
          className="absolute py-2 top-9 left-0 mt-0.5 w-60 bg-white dark:bg-darkmode shadow-lg dark:shadow-darkmd rounded-lg"
          data-aos="fade-up"
          data-aos-duration="300"
        >
          {item.submenu.map((subItem, index) => (
            <Link
              key={index}
              to={subItem.href}
              className={`block px-4 py-2 ${
                location.pathname === subItem.href
                  ? "text-white bg-primary hover:bg-blue-700"
                  : "text-midnight_text dark:text-white hover:bg-section dark:hover:bg-semidark"
              }`}
            >
              {subItem.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
