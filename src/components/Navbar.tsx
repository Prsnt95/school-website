'use client';

import React, { useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  return (
    <nav className='bg-primary text-white py-4 px-8 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 ml-2'>
          <Image src='/logo.png' alt='School Logo' width={45} height={45} />
          <span className='text-lg font-semibold'>
            Sangka Dechholing Gonpa School
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className='hidden md:flex gap-8 text-lg font-medium items-center mr-2'>
          <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/'>Home</Link>
          </li>
          {/* <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/about'>About</Link>
          </li> */}
          <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/admissions'>Admissions</Link>
          </li>
          <li>
            <Link
              href='/news'
              className='hover:text-secondary transition-colors duration-200'
            >
              News/Events
            </Link>
          </li>
          <li>
            <Link
              href='/gallery'
              className='hover:text-secondary transition-colors duration-200'
            >
              Gallery
            </Link>
          </li>

          {/* Dropdown */}
          <li className='relative group'>
            <button
              className='cursor-pointer hover:text-secondary transition-colors duration-200 flex items-center gap-1 py-2'
              aria-haspopup='true'
              aria-expanded='false'
            >
              More
              <svg
                className='w-4 h-4 ml-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
            {/* Invisible bridge to prevent gap */}
            <div className='absolute right-0 top-full w-48 h-2 hidden group-hover:block'></div>
            <ul className='absolute right-0 top-full pt-2 w-48 hidden group-hover:block z-50'>
              <div className='bg-white text-black rounded-md shadow-lg overflow-hidden border'>
                <li>
                  <Link
                    href='/mission'
                    className='block px-5 py-3 hover:bg-gray-100 transition-colors duration-200'
                  >
                    Mission Statement
                  </Link>
                </li>
                <li>
                  <Link
                    href='/staff'
                    className='block px-5 py-3 hover:bg-gray-100 transition-colors duration-200'
                  >
                    Staff Directory
                  </Link>
                </li>

                <li>
                  <Link
                    href='/admin'
                    className='block px-5 py-3 hover:bg-gray-100 transition-colors duration-200'
                  >
                    Admin
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='block px-5 py-3 hover:bg-gray-100 transition-colors duration-200'
                  >
                    Contact
                  </Link>
                </li>
              </div>
            </ul>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden flex flex-col gap-1 p-2'
          aria-label='Toggle mobile menu'
          onClick={toggleMobileMenu}
        >
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-white transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className='px-8 py-4 space-y-4 bg-primary border-t border-white/10'>
          <li>
            <Link
              href='/'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href='/about'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href='/admissions'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              Admissions
            </Link>
          </li>
          <li>
            <Link
              href='/contact'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href='/faq'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href='/news'
              className='block py-2 hover:text-secondary transition-colors duration-200'
              onClick={closeMobileMenu}
            >
              News
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
