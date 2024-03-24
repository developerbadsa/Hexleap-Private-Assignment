import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import SportLightSlider from './SportLightSlider/SportLightSlider';

const CollectionSpotlight = () => {
   return (
      <section className='mt-8 py-12 dark:bg-gradient-to-t from-[#221A2C] to-[#18282A] flex flex-col justify-between text-black dark:text-white'>
         {/* Heading */}
         <div className='text-center px-4 md:px-28'>
            <SectionHeading
               headingText={'Collection Spotlight'}></SectionHeading>
            <p className='text-sm py-4 leading-5 md:px-10 text-black dark:text-white'>
               Discover extraordinary moments with our Spotlight Collection
               metatickets—exclusive access to premium events for an
               unforgettable experience. Grab yours today!
            </p>
         </div>
         {/* cards */}
         <div className='mt-12'>
            <SportLightSlider></SportLightSlider>
         </div>
      </section>
   );
};

export default CollectionSpotlight;
