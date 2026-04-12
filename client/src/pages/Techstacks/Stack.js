import React, { useState } from 'react'
import "./Stackk.css"
import { TechStackList } from '../../utils/TechstackList'
import RubberBand from "react-reveal/RubberBand"
import Fade from "react-reveal/Fade"

const Stack = () => {

  const [showAll, setShowAll] = useState(false)

  const visibleTech = showAll ? TechStackList : TechStackList.slice(0, 12
                                                                   ) // show 8 initially

  return (
    <>
      <div className="container techstack" id="stack">
        <RubberBand>
          <h2 className='text-center col-12 my-4 mb-1 text-uppercase'>Technology Stack</h2>
          <p className='text-center'>
            👉 Including Programming Languages, Frameworks, databases, front-end and back-end tools, and APIs
          </p>
        </RubberBand>

        <Fade left>
          <div className='row'>
            {visibleTech.map((tech) => (
              <div key={tech._id} className="col-md-3">
                <div className="card m-2 ms-1">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Fade>

        {/* Show More / Show Less Button */}
        <div className="text-center mt-3">
          <button 
            className="btn btn-outline-success"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

      </div>
    </>
  )
}

export default Stack
