'use client';

import React, { useState } from 'react';

import Image from 'next/image';

import { Album } from '../../../types/gallery';
import { albums } from '../../data/galleryData';

const Gallery = () => {
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);

  const openAlbum = (album: Album) => {
    setSelectedAlbum(album);
  };

  const closeAlbum = () => {
    setSelectedAlbum(null);
  };

  return (
    <section className='min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              Photo Gallery
            </h1>
            <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
              Explore our collection of memories from school events, student
              life, cultural programs, and special moments at Sangka Dechholing
              Gonpa School.
            </p>
          </div>
        </div>
      </div>

      {/* Albums Grid */}
      {!selectedAlbum && (
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {albums.map((album) => (
              <div
                key={album.id}
                className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group'
                onClick={() => openAlbum(album)}
              >
                {/* Album Cover */}
                <div className='relative h-64 bg-gray-200 overflow-hidden'>
                  <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10' />
                  <Image
                    src={album.coverImage}
                    alt={album.title}
                    fill
                    className='object-cover group-hover:scale-105 transition-transform duration-300'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                  <div className='absolute bottom-4 left-4 z-20'>
                    <span className='text-white text-sm font-medium bg-black/30 px-2 py-1 rounded-full'>
                      {album.imageCount} photos
                    </span>
                  </div>
                </div>

                {/* Album Info */}
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors'>
                    {album.title}
                  </h3>
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {album.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Album View */}
      {selectedAlbum && (
        <div className='max-w-7xl mx-auto px-6 py-12'>
          {/* Album Header */}
          <div className='flex items-center justify-between mb-8'>
            <div>
              <button
                onClick={closeAlbum}
                className='text-blue-600 hover:text-blue-800 font-medium mb-4 flex items-center transition-colors'
              >
                ← Back to Albums
              </button>
              <h2 className='text-3xl font-bold text-gray-800 mb-2'>
                {selectedAlbum.title}
              </h2>
              <p className='text-gray-600'>
                {selectedAlbum.description} • {selectedAlbum.imageCount} photos
              </p>
            </div>
          </div>

          {/* Photo Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {selectedAlbum.images.map((image, index) => (
              <div
                key={index}
                className='aspect-square bg-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer group relative'
              >
                <Image
                  src={image}
                  alt={`${selectedAlbum.title} - Photo ${index + 1}`}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                  sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
