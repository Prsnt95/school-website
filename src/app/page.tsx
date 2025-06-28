import Image from 'next/image';

import About from './about/page';
import './globals.css';

export default function Home() {
  return (
    <section>
      {/* Hero image block */}
      <div className='relative w-screen h-[600px] overflow-hidden group'>
        {/* Background image */}
        <Image
          src='/school1.png'
          alt='School Image'
          fill
          priority
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />

        {/* Overlay with gradient */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent' />

        {/* Hover overlay + label */}
        <div
          className='absolute inset-0 flex items-center justify-center
                        bg-transparent transition-all duration-500
                        group-hover:bg-black/40'
        >
          <div className='text-center px-'>
            <p
              className='text-white text-2xl md:text-3xl font-bold 
                         drop-shadow-1xl tracking-wide
                         transform transition-all duration-700
                         translate-y-4 opacity-0
                         group-hover:translate-y-0 group-hover:opacity-100
                         group-hover:scale-105'
            >
              Sangka Dechholing Gonpa School
            </p>
            <div
              className='mt-1 w-44 h-1 bg-white mx-auto rounded-full
                         transform transition-all duration-700 delay-200
                         opacity-0 scale-x-0 
                         group-hover:opacity-100 group-hover:scale-x-100'
            />
            <h2
              className='text-white text-5xl md:text-6xl font-bold 
                         drop-shadow-2xl tracking-wide
                         transform transition-all duration-700
                         translate-y-4 opacity-0
                         group-hover:translate-y-0 group-hover:opacity-100
                         group-hover:scale-105
                         mt-5'
            >
              Phungling, Taplejung
            </h2>
          </div>
        </div>
      </div>

      {/* About Section */}
      <About />
    </section>
  );
}
