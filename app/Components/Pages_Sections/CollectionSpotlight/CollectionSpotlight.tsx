import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';
import CollectionSportlightCard from './CollectionSportlightCard/CollectionSportlightCard';
import SportLightSlider from './SportLightSlider/SportLightSlider';
// import SportLightSlider from './SportLightSlider/SportLightSlider'

const CollectionSpotlight = () => {
   return (
      <section className='mt-8 py-12  flex flex-col justify-between'>
         {/* Heading */}
         <div className='text-center px-4 md:px-28'>
            <SectionHeading
               headingText={'Collection Spotlight'}></SectionHeading>
            <p className='text-sm py-4 leading-5 md:px-10'>
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
