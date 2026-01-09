"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <Link
            href="/"
            className="flex items-center hover:opacity-80 transition-opacity"
            onClick={closeMobileMenu}
          >
            <div className="text-2xl font-bold tracking-tight text-gray-900">
              <span className="text-gray-900">MINING </span>
              <span className="text-[#ffc500]">SENTRY </span>
              Catalog
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              About
            </Link>
            <a
              href="https://www.mining-sentry.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
            >
              Main Site
            </a>
            <a
              href="https://www.mining-sentry.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#ffc500] text-gray-900 rounded hover:bg-[#e6b000] transition-all duration-200 font-medium shadow-sm hover:shadow-md"
            >
              Sign In
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
            aria-label="Menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <a
                href="https://www.mining-sentry.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
              >
                Main Site
              </a>
              <a
                href="https://www.mining-sentry.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#ffc500] text-gray-900 rounded hover:bg-[#e6b000] transition-all duration-200 font-medium shadow-sm hover:shadow-md text-center"
              >
                Sign In
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
