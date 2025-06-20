'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='bg-primary text-white !py-4 !px-8 shadow-md'>
      <div className='max-w-7xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2 !ml-2'>
          <Image src='/logo.png' alt='School Logo' width={45} height={45} />
          Sangka Dechholing Gonpa School
        </Link>

        {/* Links */}
        <ul className='flex gap-8 text-lg font-medium items-center !mr-2'>
          <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/'>Home</Link>
          </li>
          <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/about'>About</Link>
          </li>
          <li className='hover:text-secondary transition-colors duration-200'>
            <Link href='/admissions'>Admissions</Link>
          </li>

          {/* Dropdown */}
          <li className='relative group'>
            <span className='cursor-pointer hover:text-secondary transition-colors duration-200'>
              More
            </span>
            <ul className='absolute right-0 mt-2 hidden group-hover:block bg-white text-black rounded-md shadow-md overflow-hidden z-50'>
              <li className='!px-5 !py-3 hover:bg-gray-100'>
                <Link href='/contact'>Contact</Link>
              </li>
              <li className='!px-5 !py-3 hover:bg-gray-100'>
                <Link href='/faq'>FAQ</Link>
              </li>
              <li className='!px-5 !py-3 hover:bg-gray-100'>
                <Link href='/news'>News</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
}
