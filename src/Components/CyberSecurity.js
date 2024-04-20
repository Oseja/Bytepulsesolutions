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
                <title>BYTEPULSE SOLUTION - Cyber-Security</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Cyber-Security' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy-6.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Cyber
                            <br /> Security</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">At our cyber security company, we take the security of your business seriously. Our top priority is ensuring the safety of your data and network from any potential threats. With our team of experts and advanced security technologies, you can rest assured that your business is in safe hands.</p>
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
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Stand tall against threats, one malware at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">In a world where data is a premium commodity, it's important to keep your sensitive information safe and secure from prying eyes. Cyber threats and malware attacks can come at any time, and without proper protection, your business could be at risk. Our team of experienced professionals provides top-notch malware analysis, penetration testing, and threat management services to ensure that your business stays safe from the latest cyber-attacks.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/04/Artboard-1-copy-2-1.png" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
