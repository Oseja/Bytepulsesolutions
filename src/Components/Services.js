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
    <title>BYTEPULSE SOLUTION - Services</title>
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
                        <img src="https://img.freepik.com/free-vector/designers-are-working-desing-web-page-web-design-user-interface-user-experience-content-organization_335657-4403.jpg?t=st=1741906558~exp=1741910158~hmac=7342016c0c4d3eaf27476f72d6cdec09e3f13e0ccb48fcb7a3f3ef1ffd633b79&w=996" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/desktop-smartphone-app-development_23-2148683810.jpg?t=st=1741905206~exp=1741908806~hmac=9b17e3e3caa9c92171e876a1249993ef9771e277118c2c721fb431db0c391767&w=740" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/marketing-specialists-computer-with-megaphone-social-media-icons-social-media-marketing-social-networking-internet-marketing-concept-pinkish-coral-bluevector-isolated-illustration_335657-2290.jpg?t=st=1741906282~exp=1741909882~hmac=934b54816db8ed33cd198c590598fa5e399d4778e28c04021e9eb6fcafde493a&w=996" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?t=st=1741906351~exp=1741909951~hmac=2c60be4a702c62b05754004f769f11e2bbb59ea69cad4c9b0e51aa904379cc76&w=740" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/video-files-concept-illustration_114360-4418.jpg?t=st=1741906386~exp=1741909986~hmac=e1309a0891880db6ebcbb24da7fb792d6f349c36054f5b50d4a687969216a845&w=740" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/creative-content-writing-copywriting-blogging-internet-marketing-article-text-editing-publishing-online-documents-writer-editor-character-concept-illustration_335657-1714.jpg?t=st=1741906442~exp=1741910042~hmac=e6fae54dd532a0d0396df6032bdba191e2bee6b269a4f9280942541f7f65a675&w=740" alt="Banner Image" />
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
                        <img src="https://img.freepik.com/free-vector/cloud-computing-security-abstract-concept-illustration_335657-2105.jpg?t=st=1741906501~exp=1741910101~hmac=4fefe8fb2f580e5bfcbc0c97336b35353dd6d2c47a90d3de0c61f8ce4c33750e&w=740" alt="Banner Image" />
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
