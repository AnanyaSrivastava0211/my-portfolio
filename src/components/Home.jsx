import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import AOS from 'aos';
import 'aos/dist/aos.css';
import personalData from '../config/data';
import {
  RiGitBranchFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailFill,
  RiTwitterFill
} from '@remixicon/react';

const Home = () => {
  useEffect(() => {
    AOS.init({  
      duration: 1500,
      offset: 120,
      delay: 0,
      easing: 'ease-in-out',
      once: false,  
    });
  }, []);

  return (
    <>
      <div id="home" className="home container-fluid">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6 col-md-6 col-sm-12 home-content px-lg-5 px-3" data-aos="fade-up">
            <h3>Hello, I'm</h3>
            <h1 data-aos="fade-down">{personalData.name}</h1>
            <h3>
              <span><Typewriter
                options={{
                  strings: [personalData.title[0], personalData.title[1], personalData.title[2]],
                  autoStart: true,
                  loop: true,
                }}
              /></span>
            </h3>
            <p className="me-5">
             I enjoy turning ideas into interactive, full-stack web apps using React, Node, and more.
            </p>
            <div className="social-media">
              <a href={personalData.linkedIn}><RiLinkedinFill /></a>
              <a href={personalData.github}><RiGitBranchFill /></a>
              
              <a href={personalData.instagram}><RiInstagramFill /></a>
              <a href={personalData.mail}><RiMailFill /></a>
            </div>
        
          </div>

          {/* Right Image */}
          <div className="col-lg-6 col-md-6 col-sm-12 home-img my-5" data-aos="fade-up">
            <img src={personalData.homeImg} alt="" className="img-fluid" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
