import React from 'react';
import SportCard from './SportCard/SportCard';
import SportsAdCard from './SportsAd/SportsAdCard'

const Sports = () => {

  const sportCardDatas = [1,2,3,4]

   return (
      <section className='px-2 mt-6'>
        {/* Heading of Sport Section */}
         <h3 className='border-b-2 inline mb-7 border-b-sky-600 py-1 font-bold text-2xl'>Sports</h3>

         {/*sport cards */}
         <div className='grid grid-cols-5 gap-5 mt-6'>
          {
             sportCardDatas.map((inx, cardData)=><SportCard key={inx}></SportCard>)
          }
          <SportsAdCard></SportsAdCard>
         </div>
      </section>
   );
};

export default Sports;
