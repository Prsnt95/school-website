'use client';

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function Navbar() {
  return (
    <nav className='bg-primary min-h-20 text-white py-4 flex items-center justify-between' style={{paddingLeft: '2rem', paddingRight: '5rem'}}>
      {/* Logo on the left */}
      <div className='flex items-center ml-4'>
        <Link href='/' className='text-2xl font-bold hover:text-secondary transition-colors duration-200'>
          <Image src='/logo.png' alt='Logo' width={50} height={50} />
        </Link>
      </div>

      {/* Navigation links on the right */}
      <ul className='flex gap-8 text-xl font-semibold items-center mr-4'>
        <li className='hover:text-secondary transition-colors duration-200'>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li className='hover:text-secondary transition-colors duration-200'>
          <Link href='/about'>
            About
          </Link>
        </li>
        <li className='hover:text-secondary transition-colors duration-200'>
          <Link href='/admissions'>
            Admissions
          </Link>
        </li>
        <li className='relative group'>
          <span className='cursor-pointer hover:text-secondary transition-colors duration-200'>More</span>

          {/* Dropdown content */}
          <ul className='absolute hidden group-hover:block bg-white text-black shadow-lg mt-2 rounded-md min-w-[150px]'>
            <li className='px-4 py-2 hover:bg-gray-200'>
              <Link href='/contact'>Contact</Link>
            </li>
            <li className='px-4 py-2 hover:bg-gray-200'>
              <Link href='/faq'>FAQ</Link>
            </li>
            <li className='px-4 py-2 hover:bg-gray-200'>
              <Link href='/news'>News</Link>
            </li>
          </ul>
        </li>

      </ul>
    </nav>
  );
}