'use client';

import React, { useState } from 'react';

import { newsItems } from '../../data/newsData';

const News = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? newsItems : newsItems.slice(0, 3);

  return (
    <div className='h-full flex flex-col items-center bg-gray-50'>
      {/* Header */}
      <div className='flex justify-between items-center bg-primary h-24 !px-20 w-full shadow-sm'>
        <h1 className='text-white text-4xl font-bold'>School News & Events</h1>
      </div>

      {/* News Cards Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 bg-white w-11/12 max-w-7xl !my-10 !p-10 rounded-xl shadow-inner'>
        {visibleItems.map((item) => (
          <div
            key={item.id}
            className='bg-white border border-gray-200 rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 !p-6'
          >
            <h2 className='text-2xl font-bold text-primary !mb-2'>
              {item.title}
            </h2>
            <p className='text-sm text-gray-500 italic !mb-3'>{item.date}</p>
            <p className='text-gray-700 leading-relaxed'>{item.summary}</p>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className='!mb-10 bg-primary text-white px-6 py-2 rounded-full hover:bg-secondary transition-colors duration-300'
      >
        {showAll ? 'View Less' : 'View All'}
      </button>
    </div>
  );
};

export default News;
