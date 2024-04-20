import React,{useState,useEffect}from 'react'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreativeDesign from './Components/CreativeDesign'
import WebDevelopment from './Components/WebDevelopment'
import DigitalMarketing from './Components/DigitalMarketing'
import AppDevelopment from './Components/AppDevelopment'
import VideoAnimation from './Components/VideoAnimation'
import ContentWriting from './Components/ContentWritng'
import CyberSecurity from './Components/CyberSecurity'
import './App.css'
import ScrollToTop from './Components/ScrollToTop'
import DotLoader from "react-spinners/BounceLoader";
export default function App() {
  const [loading , setLoading] = useState(false);
  useEffect(() =>{
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    }, 1500)
  }, [])
 
  return (
    <>
    {
       loading ?
       <div className="App">
       <DotLoader
       color={'#34C5F3'}
       loading={loading}
       size={150}
       className='App'
       />
       </div>
     :
     <BrowserRouter>
     <Navbar />
    <ScrollToTop />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About  />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact  />} />
        <Route path='/Creative-Design' element={<CreativeDesign />} />
        <Route path='/Web-Development' element={<WebDevelopment />} />
        <Route path='/Digital-Marketing' element={<DigitalMarketing />} />
        <Route path='/App-Development' element={<AppDevelopment />} />
        <Route path='/Video-Animation' element={<VideoAnimation />} />
        <Route path='/Content-Writing' element={<ContentWriting />} />
        <Route path='/Cyber-Security' element={<CyberSecurity />} />
        </Routes>
        <Footer />
      </BrowserRouter>
}
    </>
  )
}
