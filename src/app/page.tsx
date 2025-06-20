import Image from 'next/image';

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
      <div className='bg-gray-50 py-16 px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* About Content - Left */}
            <div>
              <h2 className='text-4xl font-bold text-gray-900 mb-6'>
                About Us
              </h2>
              <div className='prose prose-lg text-gray-600'>
                <p className='mb-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className='mb-4'>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id est laborum.
                </p>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </div>
            </div>

            {/* Quote Section - Right */}
            <div className='flex flex-col justify-center '>
              <div className='relative'>
                <svg
                  className='absolute -top-6 -left-4 w-12 h-12 text-primary/20'
                  fill='currentColor'
                  viewBox='0 0 32 32'
                >
                  <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                </svg>
                <blockquote className='text-2xl md:text-3xl font-light text-gray-700 leading-relaxed mb-6 relative'>
                  Something wise some wise guy (or girl) said.
                  <svg
                    className='absolute -bottom-2 -right-4 w-12 h-12 text-primary/20 rotate-180'
                    fill='currentColor'
                    viewBox='0 0 32 32'
                  >
                    <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
                  </svg>
                </blockquote>
                <cite className='text-lg text-primary  font-medium'>
                  — Some Wise Guy (JK deffo a guy)
                </cite>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
