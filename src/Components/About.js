import React, { useEffect, useState } from 'react'
import '../All-CSS/About.css'
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function About(props) {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>BYTEPULSE SOLUTION - About</title>
        <meta name="description" content="IT Services Providers" />
        <link rel='canonical' href='/About' />
      </Helmet>
      <section>
        <div className="bannerSection">
          <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img src="https://img.freepik.com/free-vector/young-man-with-shield-against-criminal-conspiracy-thief-man-black-mask-with-sword-protection-idea-software-access-data-as-confidential-flat-illustration_1150-39292.jpg?ga=GA1.1.1309752824.1741904808&semt=ais_authors_boost" alt="Banner Image" />
          </div>
          <div className="bannerRightContent">
            <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Who
              <br /> We Are</span>
            <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><span>Your Partners For</span> Innovative Web Design And Development</h4>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We are a team of experts in creative and digital services with a passion for helping businesses succeed. Our mission is to deliver innovative and effective solutions to our clients through a combination of creativity, technology, and strategic thinking. With years of experience and a deep understanding of the ever-evolving digital landscape, we are committed to staying at the forefront of the industry and providing our clients with the most effective solutions possible.
              <br /> <br />
              At our core, we believe that every business has a unique story and deserves a custom approach. That’s why we work closely with our clients to understand their goals, challenges, and target audience, and develop tailored strategies that deliver measurable results.</p>
          </div>
        </div>
      </section>
      <div className="seperation"></div>
    </>
  )
}
