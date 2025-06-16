// src/app/about/page.tsx
export default function About() {
  return (
    <section className='bg-primary bg-white text-gray-800 px-6 py-12'>
      <div className='max-w-4xl mx-auto text-center'>
        <h1 className='text-5xl font-bold mb-6 text-primary'>
          About us
        </h1>
        <p className='text-lg text-gray-600 mb-8'>About page </p>
        <a
          href='/about'
          className='inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-green-600 transition'
        >
          Learn More
        </a>
      </div>
    </section>  );
}
