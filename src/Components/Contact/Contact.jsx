
import React from "react";
import "./Contact.css";
import Tranquility from "../../assets/Tranquility.gif";
import sushii from "../../assets/sushii.png";

const Contact = () => {
  return (
    <>
      
      <div className="image-split">
        <div
          className="left-half"
          style={{ backgroundImage: `url(${sushii})` }}
        ></div>
        <div
          className="right-half"
          style={{ backgroundImage: `url(${sushii})` }}
        ></div>
        <div className="split-text">接続しましょう</div>
      </div>

    
      <section className="contact-section" id="contact">
  
        <div className="contact-left">
          <img
            src={Tranquility}
            alt="Tranquility Background"
            className="contact-gif"
          />
        </div>

        <div className="contact-right">
          <h2 className="neon-header">CONTACT DETAILS</h2>
          <div className="contact-details">
            <div className="detail-item">
              <h3>Phone</h3>
              <p>8903867168</p>
            </div>
            <div className="detail-item">
              <h3>Email</h3>
              <p>poojitha.srinivasan.05@gmail.com</p> 
            </div>
            <div className="detail-item">
              <h3>Location</h3>
              <p>Trichy,India</p> 
            </div>
            <div className="detail-item">
              <h3>Social Media</h3>
              <div className="social-links">
              
                
                <a href="https://www.linkedin.com/in/poojitha-s-k-67844b32a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/geekypooky" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;