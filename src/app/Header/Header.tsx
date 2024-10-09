'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  // Animation variants for the background
  const backgroundVariants = {
    hidden: { y: '100%' }, // Start from below the screen
    visible: { y: '0%', transition: { duration: 1 } }, // Slide up to its position
  };

  // Animation variants for text
  const textVariants = {
    hidden: { opacity: 0, y: 50 }, // Start below the screen with opacity 0
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3 + 0.5, duration: 0.5 }, // Adding extra delay
    }),
  };

  return (
    <div className='relative w-screen h-screen overflow-hidden'>
      {/* Background Image */}
      <motion.div
        initial='hidden'
        animate='visible'
        variants={backgroundVariants}
        className='absolute top-0 left-0 w-full h-full bg-cover bg-center'
        style={{ backgroundImage: "url('/images/header/header.webp')" }}
      />

      {/* Text Container */}
      <div className='relative flex flex-col justify-center items-center h-full'>
        <motion.h1
          initial='hidden'
          animate='visible'
          variants={textVariants}
          custom={0} // Index for delay
          className='text-[2rem] md:text-[3rem] font-brandon font-bold text-white text-center leading-none uppercase flex gap-4 lg:gap-8'
        >
          <span>Zamani</span>
          <Image
            src='/images/header/and.svg'
            width='100'
            height='100'
            className='w-auto h-[2rem] md:h-[3rem]'
            alt='And'
          />
          <span>Palesa</span>
        </motion.h1>

        <motion.p
          initial='hidden'
          animate='visible'
          variants={textVariants}
          custom={1} // Index for delay
          className='text-[1.1rem] md:text-[1.5rem] text-white text-center font-brandon mt-4'
        >
          Are Getting Married, October 26, 2024
        </motion.p>
      </div>
    </div>
  );
};

export default Header;
