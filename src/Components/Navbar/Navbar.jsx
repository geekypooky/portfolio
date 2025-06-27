import React, { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
import curly from "../../assets/curly.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img
        src={curly}
        alt="icon"
        className="logo"
        style={{ width: "130px", height: "auto" }}
      />
      

      <ul className="nav-menu">
        <li>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={menu === "home" ? "active-link" : ""}
            onClick={() => setMenu("home")}
          >
            <p>H o m e 🍜</p>
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={menu === "about" ? "active-link" : ""}
            onClick={() => setMenu("about")}
          >
            <p>A b o u t 🍣</p>
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={menu === "projects" ? "active-link" : ""}
            onClick={() => setMenu("projects")}
          >
            <p>P r o j e c t s ♨️</p>
          </Link>
        </li>
        <li>
          <Link
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={menu === "portfolio" ? "active-link" : ""}
            onClick={() => setMenu("portfolio")}
          >
            <p>P o r t f o l i o ⛩️</p>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={menu === "contact" ? "active-link" : ""}
            onClick={() => setMenu("contact")}
          >
            <p>C o n t a c t 🍘</p>
          </Link>
        </li>
      </ul>

      <div className="nav-connect">私とつながってください🏮</div>
    </div>
  );
};

export default Navbar;
