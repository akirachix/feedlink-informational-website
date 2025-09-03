
"use client";
import React, { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Impacts", path: "/#impacts" },
    { label: "About us", path: "/about-us" },
    { label: "FAQ", path: "/#faq" },
    { label: "Team", path: "/#team" },
    { label: "Explore", path: "/#explore" },
    { label: "Contacts", path: "/#contacts" },
  ];
  return (
    <nav className="bg-[var(--primary-color)] py-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-full mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 lg:ml-1 sm:ml-1 whitespace-nowrap">
          <img src="/images/Logo.svg" alt="Logo" className="h-8 w-auto lg:h-10" />
          <span className="text-[var(--secondary-color)] font-semibold text-xl sm:text-2xl lg:text-4xl tracking-tight ">
            FEEDLINK
          </span>
        </div>
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 text-white font-semibold mr-6 xl:mr-11">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <a
                href={path}
                className="block px-2 py-1 hover:text-[var(--secondary-color)] cursor-pointer text-base xl:text-lg transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
            className="text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--secondary-color)] rounded"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
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
      </div>
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col mt-4 space-y-4 text-white font-medium px-4 sm:px-6 pb-4">
          {navLinks.map(({ label, path }) => (
            <li key={label}>
              <a
                href={path}
                className="block px-4 py-2 hover:text-[var(--secondary-color)] cursor-pointer text-base transition"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;



