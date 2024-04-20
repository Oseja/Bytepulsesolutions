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
                <title>BYTEPULSE SOLUTION - Web-Development</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Web-Development' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Web <br /> Development</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">As a leading web design company, we understand the importance of a strong online presence in today’s digital landscape. That’s why we provide end-to-end web development solutions that enable our clients to establish a robust online presence and drive revenue growth.</p>
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
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Revamping your online presence, one click at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">At Outsource to Asia, we believe that your website is the window to your business. It's the first impression that your potential customers will have about your brand. That's why we strive to create websites that leave a lasting impression on your audience. Our team of expert web developers and designers works closely with you to understand your business needs and design a website that reflects your brand identity, values, and goals.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/04/Artboard-1-copy-4-1.png" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
