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
  return (
    <>
      <Swiper slidesPerView={3} navigation={true} modules={[Navigation]} className="mySwiper mx-32">
        <SwiperSlide><CollectionSportlightCard></CollectionSportlightCard></SwiperSlide>
        <SwiperSlide><CollectionSportlightCard></CollectionSportlightCard></SwiperSlide>
        <SwiperSlide><CollectionSportlightCard></CollectionSportlightCard></SwiperSlide>
        <SwiperSlide><CollectionSportlightCard></CollectionSportlightCard></SwiperSlide>
        <SwiperSlide><CollectionSportlightCard></CollectionSportlightCard></SwiperSlide>
      </Swiper>
    </>
  );
}
