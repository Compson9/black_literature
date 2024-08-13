"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// This is a react icon import
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-white fixed w-full px-4 border-gray-200 border z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src="/images/logo.jpg" height={139} width={139} alt="Logo" />
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <Link href="/donate">
            <button
              type="button"
              className="text-black hidden lg:flex bg-orange transition-colors duration-500 hover:bg-white hover:border hover:bg-animate-bounce font-medium rounded-lg text-[16px] px-7 py-4 text-center"
            >
              Donate
            </button>
            </Link>
           

            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"
              }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <Link
                href="/about"
                className="block py-2 px-3 font-aloja text-gray-900 rounded md:hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/ourservice"
                className="block py-2 font-well px-3 font-aloja text-gray-900 rounded md:hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                Our service
              </Link>
              <div className="relative">
                <button
                  onClick={toggleDropdown}
                  className="flex items-center py-2 px-3 font-aloja text-gray-900 rounded md:hover:text-gray-600"
                >
                  Our Store
                  {isDropdownOpen ? (
                    <FaChevronUp className="ml-3" />
                  ) : (
                    <FaChevronDown className="ml-3" />
                  )}
                </button>
                {isDropdownOpen && (
                  <ul className="absolute bg-white border rounded-lg shadow-md mt-2 py-2 w-40">
                    <li>
                      <Link
                        href="/ourstore/personal"
                        className="block px-4 py-2  text-gray-800 hover:bg-gray-100"
                        onClick={() => {
                          closeDropdown();
                          setMenuOpen(false);
                        }}
                      >
                        Personal
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/ourstore/educators"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        onClick={() => {
                          closeDropdown();
                          setMenuOpen(false);
                        }}
                      >
                        For Educators
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link
                href="/blog"
                className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="block py-2 px-3 text-gray-900 rounded md:hover:text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
