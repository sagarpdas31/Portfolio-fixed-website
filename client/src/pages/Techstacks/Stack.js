


import React, { useState } from "react";
import "./Stackk.css";
import { TechStackList } from "../../utils/TechstackList";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Stack = () => {
  const [visibleCount, setVisibleCount] = useState(12);

  const isExpanded = visibleCount >= TechStackList.length;

  const handleClick = () => {
    if (isExpanded) {
      setVisibleCount(12); // reset
    } else {
      setVisibleCount((prev) => prev + 12); // load next 12
    }
  };

  const visibleTech = TechStackList.slice(0, visibleCount);

  return (
    <div className="container techstack" id="stack">

      <RubberBand>
        <h2 className="text-center col-12 my-4 mb-1 text-uppercase">
          Technology Stack
        </h2>
        <p className="text-center">
          👉 Including Programming Languages, Frameworks, databases, front-end and back-end tools, and APIs
        </p>
      </RubberBand>

      <Fade left>
        <div className="row">
          {visibleTech.map((tech) => (
            <div key={tech._id} className="col-md-3">
              <div className="card m-2 ms-1">
                <div className="card-body">
                  <div className="media d-flex justify-content-center">
                    <tech.icon className="tech-icon" />
                    <h5 className="ms-2">{tech.name}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Fade>

      {/* BUTTON */}
      <div className="button-wrapper">
        <button
          className={`btn modern-btn ${isExpanded ? "danger" : "primary"}`}
          onClick={handleClick}
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>

    </div>
  );
};

export default Stack;