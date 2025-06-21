import React from "react";
import experience from "./Data/experience.json";

function Experience() {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>Experience</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-item"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4 style={{ color: "yellowgreen" }}>
                    {data.startDate}
                    {data.endDate}
                    {data.location}
                  </h4>
                  <h3 style={{ color: "yellow" }}>{data.experiences}</h3>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
