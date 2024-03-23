import Image from 'next/image';
import React from 'react';

const SportsAdCard = () => {
  return (
    <div className='bg-white p-2 shadow-lg'>
      {/* image section */}
      <div className='relative'>
        <span className='absolute bg-black right-0 px-4 text-white'>Ad</span>
        <Image
          alt=''
          className='w-full'
          src={
            'https://i.ibb.co/CVBWFYM/unnamed-1-1.png'
          }
          width={218}
          height={385}></Image>
      </div>
      {/* Text Section */}
      <div className=' px-3'>
        <h4 className='mt-4 text-lg text-black font-medium text-center'>
          Advertisement title
        </h4>
        <span className='text-xs text-[#525965] leading-6'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
    </div>
  );
};

export default SportsAdCard;