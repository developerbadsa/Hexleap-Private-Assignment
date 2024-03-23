import Image from 'next/image';
import React from 'react';

const SportCard = () => {
   return (
      <div className='bg-white p-2 shadow-lg'>
         <Image
            alt=''
            src={
               'https://i.ibb.co/MRRx7tW/277307281-10158751675643224-148609460173032344-n.png'
            }
            width={218}
            height={385}></Image>
         <h4 className='my-2 text-lg text-black font-medium'>
            Sacromento River Cats
         </h4>
         <div className=' p-2 flex bg-[#F7F7F8] gap-2 justify-between'>
            <div>
               <span className=' text-[#525965] text-xs leading-3'>
                  total events
               </span>
               <div className='text-sm text-black'>48 Events</div>
            </div>
            <div className=''>
               <span className=' text-[#525965] text-xs leading-3'>sport</span>
               <div className='text-sm text-black'>baseball</div>
            </div>
         </div>
      </div>
   );
};

export default SportCard;
