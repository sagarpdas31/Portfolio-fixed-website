// import React from 'react';
// import './Menus.css';
// import { Link } from "react-scroll";
// import { FcHome, FcAbout, FcEngineering, FcVoicePresentation, FcGraduationCap, FcOrgUnit, FcBusinessContact } from 'react-icons/fc';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
// import profilePic from '../../utils/Photo_1.jpg';
// const Menus = ({ toggle }) => {
//     return (
//         <>
//             {toggle ? (
//                 <>
//                     <Zoom>
//                         <div className="navbar-profile-pic">
//                             <img src={profilePic} alt="profile_pic" />
//                         </div>
//                     </Zoom>
//                     <Fade left>
//                         <div className="nav-items">
//                             <div className="nav-item">
//                                 <div className="nav-link">
//                                     <Link
//                                         to="home"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcHome />
//                                         Home
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="about"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcAbout />
//                                         About
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="education"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcGraduationCap />
//                                         Education
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="stack"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcEngineering />
//                                         Stack
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="project"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcOrgUnit /> Project
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="work"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcVoicePresentation /> Experience
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link
//                                         to="contact"
//                                         spy={true}
//                                         smooth={true}
//                                         offset={-100}
//                                         duration={400}
//                                         activeClass="active"
//                                     >
//                                         <FcBusinessContact />
//                                         Contact
//                                     </Link>
//                                 </div>
//                             </div>

//                         </div>
//                     </Fade>
//                 </>
//             ) : (
//                 <>
//                     <div className="nav-items">
//                         <div className="nav-item">
//                             <div className="nav-link">
//                                 <Link
//                                     to="home"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcHome />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="about"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcAbout />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="education"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcGraduationCap />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="stack"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcEngineering />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="project"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcOrgUnit />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="work"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcVoicePresentation />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link
//                                     to="contact"
//                                     spy={true}
//                                     smooth={true}
//                                     offset={-100}
//                                     duration={400}
//                                     activeClass="active"
//                                 >
//                                     <FcBusinessContact />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )
//             }
//         </>
//     );
// }

// export default Menus;






// import React from 'react';
// import './Menus.css';
// import { Link } from "react-scroll";
// import { FcHome, FcAbout, FcEngineering, FcVoicePresentation, FcGraduationCap, FcOrgUnit, FcBusinessContact, FcDiploma1 } from 'react-icons/fc';
// import Zoom from 'react-reveal/Zoom';
// import Fade from 'react-reveal/Fade';
// import profilePic from '../../utils/photo.jpg';

// const Menus = ({ toggle }) => {
//     return (
//         <>
//             {toggle ? (
//                 <>
//                     <Zoom>
//                         <div className="navbar-profile-pic">
//                             <img src={profilePic} alt="profile_pic" />
//                         </div>
//                     </Zoom>
//                     <Fade left>
//                         <div className="nav-items">
//                             <div className="nav-item">
//                                 <div className="nav-link">
//                                     <Link to="home" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcHome />
//                                         Home
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="about" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcAbout />
//                                         About
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="education" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcGraduationCap />
//                                         Education
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="stack" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcEngineering />
//                                         Stack
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="project" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcOrgUnit />
//                                         Project
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="work" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcVoicePresentation />
//                                         Experience
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="certification" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcDiploma1 />
//                                         Certification
//                                     </Link>
//                                 </div>
//                                 <div className="nav-link">
//                                     <Link to="contact" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                         <FcBusinessContact />
//                                         Contact
//                                     </Link>
//                                 </div>
//                             </div>
//                         </div>
//                     </Fade>
//                 </>
//             ) : (
//                 <>
//                     <div className="nav-items">
//                         <div className="nav-item">
//                             <div className="nav-link">
//                                 <Link to="home" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcHome />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="about" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcAbout />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="education" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcGraduationCap />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="stack" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcEngineering />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="project" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcOrgUnit />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="work" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcVoicePresentation />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="certification" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcDiploma1 />
//                                 </Link>
//                             </div>
//                             <div className="nav-link">
//                                 <Link to="contact" spy={true} smooth={true} offset={-100} duration={400} activeClass="active">
//                                     <FcBusinessContact />
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>
//                 </>
//             )}
//         </>
//     );
// }

// export default Menus;



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

//     // ⚡ GLOBAL SCROLL SETTINGS (FIXED)
//     const scrollProps = {
//         spy: true,
//         smooth: false,   // instant scroll (fast + clean)
//         offset: -80,     // prevents navbar overlap
//         duration: 0,     // instant jump
//         activeClass: "active",
//     };

//     return (
//         <>
//             {toggle ? (
//                 <>
//                     <Zoom>
//                         <div className="navbar-profile-pic">
//                             <img src={profilePic} alt="profile_pic" />
//                         </div>
//                     </Zoom>

//                     <Fade left>
//                         <div className="nav-items">

//                             <div className="nav-link">
//                                 <Link to="home" {...scrollProps}><FcHome /> Home</Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="about" {...scrollProps}><FcAbout /> About</Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="education" {...scrollProps}><FcGraduationCap /> Education</Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="stack" {...scrollProps}><FcEngineering /> Stack</Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="project" {...scrollProps}><FcOrgUnit /> Project</Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="work" {...scrollProps}><FcVoicePresentation /> Experience</Link>
//                             </div>

//                             {/* ⚠️ FIXED NAME */}
//                             <div className="nav-link">
//                                 <Link to="certificates" {...scrollProps}>
//                                     <FcDiploma1 /> Certification
//                                 </Link>
//                             </div>

//                             <div className="nav-link">
//                                 <Link to="contact" {...scrollProps}>
//                                     <FcBusinessContact /> Contact
//                                 </Link>
//                             </div>

//                         </div>
//                     </Fade>
//                 </>
//             ) : (
//                     <div className="nav-items">

//                         <div className="nav-link">
//                             <Link to="home" {...scrollProps}><FcHome /></Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="about" {...scrollProps}><FcAbout /></Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="education" {...scrollProps}><FcGraduationCap /></Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="stack" {...scrollProps}><FcEngineering /></Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="project" {...scrollProps}><FcOrgUnit /></Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="work" {...scrollProps}><FcVoicePresentation /></Link>
//                         </div>

//                         {/* ⚠️ FIXED */}
//                         <div className="nav-link">
//                             <Link to="certificates" {...scrollProps}>
//                                 <FcDiploma1 />
//                             </Link>
//                         </div>

//                         <div className="nav-link">
//                             <Link to="contact" {...scrollProps}>
//                                 <FcBusinessContact />
//                             </Link>
//                         </div>

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
    FcHome,
    FcAbout,
    FcEngineering,
    FcVoicePresentation,
    FcGraduationCap,
    FcOrgUnit,
    FcBusinessContact,
    FcDiploma1,
} from "react-icons/fc";

import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import profilePic from "../../utils/photo.jpg";

const Menus = ({ toggle }) => {

    // ⚡ GLOBAL SCROLL CONFIG (FIXED)
    const scrollProps = {
        spy: true,
        smooth: false,   // instant jump (fast + reliable)
        offset: -60,     // FIX: contact section visibility
        duration: 0,
        activeClass: "active",
    };

    const MenuLink = ({ to, icon, label }) => (
        <div className="nav-link">
            <Link to={to} {...scrollProps}>
                {icon} {toggle ? label : ""}
            </Link>
        </div>
    );

    return (
        <>
            {toggle ? (
                <>
                    {/* PROFILE */}
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img src={profilePic} alt="profile" />
                        </div>
                    </Zoom>

                    <Fade left>
                        <div className="nav-items">

                            <MenuLink to="home" icon={<FcHome />} label="Home" />
                            <MenuLink to="about" icon={<FcAbout />} label="About" />
                            <MenuLink to="education" icon={<FcGraduationCap />} label="Education" />
                            <MenuLink to="stack" icon={<FcEngineering />} label="Stack" />
                            <MenuLink to="project" icon={<FcOrgUnit />} label="Project" />
                            <MenuLink to="work" icon={<FcVoicePresentation />} label="Experience" />

                            {/* ⚡ FIXED CONTACT ID */}
                            <MenuLink to="certificates" icon={<FcDiploma1 />} label="Certification" />
                            <MenuLink to="contact" icon={<FcBusinessContact />} label="Contact" />

                        </div>
                    </Fade>
                </>
            ) : (
                    <div className="nav-items">

                        <MenuLink to="home" icon={<FcHome />} />
                        <MenuLink to="about" icon={<FcAbout />} />
                        <MenuLink to="education" icon={<FcGraduationCap />} />
                        <MenuLink to="stack" icon={<FcEngineering />} />
                        <MenuLink to="project" icon={<FcOrgUnit />} />
                        <MenuLink to="work" icon={<FcVoicePresentation />} />

                        {/* ⚡ FIXED */}
                        <MenuLink to="certificates" icon={<FcDiploma1 />} />
                        <MenuLink to="contact" icon={<FcBusinessContact />} />

                    </div>
            )}
        </>
    );
};

export default Menus;