import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import hihi from "../../assets/hihi.png";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  return (
    <>
      <div className="image-split" data-aos="split-image">
        <div className="left-half" style={{ backgroundImage: `url(${hihi})` }}></div>
        <div className="right-half" style={{ backgroundImage: `url(${hihi})` }}></div>
         <div className="split-text">私について</div>
      </div>
      

      <div className="about-container" id="about">
        <div className="about-content" data-aos="fade-up">
          <h1 className="about-title">A b o u t</h1>

          <p className="about-description">
            I’m Poojitha, a full-stack developer focused on building responsive, accessible, and impactful digital solutions. 
            My goal is to bridge functionality and design to improve everyday user experiences. I enjoy solving real-world problems through clean, modular code and thoughtful interfaces.
          </p>

          

          <h2 className="skills-title"> T e c h n i c a l S k i l l s</h2>
          <ul className="skills-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Tailwind CSS</li>
            <li>Node.js, Express.js</li>
            <li>MongoDB, Firebase</li>
            
            <li>Git, GitHub, Deployment (Vercel/Netlify)</li>
          </ul>

          <h2 className="section-title"> I n t e r e s t s</h2>
          <ul className="section-list">
            <li>Exploring human-centered design and user psychology</li>
            <li>Researching health tech and assistive technology solutions</li>
            <li>Participating in hackathons and open-source contributions</li>
            <li>Continuous learning through development, design, and collaboration</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
