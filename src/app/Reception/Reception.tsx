import Image from 'next/image';
import React from 'react';

const Reception: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center my-[4rem] overflow-x-hidden'>
      {/* Reception Details */}
      <div className='w-full px-8 font-canela font-thin text-gray-700 text-[2.5rem] md:text-[3.9rem] lg:text-[4.5rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[0%] '>Reception</h1>
        <h1 className='transform translate-x-[20%]'>Details</h1>
      </div>

      {/* Info Blocks */}
      <div className='w-full px-8 lg:px-[4rem] flex flex-col lg:flex-row'>
        <div className='lg:w-[60%]'>
          <div className='flex mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start uppercase'>
              <p className=''>Time</p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>15:00 (No earlier)</p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start uppercase'>
              <p>Address</p>
            </div>
            <div className='flex-1 font-canela font-light  text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>Plot 16, Boschkop Road</p>
              <p className=''>Makotopong Estate</p>
              <button
                className='w-full max-w-[20rem] mt-4 px-6 py-2 border border-gray-500 text-gray-500 font-calibri text-[1rem] md:text-[1.4rem] hover:bg-orange-600 hover:text-white transition duration-300'
                onClick={() =>
                  window.open(
                    'https://maps.app.goo.gl/2AoMeZ7mzbDqr2Gd9',
                    '_blank'
                  )
                }
              >
                MAP
              </button>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start uppercase'>
              <p> Shuttle Service </p>
            </div>
            <div className='flex-1 font-canela font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>The Capital Hotel Menlyn Maine (Optional)</p>
              <p>
                <span className='font-bold'>Address: </span> 194 Bancor Avenue,
                Menlyn,Pretoria
              </p>
              <p>
                <span className='font-bold'>Distance from church: </span> 3.4km
                – 4.4 km
              </p>
              <p>
                There is a shuttle service available to transport guests to and
                from The Reception Venue at designed times which will be shared
                at a later stage
              </p>
              <p>
                Guests who wish to use their own personal vehicles to transport
                themselves are more than happy do so.
              </p>
            </div>
          </div>
          <div className='flex mb-4'>
            <div className='w-1/3 md:w-1/3 font-calibri text-gray-700 text-[0.7rem] md:text-[1.1rem] leading-[2rem] flex items-start uppercase'>
              <p>Parking/Security</p>
            </div>
            <div className='flex-1 font-canela font-light text-gray-700 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
              <p className=''>
                There will be hired security onsite at the Reception Venue
              </p>
              <p>
                Guests who will be driving their vehicles to the Reception Venue
                will be required to sign an Indemnity Form for themselves and
                their vehicles.
              </p>
            </div>
          </div>
        </div>

        {/* Reception Venue Imaae */}
        <div className='w-full max-w-[20rem] h-[20rem] mx-auto lg:my-auto mt-[5rem] flex items-center justify-center'>
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

export default Reception;
