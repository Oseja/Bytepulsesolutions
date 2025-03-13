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
                <title>BYTEPULSE SOLUTION - App Development</title>
                <meta name="description" content="IT Service Providers" />
                <link rel='canonical' href='/App-Development' />
            </Helmet>
            <section>
                <div className="bannerSection">
                    <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://img.freepik.com/free-vector/app-development-illustration_52683-47931.jpg?t=st=1741906937~exp=1741910537~hmac=9bbcf494a8a45d266281f97693e4d6cacc516ee2a079d4e669cc1c29a580d9d4&w=996" alt="Banner Image" />
                    </div>
                    <div className="bannerRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">App
                            <br /> Development</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">We turn your business vision into an immersive digital reality. With our app development services, we can help you create a user-friendly. and intuitive mobile application that can help you convert your users into loyal customers. We understand that your users are looking for a seamless experience, and our team of experts ensures that your app delivers just that.</p>
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
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Convert your users into customers, one tap at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Our apps are designed to not just impress, but to engage your users and encourage them to take action. We believe that every tap should be an opportunity to turn a user into a customer, and we make sure that every element of your app is optimized to do just that. From intuitive user interfaces to slick animations, we strive to make your app an experience that your users will love and keep coming back to.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://img.freepik.com/free-vector/app-development-concept-illustration_114360-5164.jpg?t=st=1741906351~exp=1741909951~hmac=2c60be4a702c62b05754004f769f11e2bbb59ea69cad4c9b0e51aa904379cc76&w=740" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
