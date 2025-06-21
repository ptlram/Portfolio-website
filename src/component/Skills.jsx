import React from "react";
import skills from "./Data/skills.json";

function Skills() {
  return (
    <>
      <div className="container skills my-5" id="skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((data) => {
            return (
              <>
                <div
                  className="item"
                  key={data.id}
                  data-aos="zoom-out-up"
                  data-aos-duration="1000"
                >
                  <img src={`/assets/${data.imageSrc}`} alt="" />
                  <h3>{data.title}</h3>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
