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
                <title>BYTEPULSE SOLUTION - Digital-Marketing</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Digital-Marketing' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Digital <br /> Marketing</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">As a leading digital marketing agency, we understand the power of digital marketing and offer a comprehensive range of digital marketing services to help businesses thrive online. We provide end-to-end digital marketing solutions that deliver measurable results. Trust us to be your partner in your digital marketing journey and take your business to new heights.</p>
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
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Convert your potentials into customers, one lead at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Converting ad viewers into potentials and ultimately customers is the end goal for any business. At our digital marketing agency, we understand that it takes more than just getting traffic to your website to achieve this.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/04/Artboard-1-copy-5-1.png" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
