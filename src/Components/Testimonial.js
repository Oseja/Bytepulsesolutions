import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
// Import Swiper React components
import user11 from '../assets/user11.webp'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import testiModule from '../All-CSS/Testimonial.module.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    return (
        <>
            <section id={testiModule.testimain} data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                <div className={testiModule.testimonials}>
                    <h1>Testimonials</h1>
                    <Swiper
                        c
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className={testiModule.mySwiper}
                    >
                        <SwiperSlide className={testiModule.SwiperSlide}>
                            <div className={testiModule.userOne}>
                                <img src={user11} alt="man" loading='lazy' className={testiModule.userImage} />
                                <h5>Tom</h5>
                                <p>"Sixty Seconds Logistics: Fast prices, faster service. They nail the best deals for our truck loads, keeping our business moving at full speed!"</p>
                                <span>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={testiModule.SwiperSlide}>
                            <div className={testiModule.userOne}>
                                <img src={user11} alt="man" loading='lazy' className={testiModule.userImage} />
                                <h5>Tom</h5>
                                <p>"Sixty Seconds Logistics: Fast prices, faster service. They nail the best deals for our truck loads, keeping our business moving at full speed!"</p>
                                <span>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                </span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className={testiModule.SwiperSlide}>
                            <div className={testiModule.userOne}>
                                <img src={user11} alt="man" loading='lazy' className={testiModule.userImage} />
                                <h5>Tom</h5>
                                <p>"Sixty Seconds Logistics: Fast prices, faster service. They nail the best deals for our truck loads, keeping our business moving at full speed!"</p>
                                <span>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                    <i className='fas fa-star'></i>
                                </span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
