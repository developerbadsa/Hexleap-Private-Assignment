import Image from 'next/image';
import React from 'react';

const CollectionSportlightCard = ({cardData}) => {

   const {title, date, location, image} = cardData;

   console.log(cardData)

   return (
      <div className='bg-[#fff] border py-2 shadow-lg'>
         <div className=' '>
            <Image
               alt=''
               className='w-full'
               src={'https://i.ibb.co/vvqXxRL/Ticket-Mockup-3-1.png'}
               width={218}
               height={0}></Image>
         </div>
         {/* Divider */}
         <div className='p1 border-b-[3px] border-b-gray-300 border-dashed relative mb-5'>
            <div className='bg-[#F7F7F8] p-4 h-6 w-6 rounded-full absolute -bottom-5 -left-4'></div>
            <div className='bg-[#F7F7F8] p-4 h-6 w-6 rounded-full absolute -bottom-5 -right-4'></div>
         </div>
         <div className='text-center'>
            <h5 className='my-2 text-lg text-black font-medium'>
               Las Vegas Aviators
            </h5>
            <div className='text-sm'>Oct 15 | Sun | 4:30 PM</div>
            <p className=' text-sm text-[#525965] mt-2'>
               Las Vegas Ballpark, Las Vegas, Nevada
            </p>
            <button className='px-12 text-white text-xs py-3 bg-black my-3'>
               Take Flight Collection
            </button>
         </div>
      </div>
   );
};

export default CollectionSportlightCard;
