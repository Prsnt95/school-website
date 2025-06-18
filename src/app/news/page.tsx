import React from 'react';

const news = () => {
  return (
    <div className='h-full flex flex-col items-center '>
      <div className='flex justify-end items-center bg-secondary h-20 !px-20 w-1/1'>
        <h1 className='text-white text-4xl font-bold'>News</h1>
      </div>
      <div className='flex flex-row flex-wrap  bg-amber-100 w-4/5 h 4/5 !my-5'>
        <div className='flex  h-30 w-30 bg-amber-500 !m-20 '></div>
        <div className='flex   h-30 w-30 bg-amber-500 !m-20 '></div>
        <div className='flex  h-30 w-30 bg-amber-500 !m-20 '></div>
        <div className='flex   h-30 w-30 bg-amber-500 !m-20 '></div>
        <div className='flex  h-30 w-30 bg-amber-500 !m-20 '></div>
        <div className='flex   h-30 w-30 bg-amber-500 !m-20 '></div>
      </div>
    </div>
  );
};

export default news;
