'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

/* eslint-disable react-hooks/exhaustive-deps */

const Synopsis: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className='flex flex-col justify-center md:flex-row gap-8 lg:gap-16 py-24 px-8'
    >
      <div className='lg:max-w-[25rem]'>
        <motion.h3
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.5 }}
          className='font-brandon font-bold uppercase text-gray-700 text-[1.2rem] lg:text-[1.5rem]'
        >
          Zamani Khumalo
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri text-gray-400 text-[1rem] lg:text-[1.2rem] text-justify'
        >
          Ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
          feugiat, molestie ipsum id, fermentum nunc. Nulla facilisi. Nullam nec
          nisi. Donec quis turpis in nulla iaculis venenatis. Vivamus at sapien.
          Morbi ornare, libero. Lorem ipsum dolor sit amet, consectetur. Nulla.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla nec purus feugiat.
        </motion.p>
      </div>
      <div className='lg:max-w-[25rem]'>
        <motion.h3
          initial={{ opacity: 0, y: -20 }} // Start hidden and slightly above
          animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate to visible
          transition={{ duration: 0.5 }}
          className='font-brandon font-bold uppercase text-gray-700 text-[1.2rem] lg:text-[1.5rem]'
        >
          Palesa Lebona
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }} // Start hidden
          animate={isVisible ? { opacity: 1 } : {}} // Animate to visible
          transition={{ duration: 0.5, delay: 0.5 }} // Delay for paragraph
          className='font-calibri text-gray-400 text-[1rem] lg:text-[1.2rem] text-justify'
        >
          Ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus
          feugiat, molestie ipsum id, fermentum nunc. Nulla facilisi. Nullam nec
          nisi. Donec quis turpis in nulla iaculis venenatis. Vivamus at sapien.
          Morbi ornare, libero. Lorem ipsum dolor sit amet, consectetur. Nulla.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec
          purus feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nulla nec purus feugiat.
        </motion.p>
      </div>
    </section>
  );
};

export default Synopsis;
