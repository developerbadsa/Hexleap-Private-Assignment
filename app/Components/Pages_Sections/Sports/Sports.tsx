import React from 'react';
import SportCard from './SportCard/SportCard';
import SportsAdCard from './SportsAd/SportsAdCard'
import SectionBtn from '../../Shared/Buttons/SectionBtn';

const Sports = () => {

  const sportCardDatas = [1,2,3,4]

   return (
      <section className='px-2 mt-6'>
        {/* Heading of Sport Section */}
         <h3 className='border-b-2 inline mb-7 border-b-sky-600 py-1 font-bold text-2xl'>Sports</h3>
         {/*sport cards */}
         <div className='grid lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 gap-5 mt-6 justify-center'>
          {
             sportCardDatas.map((inx, cardData)=><SportCard key={inx}></SportCard>)
          }
          <SportsAdCard></SportsAdCard>
         </div>
         <div className='text-center mt-10'>
         <SectionBtn btnText={'See More'}></SectionBtn>
         </div>
      </section>
   );
};

export default Sports;
