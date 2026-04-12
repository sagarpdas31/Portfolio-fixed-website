import React, { useState } from "react";
import "./Certificates.css";
import RubberBand from "react-reveal/RubberBand";
import Spin from "react-reveal/Spin";

/* =========================
   🖼️ IMAGES
========================= */
import SQL from "../../utils/SQL.png";
import AL from "../../utils/AL.png";
import Agile from "../../utils/Agile.png";
import Excel from "../../utils/Excel.jpeg";
import NCAT from "../../utils/NCAT.jpeg";
import SDLC from "../../utils/SDLC.png";
import Keeti from "../../utils/Keeti.jpeg";
import Yound from "../../utils/Yound.png";

/* =========================
   📦 DATA (UNCHANGED)
========================= */
const certificates = [
  {
    id: 1,
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    image: SQL,
    link: "https://drive.google.com/file/d/1UVVvwS-gnb4_hazFI5qda6Hg9nU3YaVC/view",
    skills: ["SQL", "Queries", "Databases", "Data"],
  },
  {
    id: 2,
    title: "Agile Project Management",
    issuer: "HP LIFE",
    image: Agile,
    link: "https://drive.google.com/file/d/183itudBwB16djvqdJneLyMg_LkhFxCT0/view",
    skills: ["Agile", "Scrum", "Kanban"],
  },
  {
    id: 3,
    title: "AI for Beginners",
    issuer: "HP LIFE",
    image: AL,
    link: "https://drive.google.com/file/d/1lv4MlhtgbTEie91ID3fBq3FpBZ4a4hwJ/view",
    skills: ["AI", "ML", "Ethics"],
  },
  {
    id: 4,
    title: "Software Development Lifecycle",
    issuer: "Accenture",
    image: SDLC,
    link: "https://drive.google.com/file/d/1Z2CD4rb3L-KkDI_4sfoJttiV4yo3qHt_/view",
    skills: ["SDLC", "Debugging", "Agile"],
  },
  {
    id: 5,
    title: "Advanced Excel Workshop",
    issuer: "Ira Skills",
    image: Excel,
    link: "https://drive.google.com/file/d/1-7M0LtFN_YsvzeAaReHCz_fqwZTLjIWZ/view",
    skills: ["Excel", "VLOOKUP", "Pivot"],
  },
  {
    id: 6,
    title: "Microsoft Office Specialist",
    issuer: "Keerti Institute",
    image: Keeti,
    link: "https://drive.google.com/file/d/1T8R4-5EfKaqeQPID7YtLcctsOTfKQv2R/view",
    skills: ["Word", "Excel"],
  },
  {
    id: 7,
    title: "AINCAT 2025",
    issuer: "Naukri.com",
    image: NCAT,
    link: "https://drive.google.com/file/d/1xS_DB2Bzgl0eUpxDOZbX3h3iUzrHiztr/view",
    skills: ["Aptitude", "Reasoning"],
  },
  {
    id: 8,
    title: "Young Turks 2025",
    issuer: "Naukri.com",
    image: Yound,
    link: "https://drive.google.com/file/d/1VFnCXLsDHBI6b-um-PRvBXDNADXCSDwq/view",
    skills: ["Learning", "Practice"],
  },
];

/* =========================
   🚀 COMPONENT
========================= */
const Certificates = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const isExpanded = visibleCount >= certificates.length;

  const handleClick = () => {
    if (isExpanded) {
      setVisibleCount(3);
    } else {
      setVisibleCount((prev) => prev + 3);
    }
  };

  const trimText = (text, limit = 25) =>
    text.length > limit ? text.substring(0, limit) + "..." : text;

  const visibleCertificates = certificates.slice(0, visibleCount);

  return (
    <div className="container certificates" id="certificates">

      <RubberBand>
        <h2 className="text-center col-12 mt-3 mb-1 text-uppercase">
          My Certificates
        </h2>
        <p className="text-center">
          👉 Verified certifications and achievements
        </p>
      </RubberBand>

      {/* CARDS (PROJECT STYLE) */}
      <div className="row" id="ads">
        <Spin>
          {visibleCertificates.map((cert) => (
            <div key={cert.id} className="col-md-4 px-6">
              <div className="card rounded mb-4">

                {/* IMAGE */}
                <div className="card-image p-1">
                  <img src={cert.image} alt={cert.title} />
                </div>

                {/* BADGES (Project style) */}
                <div className="card-image-overly m-auto mt-3">
                  {cert.skills.map((skill, index) => (
                    <span key={index} className="card-detail-badge">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* BODY */}
                <div className="card-body text-center">
                  <h6 className="text-uppercase">  {trimText(cert.title, 25)}</h6>
                  <p>{cert.issuer}</p>

                  <a
                    className="ad-btn"
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Certificate
                  </a>
                </div>

              </div>
            </div>
          ))}
        </Spin>
      </div>

      {/* BUTTON (STANDARD CLEAN STYLE) */}
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

export default Certificates;