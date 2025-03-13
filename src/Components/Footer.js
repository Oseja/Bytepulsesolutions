import React, {useEffect} from 'react'
import '../All-CSS/Footer.css'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import { MenuFooter } from './MenuFooter'
import { MenuFooterTwo } from './MenuFooterTwo'
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Footer(props) {
    useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);
    return (
        <>
            <footer > 
                <div className='FooterItems' data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                    <div className="logoContent">
                        <Link exact to="/"><img src={logo} className="FooterApp-logo" alt="logo" /></Link>
                        <p>At BytePulse Solutions, we're a passionate team of IT experts committed to delivering innovative and effective digital solutions. With a deep understanding of the digital landscape and a relentless drive to stay at the forefront of the industry, we specialize in crafting tailored IT solutions that drive measurable results for businesses. From creative and digital services to custom solutions and strategic consulting, we are dedicated to helping you succeed in today's ever-evolving digital world.</p>
                    </div>

                    <div className="footer-option">
                        <ul>
                            <h1>Our Services</h1>
                            {MenuFooter.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link exact to={item.url}
                                            className={`${item.cName}`}>
                                            <i className={item.icon}></i>{item.title}</Link>
                                    </li>
                                );
                            })}

                        </ul>
                    </div>
                    <div className="footer-work">
                        <ul>
                            <h1>Services</h1>
                            {MenuFooterTwo.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <Link exact to={item.url}
                                            className={`${item.cName}`}>
                                            <i className={item.icon}></i>{item.title}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="footer-contact">
                        <ul>
                            <h1>Contact US</h1>
                            <h5>BYTEPULSE SOLUTION</h5>
                            <li
                                className='footer-links-contact'><i className='fas fa-map-marker-alt'></i><span>BYTEPULSE SOLUTION <br />
                                    2323 S Voss Rd, Suite # 109 , Houston, TX 77057</span></li>
                            <li className='footer-links-contact'><i className='fas fa-envelope'></i>
                                <span className='maillink'><Link to="mailto:bytepulsesolution@gmail.com">bytepulsesolution@gmail.com</Link></span></li>
                            <li className='footer-links-contact'><i className='fas fa-globe'></i>
                                <span className='weblink'><Link to="www.bytepulsesolutions.com">www.bytepulsesolutions.com
                                </Link></span></li>
                            <li className='footer-links-contact'><i className='fas fa-phone'></i>
                                <span className='phonelink'><Link to="tel:+1(832) 500 8811">(832) 500 8811</Link></span></li>
                        </ul>
                    </div>
                    <div className="footer-socials">
                        <h1>Follow US</h1>
                        <ul>
                            <Link to="#">
                                <li><i className='fab fa-facebook'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-instagram'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-twitter'></i></li>
                            </Link>
                            {/* <Link to="">
                                <li><i className='fab fa-youtube'></i></li>
                            </Link> */}
                            {/* <Link to="">
                                <li><i className='fab fa-linkedin'></i></li>
                            </Link> */}
                            <Link to="#">
                                <li><i className='fab fa-reddit'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-tiktok'></i></li>
                            </Link><Link to="#">
                                <li><i className='fab fa-pinterest'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-whatsapp'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-threads'></i></li>
                            </Link>
                            <Link to="#">
                                <li><i className='fab fa-tumblr'></i></li>
                            </Link>
                            {/* <Link to="">
                                <li><i className='fab fa-yelp'></i></li>
                            </Link> */}
                        </ul>
                    </div>
                </div>
                <p className='lastend'>
                    <i className='fas fa-copyright'></i>
                    All Rights Reserved
                </p>
            </footer>
        </>
    )
}
