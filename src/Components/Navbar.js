import React, { useState , useEffect} from 'react';
import '../All-CSS/Navbar.css';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import logo from '../logo.svg';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false);

  const handleMenuClick = () => {
    setClicked(!clicked);
  };

  

  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  


  return (
    <>
      <nav className={`NavbarItems navbar-}`}>
        <Link exact to="/"><img src={logo}  data-aos="fade-down" data-aos-delay="100" data-aos-duration="1000" className="App-logo" alt="logo" /></Link>
       
        <div className="menu-icons" onClick={handleMenuClick} >
          <i className={`${clicked ? "fas fa-times" : "fas fa-bars"}`} ></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => (
            <li key={index}>
              <Link
                exact
                to={item.url}
                className={`${item.cName} `}
              >
                <i className={item.icon}></i>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
