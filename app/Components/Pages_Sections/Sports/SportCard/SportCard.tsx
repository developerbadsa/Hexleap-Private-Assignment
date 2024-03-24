import Image from 'next/image';
import React from 'react';

const SportCard = ({cardData}) => {
   const {title, image, totalEvent, sport} = cardData;
   return (
      <div className='bg-white dark:bg-[#3B3E47] p-2 shadow-lg  dark:text-white'>
         <Image
            alt=''
            className='w-full'
            src={image}
            width={218}
            height={385}></Image>
         <h4 className='my-2 text-lg font-medium'>{title}</h4>
         <div className=' p-2 flex bg-[#F7F7F8] dark:bg-[#292B32] gap-2 justify-between'>
            <div>
               <span className='text-[#525965] dark:text-[#DFDFDF] text-xs leading-3 '>
                  total events
               </span>
               <div className='text-sm '>{totalEvent}</div>
            </div>
            <div className=''>
               <span className='text-[#525965] dark:text-[#DFDFDF] text-xs leading-3 '>
                  sport
               </span>
               <div className='text-sm'>{sport}</div>
            </div>
         </div>
      </div>
   );
};

export default SportCard;
