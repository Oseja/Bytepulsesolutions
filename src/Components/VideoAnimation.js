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
                <title>BYTEPULSE SOLUTION - Video-Animation</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Video-Animation' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy-5.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Video
                            <br /> Production</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Video production that can help take your brand to the next level! Our video production service creates inspiring and captivating animated videos that tell your unique story. As a top video production company, we specialize in creating explainer videos, corporate videos, and brand videos that showcase your business in the best possible light.</p>
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
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            Convert your viewers into admirers, one frame at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Are you looking for a way to make your brand stand out in a crowded market? Do you want to capture your audience's attention and hold it? Look no further than our video animation services. Why settle for mediocre video content when you can have a masterpiece? With each frame, we work to tell your brand's story in a way that resonates with your audience and leaves a lasting impression.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/04/00.png" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
