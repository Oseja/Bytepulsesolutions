import React, { useEffect } from 'react'
import SLS from '../assets/SLS.png'
import adzum from '../assets/adzum.png'
import acordis from '../assets/Acordis.png'
import beyondant from '../assets/beyondant.png'
import hustle from '../assets/hustle.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import brandStyle from '../All-CSS/Brands.module.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Swiper
      data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={brandStyle.Swiper}
      >
        <SwiperSlide className={brandStyle.Slidee}><img src={adzum} alt="" className={brandStyle.swiperImage} /></SwiperSlide>
        <SwiperSlide className={brandStyle.Slidee}><img src={beyondant} alt="" className={brandStyle.swiperImage} /></SwiperSlide>
        <SwiperSlide className={brandStyle.Slidee}><img src={SLS} alt="" className={brandStyle.swiperImage} /></SwiperSlide>
        <SwiperSlide className={brandStyle.Slidee}><img src={acordis} alt="" className={brandStyle.swiperImage} /></SwiperSlide>
        <SwiperSlide className={brandStyle.Slidee}><img src={hustle} alt="" className={brandStyle.swiperImage} /></SwiperSlide>
      </Swiper>
    </>
  );
}
