import Image from 'next/image';
import React from 'react';

const Booklet: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center py-[4rem] pb-[4rem] border border-t-orange-600'>
      <div className='text-center mb-[2rem] px-[2rem]'>
        <h2 className='font-canela font-thin text-gray-800 text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] capitalize mb-[2rem]'>
          Wedding Booklet
        </h2>
        <p className='font-calibri text-gray-600 text-[1rem] md:text-[1.2rem]'>
          Our wedding booklet includes everything you need to know for the big
          day! Inside, you’ll find information about the ceremony, reception,
          accommodation options, transportation, and more. Click below to
          download your copy and be fully prepared for the celebration.
        </p>

        {/* Wedding Registry Link */}
        <p className='font-calibri text-gray-600 text-[1rem] md:text-[1.2rem] mt-4'>
          Don’t forget to visit our{' '}
          <a
            href='https://khumalowedding.com'
            target='_blank'
            rel='noopener noreferrer'
            className='text-orange-600 hover:underline'
          >
            wedding registry
          </a>{' '}
          to see how you can contribute to our new chapter!
        </p>
      </div>

      <div className='mb-[2rem] w-[6rem] h-[6rem] shadow-none'>
        <Image
          src='/images/schedule/aisle3.png'
          alt='Booklet Preview'
          className='w-full h-full object-cover rounded-lg opacity-60'
          width={256}
          height={256}
        />
      </div>

      <button
        className='border border-gray-500 text-gray-500 hover:bg-orange-600 hover:text-white font-calibri text-[1.2rem] px-8 py-4 shadow-lg transition-all duration-300'
        onClick={() =>
          window.open(
            '/uploads/Khumalo Wedding Pretoria - Mini Booklet v2.00.pdf',
            '_blank'
          )
        }
      >
        Download Booklet
      </button>
    </section>
  );
};

export default Booklet;
