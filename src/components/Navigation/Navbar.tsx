'use client';

import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-gray-900">ZORO Energy</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <div className="flex space-x-8">
              <Link
                href="/solutions"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Solutions
              </Link>
              <Link
                href="/products"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button className="text-base font-medium text-gray-700 hover:text-gray-900">
                EN
              </button>
              <Link
                href="/login"
                className="text-base font-medium text-gray-700 hover:text-gray-900"
              >
                Login
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/solutions"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Solutions
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Products
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100"
            >
              Contact
            </Link>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-3">
                <button className="text-base font-medium text-gray-700 hover:text-gray-900">
                  EN
                </button>
                <Link
                  href="/login"
                  className="ml-4 text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}; 