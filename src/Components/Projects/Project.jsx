import React, { useEffect } from "react";
import lampp from "../../assets/lampp.png";
import smartparkImg from "../../assets/smartpark.jpg";
import dopamindVideo from "../../assets/dopamind.mp4";
import AOS from "aos";

import "aos/dist/aos.css";
import "./Project.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <>
      <div className="image-split">
        <div className="left-half" style={{ backgroundImage: `url(${lampp})` }}></div>
        <div className="right-half" style={{ backgroundImage: `url(${lampp})` }}></div>
        <div className="split-text">プロジェクト</div>
      </div>

      <div className="projects-container" id="projects">
        <h1 className="projects-title">P r o j e c t s</h1>

      
        <div className="project-card" data-aos="fade-up">
          <div className="project-media">
            <img src={smartparkImg} alt="SmartPark" className="project-image" />
          </div>
          <div className="project-content">
            <h2 className="project-name">S m a r t    P a r k (スマートパーク)</h2>
            <p className="project-description">
              SmartPark is an intelligent parking slot booking platform designed to solve urban parking challenges. It allows users to book and lend parking slots, view real-time availability, and manage expiry timers. Ideal for crowded cities and campus environments.
            </p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> React.js, Node.js, Express, MongoDB, Tailwind CSS
            </p>
          </div>
        </div>

        
        <div className="project-card" data-aos="fade-up">
          <div className="project-media">
            <video controls className="project-video">
              <source src={dopamindVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="project-content">
            <h2 className="project-name">D o p a m i n d (ドーパマインド)</h2>
            <p className="project-description">
              Dopamind is an ADHD-friendly task planner tailored for neurodivergent individuals. It helps users break down tasks, visualize priorities, and get dopamine boosts with smart streaks and UI animations. Built to support productivity with empathy.
            </p>
            <p className="tech-stack">
              <strong>Tech Stack:</strong> Html, CSS, JavaScript, React.js, Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
