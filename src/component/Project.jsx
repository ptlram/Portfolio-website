import React from "react";
import projects from "./Data/projects.json";

function Project() {
  return (
    <>
      <div className="container project" id="project">
        <h1>Projects</h1>
        <div className="items my-5">
          {projects.map((data) => {
            return (
              <>
                <div
                  key={data.id}
                  className="card"
                  style={{ width: "18rem" }}
                  data-aos="flip-down"
                  data-aos-duration="1000"
                >
                  <div className="img">
                    <img
                      src={`/assets/${data.imageSrc}`}
                      className="card-img-top"
                      alt="..."
                      style={{ height: "200px", width: "250px" }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a
                      href={data.demo}
                      target="_blank"
                      className="btn btn-primary mx-3"
                    >
                      Demo
                    </a>
                    <a
                      href={data.source}
                      target="_blank"
                      className="btn btn-warning"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Project;
