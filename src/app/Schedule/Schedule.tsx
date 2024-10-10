import React from 'react';

const Schedule: React.FC = () => {
  return (
    <section className='w-screen flex flex-col items-center bg-weddingPink  '>
      {/* Church Service */}
      <div className='font-brandon  text-gray-700 text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] uppercase my-[4rem]'>
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
              className='w-full mt-4 px-6 py-2 border border-gray-500 text-gray-500 font-calibri text-[1rem] md:text-[1.4rem] rounded hover:bg-gray-100 transition duration-300'
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

      {/* Reception Details */}
      <div className='font-brandon  text-gray-700 text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] uppercase my-[4rem]'>
        <h1 className='transform translate-x-[-25%] '>Reception</h1>
        <h1 className='transform translate-x-[25%]'>Details</h1>
      </div>

      {/* Info Blocks */}
      <div className='px-8 sm:px-[15%] md:px-[20%] lg:px-[20%] flex flex-col'>
        <div className='flex w-full  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start uppercase'>
            <p className=''>Time</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
            <p className=''>15:00 (No earlier)</p>
          </div>
        </div>
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p>Address</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
            <p className=''>Plot 16, Boschkop Road</p>
            <p className=''>Makotopong Estate</p>
            <button
              className='w-full mt-4 px-6 py-2 border border-gray-500 text-gray-500 font-calibri text-[1rem] md:text-[1.4rem] rounded hover:bg-gray-100 transition duration-300'
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
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p> Shuttle Service </p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem] '>
            <p className=''>The Capital Hotel Menlyn Maine (Optional)</p>
            <p>
              <span className='font-bold'>Address: </span> 194 Bancor Avenue,
              Menlyn,Pretoria
            </p>
            <p>
              <span className='font-bold'>Distance from church: </span> 3.4km –
              4.4 km
            </p>
            <p>
              There is a shuttle service available to transport guests to and
              from The Reception Venue at designed times which will be shared at
              a later stage
            </p>
            <p>
              Guests who wish to use their own personal vehicles to transport
              themselves are more than happy do so.
            </p>
          </div>
        </div>
        <div className='flex  mb-4'>
          <div className='w-1/3 md:w-1/2 font-brandon text-gray-700 text-[0.6rem] md:text-[0.8rem] leading-[2rem] flex items-start  uppercase'>
            <p>Parking/Security</p>
          </div>
          <div className='flex-1 font-calibri text-gray-500 text-[1rem] md:text-[1.4rem] leading-[2rem]'>
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
    </section>
  );
};

export default Schedule;
