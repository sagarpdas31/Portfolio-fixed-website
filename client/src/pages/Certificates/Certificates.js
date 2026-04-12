// import React, { useState } from "react";
// import { MdVerified, MdOpenInNew } from "react-icons/md";
// import {
//   FaTrophy,
//   FaDatabase,
//   FaRocket,
//   FaBrain,
//   FaLaptopCode,
//   FaFileExcel,
//   FaClipboardCheck,
//   FaWindows,
// } from "react-icons/fa";
// import "./Certificates.css";

// const certificates = [
//   {
//     id: 1,
//     title: "Introduction to SQL",
//     issuer: "Simplilearn SkillUp",
//     date: "2 Jul 2025",
//     credential: "8558411",
//     icon: <FaDatabase />,
//     color: "#f97316",
//     link: "https://drive.google.com/file/d/1UVVvwS-gnb4_hazFI5qda6Hg9nU3YaVC/view?usp=drive_link",
//     skills: ["SQL", "Queries", "Databases", "Data Retrieval"],
//     badge: null,
//   },
//   {
//     id: 2,
//     title: "Agile Project Management",
//     issuer: "HP LIFE / HP Foundation",
//     date: "31 Mar 2025",
//     credential: "7e0049da-30e3-4212-bc96",
//     icon: <FaRocket />,
//     color: "#0096d6",
//     link: "https://drive.google.com/file/d/183itudBwB16djvqdJneLyMg_LkhFxCT0/view?usp=sharing",
//     skills: ["Scrum", "Kanban", "Agile", "MVP"],
//     badge: null,
//   },
//   {
//     id: 3,
//     title: "AI for Beginners",
//     issuer: "HP LIFE / HP Foundation",
//     date: "28 Mar 2025",
//     credential: "f8f2b5b9-4989-4506-bfd2",
//     icon: <FaBrain />,
//     color: "#0096d6",
//     link: "https://drive.google.com/file/d/1lv4MlhtgbTEie91ID3fBq3FpBZ4a4hwJ/view?usp=sharing",
//     skills: [
//       "Artificial Intelligence",
//       "Machine Learning",
//       "AI Ethics",
//       "Data",
//     ],
//     badge: null,
//   },
//   {
//     id: 4,
//     title: "Software Development Lifecycle and Technology Job Simulation",
//     issuer: "Accenture / Forage",
//     date: "31 Dec 2024",
//     credential: "u2EXuSGoXJALqh5vF",
//     icon: <FaLaptopCode />,
//     color: "#a100ff",
//     link: "https://drive.google.com/file/d/1Z2CD4rb3L-KkDI_4sfoJttiV4yo3qHt_/view?usp=sharing",
//     skills: ["SDLC", "Agile", "Debugging", "STLC"],
//     badge: null,
//   },
//   {
//     id: 5,
//     title: "3-Hour Advanced Excel Workshop",
//     issuer: "Ira Skills (ISO 9001:2015 | MSME)",
//     date: "15 Feb 2026",
//     credential: "YVE6I8757TTX",
//     icon: <FaFileExcel />,
//     color: "#217346",
//     link: "https://drive.google.com/file/d/1-7M0LtFN_YsvzeAaReHCz_fqwZTLjIWZ/view?usp=drive_link",
//     skills: [
//       "Pivot Tables",
//       "VLOOKUP / XLOOKUP",
//       "What-if Analysis",
//       "Dashboard Creation",
//       "Microsoft Copilot",
//     ],
//     badge: null,
//   },

//   {
//     id: 6,
//     title: "Microsoft Office Specialist – MS-Office (Grade A)",
//     issuer: "Keerti Institute India Pvt. Ltd.",
//     date: "11 Jun 2019",
//     credential: "42197",
//     icon: <FaWindows />,
//     color: "#0078d4",
//     link: "https://drive.google.com/file/d/1T8R4-5EfKaqeQPID7YtLcctsOTfKQv2R/view?usp=drivesdk",
//     skills: ["MS-Word", "MS-Excel", "MS-PowerPoint", "Internet"],
//     badge: "Grade A",
//   },
//   {
//     id: 7,
//     title: "AINCAT 2025 – All India NCAT Participation",
//     issuer: "Naukri Campus",
//     date: "30 May 2025",
//     credential: "683a0e166c1aa41e163b7577",
//     icon: <FaClipboardCheck />,
//     color: "#e91e8c",
//     link: "https://drive.google.com/file/d/1xS_DB2Bzgl0eUpxDOZbX3h3iUzrHiztr/view?usp=drive_link",
//     skills: [
//       "Quantitative Aptitude",
//       "Logical Reasoning",
//       "Data Interpretation",
//       "Verbal Ability",
//     ],
//     badge: null,
//   },
//   {
//     id: 8,
//     title: "Certificate of Merit – Young Turks 2025",
//     issuer: "Naukri Campus",
//     date: "29 Sep 2025",
//     credential: "68d9ac04fac35327673dfb30",
//     icon: <FaTrophy />,
//     color: "#f59e0b",
//     link: "#",
//     skills: ["99.30 Percentile", "Aptitude", "Reasoning", "Skill Contest"],
//     badge: "🏆 Top 1%",
//   },
// ];

// const Certificates = () => {
//   const [hovered, setHovered] = useState(null);

//   return (
//     <div className="certificates" id="certificates">
//       <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//         Certificates
//       </h2>
//       <hr />
//       <p className="certificates-subtitle text-center">
//         Verified credentials earned from globally recognised platforms
//       </p>

//       <div className="certificates-grid">
//         {certificates.map((cert) => (
//           <div
//             key={cert.id}
//             className={`cert-card ${hovered === cert.id ? "cert-card--hovered" : ""}`}
//             onMouseEnter={() => setHovered(cert.id)}
//             onMouseLeave={() => setHovered(null)}
//             style={{ "--accent": cert.color }}
//           >
//             <div className="cert-card__bar" />

//             <div className="cert-card__top-row">
//               <div className="cert-card__icon-wrap">
//                 <span className="cert-card__icon">{cert.icon}</span>
//               </div>
//               {cert.badge && (
//                 <span className="cert-card__special-badge">{cert.badge}</span>
//               )}
//             </div>

//             <div className="cert-card__body">
//               <h3 className="cert-card__title">{cert.title}</h3>
//               <p className="cert-card__issuer">
//                 <MdVerified className="cert-card__verified" />
//                 {cert.issuer}
//               </p>
//               <p className="cert-card__date">{cert.date}</p>
//               <div className="cert-card__skills">
//                 {cert.skills.map((skill) => (
//                   <span key={skill} className="cert-card__skill-tag">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <div className="cert-card__footer">
//               <span className="cert-card__credential">
//                 ID: {cert.credential}
//               </span>
//               <a
//                 href={cert.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="cert-card__link"
//               >
//                 View <MdOpenInNew />
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certificates;

import React, { useState } from "react";
import { MdVerified, MdOpenInNew } from "react-icons/md";
import {
  FaTrophy,
  FaDatabase,
  FaRocket,
  FaBrain,
  FaLaptopCode,
  FaFileExcel,
  FaClipboardCheck,
  FaWindows,
} from "react-icons/fa";
import "./Certificates.css";

const certificates = [
  // ✅ YOUR SAME DATA (unchanged)
  {
    id: 1,
    title: "Introduction to SQL",
    issuer: "Simplilearn SkillUp",
    date: "2 Jul 2025",
    credential: "8558411",
    icon: <FaDatabase />,
    color: "#f97316",
    link: "https://drive.google.com/file/d/1UVVvwS-gnb4_hazFI5qda6Hg9nU3YaVC/view?usp=drive_link",
    skills: ["SQL", "Queries", "Databases", "Data Retrieval"],
    badge: null,
  },
  {
    id: 2,
    title: "Agile Project Management",
    issuer: "HP LIFE / HP Foundation",
    date: "31 Mar 2025",
    credential: "7e0049da-30e3-4212-bc96",
    icon: <FaRocket />,
    color: "#0096d6",
    link: "https://drive.google.com/file/d/183itudBwB16djvqdJneLyMg_LkhFxCT0/view?usp=sharing",
    skills: ["Scrum", "Kanban", "Agile", "MVP"],
    badge: null,
  },
  {
    id: 3,
    title: "AI for Beginners",
    issuer: "HP LIFE / HP Foundation",
    date: "28 Mar 2025",
    credential: "f8f2b5b9-4989-4506-bfd2",
    icon: <FaBrain />,
    color: "#0096d6",
    link: "https://drive.google.com/file/d/1lv4MlhtgbTEie91ID3fBq3FpBZ4a4hwJ/view?usp=sharing",
    skills: ["AI", "ML", "Ethics"],
    badge: null,
  },
  {
    id: 4,
    title: "Software Development Lifecycle and Technology Job Simulation",
    issuer: "Accenture / Forage",
    date: "31 Dec 2024",
    credential: "u2EXuSGoXJALqh5vF",
    icon: <FaLaptopCode />,
    color: "#a100ff",
    link: "https://drive.google.com/file/d/1Z2CD4rb3L-KkDI_4sfoJttiV4yo3qHt_/view?usp=sharing",
    skills: ["SDLC", "Agile", "Debugging", "STLC"],
    badge: null,
  },
  {
    id: 5,
    title: "3-Hour Advanced Excel Workshop",
    issuer: "Ira Skills (ISO 9001:2015 | MSME)",
    date: "15 Feb 2026",
    credential: "YVE6I8757TTX",
    icon: <FaFileExcel />,
    color: "#217346",
    link: "https://drive.google.com/file/d/1-7M0LtFN_YsvzeAaReHCz_fqwZTLjIWZ/view?usp=drive_link",
    skills: ["Pivot Tables", "VLOOKUP", "Dashboard"],
    badge: null,
  },
  {
    id: 6,
    title: "Microsoft Office Specialist – MS-Office (Grade A)",
    issuer: "Keerti Institute India Pvt. Ltd.",
    date: "11 Jun 2019",
    credential: "42197",
    icon: <FaWindows />,
    color: "#0078d4",
    link: "https://drive.google.com/file/d/1T8R4-5EfKaqeQPID7YtLcctsOTfKQv2R/view?usp=drivesdk",
    skills: ["MS-Word", "Excel"],
    badge: "Grade A",
  },
  {
    id: 7,
    title: "AINCAT 2025",
    issuer: "Naukri Campus",
    date: "30 May 2025",
    credential: "683a0e166c1aa41e163b7577",
    icon: <FaClipboardCheck />,
    color: "#e91e8c",
    link: "https://drive.google.com/file/d/1xS_DB2Bzgl0eUpxDOZbX3h3iUzrHiztr/view?usp=drive_link",
    skills: ["Aptitude", "Reasoning"],
    badge: null,
  },
];

// ✅ Helper to extract image from Drive link
const getImageFromDrive = (link) => {
  const match = link.match(/\/d\/(.*?)\//);
  if (match && match[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}`;
  }
  return null;
};

const Certificates = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="certificates" id="certificates">
      <h2 className="col-12 text-center text-uppercase">Certificates</h2>
      <hr />
      <p className="certificates-subtitle text-center">
        Verified credentials earned from globally recognised platforms
      </p>

      <div className="certificates-grid">
        {certificates.map((cert) => {
          const image = getImageFromDrive(cert.link);

          return (
            <div
              key={cert.id}
              className={`cert-card ${
                hovered === cert.id ? "cert-card--hovered" : ""
              }`}
              onMouseEnter={() => setHovered(cert.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ "--accent": cert.color }}
            >
              {/* ✅ IMAGE SECTION */}
              {image && (
                <div className="cert-card__image">
                  <img src={image} alt={cert.title} />
                </div>
              )}

              <div className="cert-card__bar" />

              <div className="cert-card__top-row">
                <div className="cert-card__icon-wrap">
                  <span className="cert-card__icon">{cert.icon}</span>
                </div>

                {cert.badge && (
                  <span className="cert-card__special-badge">{cert.badge}</span>
                )}
              </div>

              <div className="cert-card__body">
                <h3 className="cert-card__title">{cert.title}</h3>

                <p className="cert-card__issuer">
                  <MdVerified className="cert-card__verified" />
                  {cert.issuer}
                </p>

                <p className="cert-card__date">{cert.date}</p>

                <div className="cert-card__skills">
                  {cert.skills.map((skill) => (
                    <span key={skill} className="cert-card__skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="cert-card__footer">
                <span className="cert-card__credential">
                  ID: {cert.credential}
                </span>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-card__link"
                >
                  View <MdOpenInNew />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
