"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Nav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false); // State to handle menu open/close on small screens

  const isActive = (route: string) => pathname === route;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a route is selected
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative flex items-center justify-between p-5 text-white bg-customGray">
      {/* Large Screen Logo */}
      <div className="hidden md:block text-2xl font-bold cursor-pointer">
        <Link href="/" onClick={handleLinkClick}>Logo</Link>
      </div>

      {/* Small Screen Container */}
      <div className="flex items-center justify-between w-full md:hidden">
        {/* Logo for small screens */}
        <div className="text-2xl font-bold cursor-pointer">
          <Link href="/" onClick={handleLinkClick}>Logo</Link>
        </div>

        {/* Hamburger menu icon for small screens */}
        <button onClick={toggleMenu} className="text-white focus:outline-none z-10">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // Cancel icon when menu is open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when menu is closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Side Menu for small screens */}
      <div
        className={`fixed top-0 right-0 h-full w-2/6 bg-customGray shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden z-0`}
      >
        <ul className="flex flex-col mt-8 items-start p-5 space-y-4">
          {['/', '/gallery', '/about', '/contact', '/resume'].map((route) => (
            <li key={route} className="w-full">
              <Link
                href={route}
                className={`block w-full text-left py-2 px-4 ${isActive(route) ? 'text-customGreen' : 'text-white'}`}
                onClick={handleLinkClick}
              >
                <span>{route.slice(1).toUpperCase() || 'HOME'}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation links for larger screens */}
      <div className="hidden md:flex md:items-center md:mr-20">
        <ul className="flex space-x-8">
          {['/', '/gallery', '/about', '/contact', '/resume'].map((route) => (
            <li key={route} className="relative">
              <Link
                href={route}
                className={`relative cursor-pointer ${isActive(route) ? 'text-customGreen' : 'text-white'}`}
              >
                <span>{route.slice(1).toUpperCase() || 'HOME'}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
