import React from "react";
import { SiReact } from "react-icons/si";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./WorkExp.css";
const WorkExp = () => {
    return (
        <>
            <div className="work" id="work">
                <div className="mt-5 container work-exp">
                    <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                        Work Experience & Interest
                    </h2>
                    <hr />
                    <VerticalTimeline lineColor="#1e1e2c">
                  <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "#1e1e2c" }}
                        contentArrowStyle={{
                            borderRight: "7px solid  white",
                        }}
                        date="April 2025 - July 2025"
                        iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                        icon={<SiReact />}
                    >
                        <h3 className="vertical-timeline-element-title">
                            Web Developer Intern 
                        </h3>
                        <h4>
                            Zidio Development Ltd
                        </h4>
                        <ul>
                            <li>Built reusable React.js components</li>
                            <li>Improved performance by 30% (lazy loading, Redux optimization)</li>
                            <li>Integrated REST APIs for scalable backend communication</li>
                        </ul>
                    </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2023 - present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                               MERN Full Stack Developer
                            </h3>
                            <p>
                                Creative Design, User Experience, Visual Design, Project
                                Management
                            </p>
                        </VerticalTimelineElement>

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2023 - Present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Data Structure & Alogirthm
                            </h3>
                            <p>
                                Array, String, List, Sorting & Searching Algorithms, Recursion, Dynamic Programming, Tree, Graph, Trie.
                            </p>
                        </VerticalTimelineElement>
                      

                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: "white", color: "#1e1e2c" }}
                            contentArrowStyle={{
                                borderRight: "7px solid  white",
                            }}
                            date="2024 July - Present"
                            iconStyle={{ background: "#1e1e2c", color: "#fff" }}
                            icon={<SiReact />}
                        >
                            <h3 className="vertical-timeline-element-title">
                                Open Source
                            </h3>
                            <p>
                                New contributor to open source, actively participating in projects, collaborating on code improvements, and enhancing community-driven software.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default WorkExp;
