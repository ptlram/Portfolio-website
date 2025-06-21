import React from "react";
import pdf from "../component/pdf/Ram_Patel_resume.pdf";
import hero from "../../public/assets/hero/hero.avif";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
function Home() {
  const typedRef = useRef(null);

  useEffect(() => {
    const option = {
      strings: [
        "Hi, I'm Ram Patel",
        "I build modern websites",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      showCursor: false,
    };
    const typed = new Typed(typedRef.current, option);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" id="home">
        <div className="left" data-aos="fade-right" data-aos-duration="1000">
          <h1 ref={typedRef} />
          <a
            href={pdf}
            download="Ram_Patel_resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right" data-aos="fade-left" data-aos-duration="1000">
          <div className="img">
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
