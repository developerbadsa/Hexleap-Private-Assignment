import Image from 'next/image';
import React from 'react';

const CollectionSportlightCard = ({cardData}) => {
   const {title, date, location, image} = cardData;

   return (
      <div className='bg-[#fff] dark:bg-[#3B3E47] border py-2 shadow-lg h-[430px] md:h-[630px] relative'>
         <div className=' '>
            <Image
               alt=''
               className='w-full h-[230px] md:h-[430px]'
               src={image}
               width={218}
               height={0}></Image>
         </div>
         {/* Divider */}
         <div className='p1 border-b-[3px] border-b-gray-300 border-dashed relative mb-5'>
            <div className='bg-[#F7F7F8] dark:bg-[#201e2c] p-4 h-6 w-6 rounded-full absolute -bottom-5 -left-4'></div>
            <div className='bg-[#F7F7F8] dark:bg-[#201e2c] p-4 h-6 w-6 rounded-full absolute -bottom-5 -right-4'></div>
         </div>
         <div className='text-center px-4 bottom-0 xs:left-0 md:left-0 absolute text-black dark:text-white'>
            <h5 className='my-2 text-lg  font-medium'>{title}</h5>
            <div className='text-sm'>{date}</div>
            <p className=' flex justify-center text-sm text-[#525965] dark:text-[#DFDFDF] mt-2 '>
               {location}
            </p>
            <button className='px-1 sm:px-12 text-xs py-3 dark:bg-black my-3 '>
               Take Flight Collection
            </button>
         </div>
      </div>
   );
};

export default CollectionSportlightCard;
