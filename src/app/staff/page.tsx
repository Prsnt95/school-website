'use client';

import React, { useState } from 'react';

import { staffData } from '../../data/staffData';

const Staff = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter staff based on search term
  const filteredStaff = staffData.filter((staff) =>
    staff.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <section className='bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-6 text-gray-800'>
            Meet Our Team
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Our talented professionals are dedicated to delivering excellence
            and innovation.
          </p>

          {/* Search Bar */}
          <div className='max-w-md mx-auto'>
            <div className='relative'>
              <input
                type='text'
                placeholder='Search by name...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full px-4 py-3 pl-12 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg'
              />
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <svg
                  className='h-5 w-5 text-gray-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {filteredStaff.length > 0 ? (
            filteredStaff.map((staff) => (
              <div
                key={staff.id}
                className='bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
              >
                <div className='relative'>
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className='w-full h-64 object-cover'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                </div>

                <div className='p-6 text-center'>
                  <h3 className='text-xl font-bold text-gray-800 mb-2'>
                    {staff.name}
                  </h3>
                  <p className='text-blue-600 font-semibold mb-2'>
                    {staff.position}
                  </p>
                  <p className='text-gray-600 text-sm'>{staff.department}</p>
                </div>
              </div>
            ))
          ) : (
            <div className='col-span-full text-center py-12'>
              <p className='text-gray-500 text-lg'>
                No staff members found matching "{searchTerm}"
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Staff;
