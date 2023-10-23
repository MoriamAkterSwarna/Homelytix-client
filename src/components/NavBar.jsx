import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoImg from "../assets/icons8-home-96.png";
import CommonBtn from "./CommonBtn";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-white text-gray-600">
      <nav className="p-2 m-6 mt-0 shadow-xl bg-slate-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between lg:px-20">
          <div className="flex items-center justify-between ">
            <div className="flex items-center">
              <img className="w-16 h-16" src={logoImg} alt="" />
              <Link to="/" className="text-3xl font-bold">
                Homelytix
              </Link>
            </div>
            <div className="sm:hidden ">
              <button
                className="block text-blue-600 focus:outline-none"
                onClick={toggleNavbar}>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
          <div
            className={`sm:flex  ${
              isOpen ? "block " : "hidden"
            }   transition-all duration-1000 ease-in-out border-l-8 lg:border-none mt-6 mb-3 border-blue-600`}>
            <ul className="sm:flex">
              <li className="px-4 py-2 lg:border-r-2 border-gray-400">
                <NavLink
                  to="/"
                  title="Home"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Home
                </NavLink>
              </li>
              <li className="px-4 py-2 lg:border-r-2 border-gray-400">
                <NavLink
                  to="about"
                  title="About"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  About
                </NavLink>
              </li>
              <li className="px-4 py-2 lg:border-r-2 border-gray-400">
                <NavLink
                  to="services"
                  title="Services"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Services
                </NavLink>
              </li>
              <li className="px-4 py-2 lg:border-r-2 border-gray-400">
                <NavLink
                  to="blog"
                  title="Blog"
                  className={({ isActive }) =>
                    isActive ? "active" : "default"
                  }>
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="mt-4">
            <Link to="signIn">
              <CommonBtn buttonText="Sign In"></CommonBtn>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
