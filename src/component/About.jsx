import React from "react";
import about from "./Data/about.json";
import pdf from "./pdf/Ram_Patel_resume.pdf";

const About = () => {
  const data = about[0];

  return (
    <div className="container" id="about">
      <h1>About Me</h1>

      <div
        className="about-card about"
        data-aos="zoom-in-up"
        data-aos-duration="1000"
      >
        <div className="about-img">
          <img src={`/assets/${data.profile}`} alt={data.name} />
        </div>
        <div className="about-info">
          <ul>
            <li>
              <strong>Name:</strong>
              <span>{data.name}</span>
            </li>
            <li>
              <strong>Age:</strong>
              <span>{data.age}</span>
            </li>
            <li>
              <strong>From:</strong>
              <span>{data.location}</span>
            </li>
            <li>
              <strong>Stack:</strong>
              <span>{data.role}</span>
            </li>
            <li>
              <strong>Explored:</strong>
              <span>{data.explored}</span>
            </li>
            <li>
              <strong>Goal:</strong>
              <span>{data.goal}</span>
            </li>
          </ul>

          <div className="about-actions">
            <a href={pdf} download="Ram_Patel_resume.pdf" className="btn">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
