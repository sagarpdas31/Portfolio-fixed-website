


// import React from "react";
// import "./Menus.css";
// import { Link } from "react-scroll";

// import {
//     FcHome,
//     FcAbout,
//     FcEngineering,
//     FcVoicePresentation,
//     FcGraduationCap,
//     FcOrgUnit,
//     FcBusinessContact,
//     FcDiploma1,
// } from "react-icons/fc";

// import Zoom from "react-reveal/Zoom";
// import Fade from "react-reveal/Fade";
// import profilePic from "../../utils/photo.jpg";

// const Menus = ({ toggle }) => {

//     // ⚡ GLOBAL SCROLL CONFIG (FIXED)
//     const scrollProps = {
//         spy: true,
//         smooth: false,   // instant jump (fast + reliable)
//         offset: -60,     // FIX: contact section visibility
//         duration: 0,
//         activeClass: "active",
//     };

//     const MenuLink = ({ to, icon, label }) => (
//         <div className="nav-link">
//             <Link to={to} {...scrollProps}>
//                 {icon} {toggle ? label : ""}
//             </Link>
//         </div>
//     );

//     return (
//         <>
//             {toggle ? (
//                 <>
//                     {/* PROFILE */}
//                     <Zoom>
//                         <div className="navbar-profile-pic">
//                             <img src={profilePic} alt="profile" />
//                         </div>
//                     </Zoom>

//                     <Fade left>
//                         <div className="nav-items">

//                             <MenuLink to="home" icon={<FcHome />} label="Home" />
//                             <MenuLink to="about" icon={<FcAbout />} label="About" />
//                             <MenuLink to="education" icon={<FcGraduationCap />} label="Education" />
//                             <MenuLink to="stack" icon={<FcEngineering />} label="Stack" />
//                             <MenuLink to="project" icon={<FcOrgUnit />} label="Project" />
//                             <MenuLink to="work" icon={<FcVoicePresentation />} label="Experience" />

//                             {/* ⚡ FIXED CONTACT ID */}
//                             <MenuLink to="certificates" icon={<FcDiploma1 />} label="Certification" />
//                             <MenuLink to="contact" icon={<FcBusinessContact />} label="Contact" />

//                         </div>
//                     </Fade>
//                 </>
//             ) : (
//                     <div className="nav-items">

//                         <MenuLink to="home" icon={<FcHome />} />
//                         <MenuLink to="about" icon={<FcAbout />} />
//                         <MenuLink to="education" icon={<FcGraduationCap />} />
//                         <MenuLink to="stack" icon={<FcEngineering />} />
//                         <MenuLink to="project" icon={<FcOrgUnit />} />
//                         <MenuLink to="work" icon={<FcVoicePresentation />} />

//                         {/* ⚡ FIXED */}
//                         <MenuLink to="certificates" icon={<FcDiploma1 />} />
//                         <MenuLink to="contact" icon={<FcBusinessContact />} />

//                     </div>
//             )}
//         </>
//     );
// };

// export default Menus;

import React from "react";
import "./Menus.css";
import { Link } from "react-scroll";
import {
    FcHome, FcAbout, FcEngineering, FcVoicePresentation,
    FcGraduationCap, FcOrgUnit, FcBusinessContact, FcDiploma1,
} from "react-icons/fc";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import profilePic from "../../utils/photo.jpg";

const scrollProps = {
    spy: true,
    smooth: false,
    offset: -60,
    duration: 0,
    activeClass: "active",
};

const navGroups = [
    {
        items: [
            { to: "home", icon: <FcHome />, label: "Home" },
            { to: "about", icon: <FcAbout />, label: "About" },
            { to: "education", icon: <FcGraduationCap />, label: "Education" },
            { to: "stack", icon: <FcEngineering />, label: "Stack" },
        ],
    },
    {
        items: [
            { to: "project", icon: <FcOrgUnit />, label: "Project" },
            { to: "work", icon: <FcVoicePresentation />, label: "Experience" },
            { to: "certificates", icon: <FcDiploma1 />, label: "Certification" },
        ],
    },
    {
        items: [
            { to: "contact", icon: <FcBusinessContact />, label: "Contact" },
        ],
    },
];

const MenuLink = ({ to, icon, label, showLabel }) => (
    <div className="nav-link">
        <Link to={to} {...scrollProps} title={label}>
            <span className="nav-icon-chip">{icon}</span>
            {showLabel && <span className="nav-label">{label}</span>}
        </Link>
    </div>
);

const Menus = ({ toggle }) => (
    <>
        {toggle ? (
            <>
                <Zoom>
                    <div className="navbar-profile-pic">
                        <img src={profilePic} alt="profile" />
                        <div className="profile-status">
                            <span className="status-dot" />
                            <span className="status-text">Open to work</span>
                        </div>
                    </div>
                </Zoom>

                <Fade left>
                    <div className="nav-items">
                        {navGroups.map((group, gi) => (
                            <div key={gi} className="nav-group">
                                {group.items.map(item => (
                                    <MenuLink key={item.to} {...item} showLabel />
                                ))}
                                {gi < navGroups.length - 1 && <div className="nav-divider" />}
                            </div>
                        ))}
                    </div>
                </Fade>
            </>
        ) : (
            <div className="nav-items nav-items--collapsed">
                {navGroups.map((group, gi) => (
                    <div key={gi} className="nav-group">
                        {group.items.map(item => (
                            <MenuLink key={item.to} {...item} showLabel={false} />
                        ))}
                        {gi < navGroups.length - 1 && <div className="nav-divider" />}
                    </div>
                ))}
            </div>
        )}
    </>
);

export default Menus;