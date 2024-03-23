import React from 'react';
import SectionHeading from '../../Shared/SectionHeading/SectionHeading';

const CollectionSpotlight = () => {
   return (
      <section className='mt-8 py-12 px-28'>
        {/* Heading */}
         <div className='text-center '>
            <SectionHeading 
               headingText={'Collection Spotlight'}></SectionHeading>
            <p className='text-sm py-4 leading-5 px-10'>
               Discover extraordinary moments with our Spotlight Collection
               metatickets—exclusive access to premium events for an
               unforgettable experience. Grab yours today!
            </p>
         </div>
         
      </section>
   );
};

export default CollectionSpotlight;
