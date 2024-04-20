import React, {useEffect} from 'react'
import '../All-CSS/Services.css';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Services() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);

  return (
  <>
  <Helmet>
    <title>Sixty Seconds Logistics LLC - Services</title>
        <meta name="description" content="Truck Logistic Company" />
        <link rel='canonical' href='/Services'/>
    </Helmet>
    <section>
        <div className="bannerSection">
          <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img src="https://www.reshot.com/preview-assets/illustrations/F7S5G9VKH4/web-designer-at-work-F7S5G9VKH4-w1600.jpg" alt="Banner Image" />
          </div>
          <div className="bannerRightContent">
            <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">We Are</span>
            <h4 data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000"><span>Next Leve</span> Service Provider</h4>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">At BytePulse Solutions, we are a passionate team of experts dedicated to delivering innovative and effective IT services. With a deep understanding of the digital landscape and a commitment to staying at the forefront of the industry, we specialize in crafting tailored solutions that drive measurable results for businesses. From creative and digital services to custom solutions and strategic consulting, we are here to help you succeed in today's ever-evolving digital world.</p>
          </div>
        </div>
      </section>
      <div className="seperation"></div>
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
    <div className="seperation"></div>
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
    <div className="seperation"></div>
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
    <div className="seperation"></div>
    <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy-4.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">App
                            <br /> Development</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We turn your business vision into an immersive digital reality. With our app development services, we can help you create a user-friendly. and intuitive mobile application that can help you convert your users into loyal customers. We understand that your users are looking for a seamless experience, and our team of experts ensures that your app delivers just that.</p>
                    </div>
                </div>
            </section>
    <div className="seperation"></div>
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
    <div className="seperation"></div>
    <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://outsourcetoasia.io/wp-content/uploads/2023/03/Artboard-1-copy-13.png" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Content
                            <br /> Writing</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We believe in delivering top-notch content writing services that will help you achieve your business goals. Our team of experienced writers is committed to providing you with well-researched, grammatically correct, and engaging content that will help you establish your online presence and increase your brand visibility.</p>
                    </div>
                </div>
            </section>
    <div className="seperation"></div>
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
    <div className="seperation"></div>
  </>
  )
}
