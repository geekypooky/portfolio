import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Project  from "./Components/Projects/project";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/contact";
import "./App.css"; // Importing the main CSS file for global styles



const App = () => {

  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Project/>
      <Contact />
      <Footer />
      {/* Other components can be added here */}
    </div>
  );
}
export default App;