import 'swiper/swiper-bundle.css';
import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

const DressGallery: React.FC = () => {
  // Array of different image sizes
  const images = [
    'https://picsum.photos/400/500',
    'https://picsum.photos/300/400',
    'https://picsum.photos/450/300',
    'https://picsum.photos/500/600',
    'https://picsum.photos/350/450',
    'https://picsum.photos/600/500',
    'https://picsum.photos/400/600',
    'https://picsum.photos/450/450',
  ];

  return (
    <div className='w-full p-4'>
      {/* Swiper Slider */}
      <Swiper
        navigation={true} // Enable navigation
        pagination={{ clickable: true }} // Enable pagination
        modules={[Navigation, Pagination]} // Add modules
        className='mySwiper'
        spaceBetween={10}
        loop
        slidesPerView={1}
        breakpoints={{
          640: {
            // For small devices
            slidesPerView: 1,
          },
          768: {
            // For medium devices
            slidesPerView: 2,
          },
          1024: {
            // For large devices
            slidesPerView: 3,
          },
        }} // Change this to adjust the number of slides shown at once
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className='h-[60vh] mg:h-[70vh] object-cover'>
              <Image
                src={src}
                alt={`Gallery item ${idx + 1}`}
                width={400} // Set a standard width
                height={500}
                quality={100}
                unoptimized // Set a standard height
                className='min-w-full h-full object-cover rounded-lg shadow-lg'
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DressGallery;
