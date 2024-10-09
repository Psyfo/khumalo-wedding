import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center bg-weddingPink px-8 md:px-[20%] '>
      {/* Church Service */}
      <div className='font-brandon  text-gray-700 text-[2.5rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[-50%] '>Church</h1>
        <h1 className=''>Service</h1>
      </div>

      {/* Info Blocks */}
      <div className='flex w-full lg:w-[60%] mb-4'>
        <div className='w-[8rem] font-brandon text-gray-700 text-[0.6rem] lg:text-[0.8rem] leading-[2rem] flex items-start uppercase'>
          <p className=''>Date</p>
        </div>
        <div className='flex-1 font-calibri text-gray-500 text-[1rem] lg:text-[1.4rem] leading-[2rem] '>
          <p className=''>Saturday 26 October 2024</p>
        </div>
      </div>
      <div className='flex w-full lg:w-[60%] mb-4'>
        <div className='w-[8rem] font-brandon text-gray-700 text-[0.6rem] lg:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
          <p> Guest Arrival </p>
        </div>
        <div className='flex-1 font-calibri text-gray-500 text-[1rem] lg:text-[1.4rem] leading-[2rem] '>
          <p className=''>11:00</p>
        </div>
      </div>
      <div className='flex w-full lg:w-[60%] mb-4'>
        <div className='w-[8rem] font-brandon text-gray-700 text-[0.6rem] lg:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
          <p>Service Begins</p>
        </div>
        <div className='flex-1 font-calibri text-gray-500 text-[1rem] lg:text-[1.4rem] leading-[2rem]'>
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
      <div className='flex w-full lg:w-[60%] mb-4'>
        <div className='w-[8rem] font-brandon text-gray-700 text-[0.6rem] lg:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
          <p>Address</p>
        </div>
        <div className='flex-1 font-calibri text-gray-500 text-[1rem] lg:text-[1.4rem] leading-[2rem] '>
          <p className=''>St John Fisher Catholic Church</p>
          <p className=''>321 Border Road East</p>
          <p className=''>Pretoria, GP</p>
        </div>
      </div>

      {/* Reception */}
      {/* <div className='font-brandon  text-gray-700 text-[2.5rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[-50%] '>Reception</h1>
        <h1 className=''>Venue</h1>
      </div> */}

      {/* Info Blocks */}
      {/* <div className='flex w-full lg:w-[60%] mb-4'>
        <div className='w-[8rem] font-brandon text-gray-700 text-[0.6rem] lg:text-[0.8rem] leading-[2rem] flex items-start uppercase'>
          <p className=''>Time</p>
        </div>
        <div className='flex-1 font-calibri text-gray-500 text-[1rem] lg:text-[1.4rem] leading-[2rem] '>
          <p className=''>15:00 (No earlier)</p>
        </div>
      </div> */}
    </section>
  );
};

export default Schedule;
