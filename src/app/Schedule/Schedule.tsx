import Image from 'next/image';
import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem]  overflow-x-hidden'>
      {/* Church Service */}
      <div className='mr-auto px-8 font-canela font-thin text-gray-700 text-[2.5rem] md:text-[3.9rem] lg:text-[4rem] capitalize my-[4rem]'>
        <h1 className='transform translate-x-[0%] '>Church</h1>
        <h1 className='transform translate-x-[4rem]'>Service</h1>
      </div>

      {/* Info Blocks */}
      <div className='w-full px-8 lg:px-[4rem] flex flex-col lg:flex-row'>
        <div className='lg:w-[60%]'>
          <div className='flex  mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start uppercase'>
              <p className=''>Date</p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>Saturday 26 October 2024</p>
            </div>
          </div>
          <div className='flex  mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start  uppercase'>
              <p> Guest Arrival </p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>11:00</p>
            </div>
          </div>
          <div className='flex  mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start  uppercase'>
              <p>Service Begins</p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
              <p className=''>12:00</p>
              <p className=''>
                NB:{' '}
                <span className='underline font-bold'>
                  Please arrive before 11h45am
                </span>{' '}
                to secure seating and ensure an uninterrupted church service.
              </p>
            </div>
          </div>
          <div className='flex  mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start  uppercase'>
              <p>Address</p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>St John Fisher Catholic Church</p>
              <p className=''>321 Border Road East</p>
              <p className=''>Pretoria, GP</p>
              <button
                className='w-full max-w-[20rem] mt-4 px-6 py-2 border border-gray-500 text-gray-500 font-calibri text-[1rem] md:text-[1.4rem] hover:bg-orange-600 hover:text-white transition duration-300'
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/umpMaRVjkeLveji37',
                    '_blank'
                  )
                }
              >
                MAP
              </button>
            </div>
          </div>
        </div>

        {/* Church Image */}
        <div className='w-full max-w-[25rem] h-[25rem] mx-auto lg:my-auto mt-[5rem] flex items-center justify-center'>
          <Image
            src='/images/schedule/church1.png'
            alt='Church'
            className='rounded-full w-full h-full'
            objectFit='cover'
            objectPosition='center'
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
