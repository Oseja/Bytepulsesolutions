import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import ServiceStyle from '../All-CSS/ServiceHome.module.css'

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
    <h4 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Our <span>Services</span></h4>
      <Swiper
      data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"
        // slidesPerView={3}
        spaceBetween={10}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className={ServiceStyle.mySwiper}
        breakpoints={{
          390:{
            slidesPerView: 1
          },
          750: {
            slidesPerView: 2
          },
        }}
      >
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
       <Link to="/Creative-Design">
       <div className={ServiceStyle.CardOne}>
        <h1>Creative Designs</h1>
              <p>Whether you need a complete rebranding or just a few design assets, we are here to help you bring your ideas to life. From logo design to branding, packaging design, and marketing collateral, we've got you covered with our stunning visuals.</p>
        </div>
       </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
       <Link to="/Web-Development">
       <div className={ServiceStyle.CardTwo}>
        <h1>Web Development</h1>
              <p>By taking a user-centric approach to building responsive, engaging, and fluid websites, we can meet your business objectives. We specialize in web design, e-commerce development, CMS development, website maintenance, and website optimization.</p>
        </div>
       </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
       <Link to="/Digital-Marketing">
       <div className={ServiceStyle.CardThree}>
        <h1>Digital Marketing</h1>
              <p>With a comprehensive range of digital marketing services, including SEO, social media marketing and management, PPC advertising, email marketing, content marketing, and more, we help you reach your target audience and achieve business goals.</p>
        </div>
       </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
        <Link to="/App-Development">
        <div className={ServiceStyle.CardFour}>
        <h1>App Development</h1>
              <p>We work with the latest technologies to create mobile apps that are responsive, user-friendly, and visually appealing. We also offer custom mobile app development services, so you can create a unique and innovative app that meets your business needs.</p>
        </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
        <Link to="Video-Animation">
        <div className={ServiceStyle.CardFive}>
        <h1>Video Production</h1>
              <p>By creating a customized video production plan that meets your specific needs and goals, we ensure that your videos are engaging, visually appealing, and of the highest quality. Utilize our video editing services for a polished and professional look and feel.</p>
        </div>
        </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
       <Link to="Content-Writing">
       <div className={ServiceStyle.CardSix}>
        <h1>Content Writing</h1>
              <p>By adopting a reader-focused strategy in crafting compelling and versatile content, we are committed to achieving your communication goals. Our expertise lies in content creation, copywriting, SEO content optimization, blog management, and content strategy development.</p>
        </div>
       </Link>
        </SwiperSlide>
        <SwiperSlide className={ServiceStyle.SwiperSlide}>
       <Link to="Cyber-Security">
       <div className={ServiceStyle.CardSeven}>
        <h1>Cyber Security</h1>
              <p>Embracing a proactive stance towards safeguarding your digital assets, we specialize in comprehensive cybersecurity solutions tailored to your protection needs. Our proficiency spans threat detection, vulnerability assessments, penetration testing, security awareness training, and incident response planning.</p>
        </div>
       </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

