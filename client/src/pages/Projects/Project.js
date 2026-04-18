import React, { useState } from "react";
import "./Project.css";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";

const projectData = [
    {
        id: 1,
        title: "Chat Web Application",
        image:
            "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=1170",
        skills: ["Node", "Express", "React", "MongoDB"],
        link: "https://socilamediafinalfixed-9iof.onrender.com/chat",
    },
    {
        id: 2,
        title: "Ecommerce Website",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
        skills: ["Node", "Express", "React", "MongoDB"],
        link: "https://sagar-das-ecom-project.vercel.app/",
    },
    {
        id: 3,
        title: "Leave Management to-do",
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
        skills: ["Next.js", "Node", "Express", "Mongo"],
       link: " https://leave-managament-system.vercel.app/"
        // link: "https://flora-frontend.onrender.com/",
    },
    {
        id: 4,
        title: "LinkLoom Social Media",
        image:
            "https://media.istockphoto.com/id/2154222115/photo/multicolored-threads-background.jpg?s=2048x2048&w=is&k=20&c=J18d30lLMwDOmEzappjb8QtGnMVQ3j52QCbW1xEIWLk=",
        skills: ["Node", "Express", "React", "MongoDB"],
        link: "https://linkloomsocialmedia.vercel.app/",
    },
    {
        id: 5,
        title: "Portfolio Website",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        skills: ["Node", "Express", "React", "MongoDB"],
        link: "https://portfolio-fixed-website-w69n.onrender.com/",
    },
    {
        id: 6,
        title: "Flora-Vision",
        image:
            "https://images.unsplash.com/photo-1768400444194-5c83d1a349c8?q=80&w=1172",
        skills: ["React", "Node", "Express", "Python"],
        link: "https://flora-frontend.onrender.com/",
    },

  
];  

/* =========================
   COMPONENT
========================= */
const Project = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    const isExpanded = visibleCount >= projectData.length;

    const handleClick = () => {
        if (isExpanded) {
            setVisibleCount(3);
        } else {
            setVisibleCount((prev) => prev + 3);
        }
    };

    const visibleProjects = projectData.slice(0, visibleCount);

    return (
        <div className="container project" id="project">

            <RubberBand>
                <h2 className="text-center col-12 mt-3 mb-1 text-uppercase">
                    My Recent Projects
                </h2>
                <p className="text-center">
                    👉 Here are my top projects with live link and source code
                </p>
            </RubberBand>

            {/* PROJECT CARDS */}
            <div className="row" id="ads">
                <Spin>
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="col-md-4 px-6">
                            <div className="card rounded mb-4">

                                {/* IMAGE */}
                                <div className="card-image">
                                    <img src={project.image} alt={project.title} />
                                </div>

                                {/* SKILLS */}
                                <div className="card-image-overly m-auto mt-3">
                                    {project.skills.map((skill, index) => (
                                        <span key={index} className="card-detail-badge">
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* BODY */}
                                <div className="card-body text-center">
                                    <h5 className="text-uppercase">{project.title}</h5>

                                    <a
                                        className="ad-btn"
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Project Link
                                    </a>
                                </div>

                            </div>
                        </div>
                    ))}
                </Spin>
            </div>

            {/* BUTTON (same logic as Certificates) */}
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

export default Project;
