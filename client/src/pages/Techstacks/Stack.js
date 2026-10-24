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
          👉 Including Programming Languages, Frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </RubberBand>

      <Fade left>
        <div className="row g-3 mt-2">
          {visibleTech.map((tech) => (
            <div key={tech._id} className="col-6 col-md-4 col-lg-3">
              <div className="card h-100" title={tech.name}>
                <div className="card-body tech-card-body">
                  <div className="tech-icon-box">
                    <tech.icon className="tech-icon" />
                  </div>
                  <h5 className="tech-name">{tech.name}</h5>
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