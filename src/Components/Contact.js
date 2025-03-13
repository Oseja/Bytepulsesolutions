import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import FormImg from '../FormImg.svg';
import PhoneInput from 'react-phone-input-2'
import axios from 'axios';
import Swal from 'sweetalert2';
import 'react-phone-input-2/lib/style.css'
import '../All-CSS/Contact.css';
import { Helmet } from 'react-helmet';
import AOS from 'aos';
import 'aos/dist/aos.css'
export default function Contact(props) {

  let history = useNavigate();
  const [data, setData] = useState({
    cname: "",
    cemail: "",
    cnumber: "",
    cdate: "",
    cmessage: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      cname: data.cname,
      cemail: data.cemail,
      cphone: data.cphone,
      cdate: data.cdate,
      cmessage: data.cmessage,
    }
    Swal.fire({
      title: 'Please Wait',
      text: 'Your data is being processed',
      onBeforeOpen: () => {
        Swal.showLoading();
      },
      allowOutsideClick: false,
    });
    axios.post('./bytepulse.php', sendData)
      .then((result) => {
        console.log(result.data);
        if (result.data.status === 'valid') {
          Swal.fire({
            title: 'Success',
            text: 'Data and email have been sent successfully',
            icon: 'success',
          });
          history('/');
        }
        else {
          Swal.fire({
            title: 'Error',
            text: 'Invalid User',
            icon: 'error',
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Helmet>
        <title>BYTEPULSE SOLUTION - Contact</title>
        <meta name="description" content="IT Services Providers" />
        <link rel='canonical' href='/Contact' />
      </Helmet>
      <section>
        <div className="bannerSection">
          <div className="bannerLeftImg" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-intranet-illustration_23-2149373420.jpg?ga=GA1.1.1309752824.1741904808&semt=ais_authors_boost" alt="Banner Image" />
          </div>
          <div className="bannerRightContent">
            <span data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">Contact Us</span>
            <p data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700">Our team is always ready to hear from you! Whether you have a question, a concern, or a project in mind, we’re here to help. Don’t hesitate to reach out – we look forward to hearing from you!</p>
          </div>
        </div>
      </section>
      <section>
        <div className="addressMain">
          <div className="IconsMain">
            <div className="phone" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000"  >
              <i data-aos="fade-up" data-aos-delay="500" data-aos-duration="800" className='fas fa-phone'></i><span>Phone Number:</span><br />
              <Link to="tel:+1(832) 500 8811">(832) 500 8811</Link>
            </div>
            <div className="address" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900"  >
              <i className='fas fa-map-marker-alt' data-aos="fade-up" data-aos-delay="700" data-aos-duration="800"></i><span>Address:</span> <br />
              <h1 >2323 S Voss Rd, Suite # 109, Houston, TX 77057</h1>
            </div>
            <div className="email" data-aos="fade-up" data-aos-delay="800" data-aos-duration="800"  >
              <i className='fas fa-envelope' data-aos="fade-up" data-aos-delay="900" data-aos-duration="800"></i><span>Email:</span> <br />
              <Link to="mailto:bytepulsesolution@gmail.com">bytepulsesolution@gmail.com</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="formMain">
          <div className="form" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" >
            <form method='post' onSubmit={submitForm} >
              <h1 data-aos="fade-up" data-aos-delay="300" data-aos-duration="900" className="form-heading" >Get Free Quote Now</h1>
              <input
                data-aos="fade-up" data-aos-delay="400" data-aos-duration="900"
                type="text"
                placeholder="Enter Your Name"
                className="form-name"
                name="cname"
                pattern="^[A-Za-z ]{3,50}$"
                required
                onChange={handleChange}
                value={data.cname}
              />
              <input
                data-aos="fade-up" data-aos-delay="500" data-aos-duration="900"
                type="email"
                placeholder="Enter Your Email"
                className="form-email"
                name="cemail"
                required
                onChange={handleChange}
                value={data.cemail}
              />
              <div className="phone-country" data-aos="fade-up" data-aos-delay="600" data-aos-duration="900">
                <PhoneInput


                  country={'us'}
                  value={data.cphone}
                  className="Countrycode-input PhoneInput"
                  onChange={(value, country, e, formattedValue) => {
                    const countryCode = country.dialCode;
                    const phoneNumber = formattedValue;
                    setData({ ...data, code: countryCode, cphone: phoneNumber });
                  }}
                  inputStyle={{
                    height: '5rem',
                    borderRadius: '.7rem',
                    width: props.screenWidth <= 850 ? '30vw' : '100%',
                  }}
                  inputProps={{
                    name: 'cphone',
                    required: true,
                  }}
                  buttonStyle={{
                    borderRadius: '.4rem'
                  }}
                />
                <input
                  data-aos="fade-up" data-aos-delay="700" data-aos-duration="900"
                  type="date"
                  placeholder='Enter Date Here'
                  className="form-date"
                  name="cdate"
                  required
                  onChange={handleChange}
                  value={data.cdate}
                />
                <textarea
                  data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"
                  placeholder="Message"
                  name="cmessage"
                  className="form-message"
                  required
                  onChange={handleChange}
                  value={data.cmessage}
                ></textarea>
                <div className="buttonForm" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800">
                  <button type="submit" className="form-btn" name="savebtn" >Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div className="formImage" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
            <img src={FormImg} alt="iamge form" loading='lazy' />
          </div>
        </div>
      </section>
    </>
  )
}
