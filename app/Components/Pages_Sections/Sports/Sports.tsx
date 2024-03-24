'use client'
import React from 'react';
import SportCard from './SportCard/SportCard';
import SportsAdCard from './SportsAd/SportsAdCard';
import SectionBtn from '../../Shared/Buttons/SectionBtn';
import DarkModeButton from '../../Shared/DarkMode/DarkModeToogle';

const Sports = () => {
   const sportCardDatas = [
      {  
         id:1,
         title: 'Sacramento River Cats',
         image: 'https://i.ibb.co/MRRx7tW/277307281-10158751675643224-148609460173032344-n.png',
         totalEvent: '48 Events',
         sport: 'Baseball'
      },
      {
         id: 2,
         title: 'Las Vegas Aviators',
         image: 'https://i.ibb.co/jhDYm0g/370265821-812394460893172-8391088016650457893-n-1.png',
         totalEvent: '28 Events',
         sport: 'Baseball'
      },
      {
         id: 3,
         title: 'New jersey devils',
         image: 'https://i.ibb.co/rQ25mG0/395319316-1098948761258832-1320994362450036961-n-1.png',
         totalEvent: '15 Events',
         sport: 'Baseball'
      },
      {
         id:4,
         title: 'Las Vegas Aviators',
         image: 'https://i.ibb.co/jhDYm0g/370265821-812394460893172-8391088016650457893-n-1.png',
         totalEvent: '28 Events',
         sport: 'Baseball'
      }
   ];

   return (
      <section className='px-2 mt-6 '>
         {/* Heading of Sport Section */}
         <div className='flex justify-between pb-4 pt-6'>
            <h3 className='border-b-2 inline mb-7 border-b-sky-600 py-1 font-bold text-2xl dark:text-white'>
               Sports
            </h3>
            <div>
               <DarkModeButton></DarkModeButton>
            </div>
         </div>
         {/*sport cards */}
         <div className='grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 gap-5 mt-6 justify-center'>
            {sportCardDatas.map(( cardData, inx) => (  <SportCard key={inx} cardData={cardData}></SportCard>
            ))}
            <SportsAdCard></SportsAdCard>
         </div>
         <div className='text-center mt-10'>
            <SectionBtn btnText={'See More'}></SectionBtn>
         </div>
      </section>
   );
};

export default Sports;
