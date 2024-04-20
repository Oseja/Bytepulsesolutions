import React from 'react'
import { Helmet } from 'react-helmet';
import '../All-CSS/Skills.css'
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
import creativeban from '../assets/creative-design-banImage.webp'
export default function CreativeDesign() {
    return (
        <>
            <Helmet>
                <title>BYTEPULSE SOLUTION - Creative-Design</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Creative-Dsign' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy-3.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Creative <br /> Designing</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">When it comes to creative designing, our focus is on delivering exceptional results that go beyond your expectations. Whether you’re looking for a logo design, brand design, or brand overhaul, our team has got you covered.</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="ban">
                    <img src={creativeban} alt="" />
                </div>
            </section>
            <section>
                <div className="midSection">
                    <div className="midRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Designing your success, one pixel at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">At Outsource to Asia, we understand that the success of your business is paramount. That's why we focus on delivering designs that are not only visually stunning but also optimized for performance and user experience. Our team of experts has an eye for detail and pays attention to even the smallest pixels to ensure that the final design is flawless. We believe that each pixel is important and contributes to the overall success of the design.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/04/0.png" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
