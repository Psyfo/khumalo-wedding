import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem]  '>
      {/* Church Service */}
      <div className='font-brandon font-bold text-gray-700 text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[-25%] '>Church</h1>
        <h1 className='transform translate-x-[25%]'>Service</h1>
      </div>

      {/* Info Blocks */}
      <div className='px-8 sm:px-[15%] md:px-[20%] lg:px-[20%] flex flex-col'>
        <div className='flex w-full  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start uppercase'>
            <p className=''>Date</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
            <p className=''>Saturday 26 October 2024</p>
          </div>
        </div>
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p> Guest Arrival </p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
            <p className=''>11:00</p>
          </div>
        </div>
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p>Service Begins</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
            <p className=''>12:00</p>
            <p className=''>
              NB:{' '}
              <span className='underline font-bold'>
                Please arrive before 11h45am
              </span>{' '}
              to secure seating and ensure an interrupted church service.
            </p>
          </div>
        </div>
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p>Address</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
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
    </section>
  );
};

export default Schedule;
