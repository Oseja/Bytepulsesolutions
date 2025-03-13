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
                <title>BYTEPULSE SOLUTION - Content-Writing</title>
                <meta name="description" content="IT Services Providers" />
                <link rel='canonical' href='/Content-Writing' />
            </Helmet>
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
            <section>
                <div className="ban">
                    <img src={creativeban} alt="" />
                </div>
            </section>
            <section>
                <div className="midSection">
                    <div className="midRightContent">
                        <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                            Convert your readers into subscribers, one word at a time</span>
                        <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">In a world where attention is a rare commodity, capturing the attention of your target audience is crucial. That's where our content writing service comes in. We don't just write words, we weave a story that resonates with your readers and keeps them hooked. Our expert writers create content that engages, informs, and inspires your readers, encouraging them to take action and subscribe to your brand.</p>
                        <div className="Skill-Button" data-aos="fade-up" data-aos-delay="600" data-aos-duration="700">
                            <Link to="/Contact"><button >Get Started &gt;</button></Link>
                        </div>
                    </div>
                    <div className="midLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                        <img src="https://img.freepik.com/free-vector/creative-content-writing-copywriting-blogging-internet-marketing-article-text-editing-publishing-online-documents-writer-editor-character_335657-178.jpg?ga=GA1.1.1309752824.1741904808&semt=ais_authors_boost" alt="Banner Image" />
                    </div>
                </div>
            </section>
        </>
    )
}
