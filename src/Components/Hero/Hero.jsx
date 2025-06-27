import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Hero.css";
import pooji from '../../assets/pooji.jpg';

const Hero = () => {
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="hero" id="home">
      <div className="hero-left" data-aos="slide-right">
        <div className="image-container">
          <img src={pooji} alt="Poojitha S K" className="hero-img" />
        </div>
      </div>

      <div className="hero-right" data-aos="fade-left" data-aos-delay="200">
        <h1 className="hero-title">
          Hello, I'm <span className="highlight">Poojitha S K</span>
        </h1>
        <h3 className="hero-subtitle">
          SSOC ' 25  |  Member @ Women Tech makers Google  |  MSME finalist  | GSSoC '25 | Sophomore @ SECE
        </h3>

        <p className="hero-description" data-aos="fade-up" data-aos-delay="400">
          Passionate about building robust, scalable web applications with a focus on clean code and user experience. Currently exploring the latest in web technologies and best practices.
        </p>

        <blockquote className="hero-quote" data-aos="zoom-in-up" data-aos-delay="600">
          “才能は開花させるもの。センスは磨くもの。”
          <span>― Tobio Kageyama (Haikyuu!!)</span>
        </blockquote>

        <div className="hero-action" data-aos="fade-up" data-aos-delay="900">
          <a
            href="https://www.linkedin.com/in/poojitha-s-k-67844b32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hero-connect btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Connect
          </a>
          <a
            href="/Poojitha_Resume.pdf"
            className="hero-resume btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
