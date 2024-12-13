import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const changeIcon = () => setToggle(!toggle);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Loan Calculator", path: "/calculator" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <nav className=" sticky top-0  border-gray-200 bg-gradient-to-r from-blue-500 to-blue-700 dark:bg-gray-800 dark:border-gray-700  min-h-[55px] z-[500000]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={'/'} className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold text-white whitespace-nowrap dark:text-white">
            Your Company
          </span>
        </Link>
        <button
          onClick={changeIcon}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {toggle ? <ImCross /> : <FaBars />}
        </button>
        <div className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((d, i) => (
            <Link to={d.path}
              className="text-white hover:text-blue-300 px-3 py-2 transition-colors duration-300"
            >
              {d.name}
            </Link>
          ))}
        </div>
      </div>
      <div
        className={`fixed top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 text-white abc transform ${toggle ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-64 md:hidden`}
      >
        <div className="p-4">
          <button
            onClick={changeIcon}
            className="text-white text-lg hover:text-blue-300 focus:outline-none"
          >
            <ImCross />
          </button>
        </div>
        <ul className="mt-4 space-y-4">
          {navLinks.map((d, i) => (
            <li  onClick={changeIcon} key={i}>
              
              <Link
                to={d.path}
                className="block py-2 px-4 hover:bg-blue-700 rounded transition-all duration-300"
              >
                {d.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
