import React from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Experience from "./component/Experience";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";
import About from "./component/About";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <About />
        <Experience />
        <Skills />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
