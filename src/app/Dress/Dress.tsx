'use client';
import DressGallery from './DressGallery/DressGallery';
import React from 'react';

const Dress: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem]'>
      {/* Dress Code */}
      <div className='w-full px-8 font-canela font-thin text-gray-700 text-[3rem] md:text-[3.9rem] lg:text-[4.5rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[0%] '>Dress</h1>
        <h1 className='transform translate-x-[20%]'>Code</h1>
      </div>

      {/* Dress Code Details */}
      <div className='font-canela text-gray-500 text-center w-[90%] md:w-[60%] lg:w-[40%] leading-[1.75rem]'>
        <p className='text-[1.2rem] md:text-[1.2rem]'>
          The suggested Wedding Dress Code is{' '}
          <span className='font-bold'>Boho Chic / Autumn meets Spring</span>
        </p>
      </div>

      {/* Slider or Collage */}
      <div className='w-screen lg:px-[15%]'>
        <DressGallery />
      </div>

      {/* Additional Note */}
      <div className='font-calibri text-gray-500 text-center w-[90%] md:w-[60%] lg:w-[40%] leading-[1.75rem]'>
        <p className='text-[0.9rem] md:text-[1rem] text-gray-400 italic'>
          NB: This Dress Code is a suggestion, please feel free to wear any
          formal attire in which you feel most comfortable.
        </p>
      </div>
    </section>
  );
};

export default Dress;
