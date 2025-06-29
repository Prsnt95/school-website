'use client';

import React from 'react';

import { staffData } from '../../data/staffData';

const Staff = () => {
  return (
    <section className='bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen py-12 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-5xl font-bold mb-6 text-gray-800'>
            Meet Our Team
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Our talented professionals are dedicated to delivering excellence
            and innovation.
          </p>
        </div>

        {/* Staff Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
          {staffData.map((staff) => (
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Staff;
