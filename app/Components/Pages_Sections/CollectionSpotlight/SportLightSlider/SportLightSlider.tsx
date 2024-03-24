'use client'
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import CollectionSportlightCard from '../CollectionSportlightCard/CollectionSportlightCard';

export default function SportLightSlider() {

const sportLightCardData = [
  {
    title:'Las Vegas Aviators',
    date: 'Oct 15 | Sun | 4:30 PM',
    location: 'Las Vegas Ballpark, Las Vegas, Nevada',
    image: 'https://i.ibb.co/vvqXxRL/Ticket-Mockup-3-1.png'
  },
  {
    title:'Sacramento River Cats',
    date: 'Oct 15 | Sun | 4:30 PM',
    location: 'Sutter Health Park, Sacramento, California',
    image:'https://i.ibb.co/YPrJSP5/unnamed-1.png'
  },
  {
    title:'Las Vegas Aviators',
    date: 'Oct 15 | Sun | 4:30 PM',
    location: 'Las Vegas Ballpark, Las Vegas, Nevada',
    image:'https://i.ibb.co/vvqXxRL/Ticket-Mockup-3-1.png'
  },
  {
    title:'Sacramento River Cats',
    date: 'Oct 15 | Sun | 4:30 PM',
    location: 'Sutter Health Park, Sacramento, California',
    image:'https://i.ibb.co/YPrJSP5/unnamed-1.png'
  },

]


  return (
    <>
      <Swiper slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper mx-32">
        {
          sportLightCardData.map((cardData,inx)=> <SwiperSlide key={inx}><CollectionSportlightCard cardData={cardData}></CollectionSportlightCard></SwiperSlide>)
        }
      </Swiper>
    </>
  );
}
