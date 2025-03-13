import React, { useEffect } from 'react'
import '../All-CSS/Home.css'
import Testimonial from './Testimonial'
import ServiceHome from './ServiceHome'
import Brands from './Brands'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'


export default function Home() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Helmet>
        <title>BYTEPULSE SOLUTION - Home</title>
        <meta name="description" content="IT Services Providers" />
        <link rel='canonical' href='/' />
      </Helmet>
      <section>
        <div className="bannerSection">
          <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img src="https://img.freepik.com/free-vector/company-providing-management-training-office-space-business-incubator-business-training-programs-shared-administrative-service-concept_335657-2152.jpg?t=st=1741904896~exp=1741908496~hmac=162313182eb4c355dead258abd34720b69a23b244c9d0e717d7b71377c5946cf&w=996" alt="Banner Image" />
          </div>
          <div className="bannerRightContent">
            <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Your Partners For</h1>
            <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Digital Supremacy</span>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We are a full-service outsourcing agency crafting ingenious digital experiences that power startups, scale-up corporations. and bring digital transformation to family businesses.</p>
          </div>
        </div>
      </section>
      <section>
        <div className="heroSwiper">
          <Brands/>
        </div>
      </section>

      <div className="seperation"></div>
      <section>
        <div className="Choose-Main" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h1>Why Choose <br /><span>BYTEPULSE SOLUTION</span></h1>
          <div className="CardMain">
            <div className="CardOne">
              <h1>A Wide Array of Services
                Provided Under One Roof</h1>
              <p>With an extended portfolio, our team has worked with various clients on projects consisting of app development, digital marketing such as SEO, social media marketing, lead generation, video animations, content development, etc. We are a custom web development company with a key focus on providing a smooth and steady customer experience that is second to none. Your partnership with us is something we cherish with a track record of being an established customer-centric firm. Let this be the start of something truly remarkable!</p>
              <div className="Card-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                <Link to="/Contact"><button >Get Started &gt;</button></Link>
              </div>
            </div>
            <div className="CardTwo">
              <h1>An Awe-inspiring Digital
                Agency Experience</h1>
              <p>We’re a cluster of young, energetic, and innovative minds that go above and beyond to solve your problems. We develop eye-catching websites, engaging content, strategize distinctive campaigns, and help companies expand by turning followers into customers. We’ve established a plethora of success stories by assisting brands in growing their businesses online. Working with us means collaborating with a group of articulate writers, tech geeks, and visionary minds who will assist you in increasing lead generation, sales prospects, and revenue.</p>
              <div className="Card-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                <Link to="/Contact"><button >Get Started &gt;</button></Link>
              </div>
            </div>
            <div className="CardThree">
              <h1>High-Quality Services Paired With Seamless Customer Support</h1>
              <p>We are best known for meeting our deadlines efficiently and helping brands reach their full potential. Our projects are always accomplished within time, with no compromises on quality. We have a strong quality control procedure in place to guarantee that everything we deliver meets and even exceeds the expectations of our clients. Our customer support team works around the clock for flawless communication with both prospects and existing clients. You can rest assure that you’re going to have a dedicated accounts manager, no matter the project!</p>
              <div className="Card-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                <Link to="/Contact"><button >Get Started &gt;</button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="seperation m-10"></div>
      <ServiceHome/>
      <div className="seperation m-10"></div>
      <Testimonial />
    </>
  )
}
